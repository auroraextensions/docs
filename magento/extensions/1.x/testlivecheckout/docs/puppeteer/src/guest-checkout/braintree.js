/**
 * braintree.js
 *
 * Simulate guest checkout user flow with
 * Braintree as the payment gateway.
 */

/**
 * Test Live Checkout authentication token.
 */
const TLC_AUTH_TOKEN = process.env.TLC_AUTH_TOKEN;

if (!TLC_AUTH_TOKEN) {
	console.error('TLC_AUTH_TOKEN cannot be empty.');

	return;
}

/**
 * Exit on UnhandledPromiseRejection.
 */
process.on('unhandledRejection', down => { throw down });

const puppeteer = require('puppeteer');
const viewportConfig = {
	width: 1280,
	height: 800
};

const crypto = require('crypto');
const GIFEncoder = require('gif-encoder');
const encoder = new GIFEncoder(viewportConfig.width, viewportConfig.height);
const fs = require('fs');
const getPixels = require('get-pixels');

const shopUrl = 'http://dockerized-magento.local';
const imagesDir = './img/guest-checkout-braintree';
const pngDir = imagesDir + '/png';
const gifDir = imagesDir + '/gif';

/**
 * If any of the following do not exist, create them:
 *
 * ./img/guest-checkout-braintree
 * ./img/guest-checkout-braintree/png
 * ./img/guest-checkout-braintree/gif
 */
if (!fs.existsSync(imagesDir)) {
	fs.mkdirSync(imagesDir);
}

if (!fs.existsSync(pngDir)) {
	fs.mkdirSync(pngDir);
}

if (!fs.existsSync(gifDir)) {
	fs.mkdirSync(gifDir);
}

let file = fs.createWriteStream(gifDir + '/walkthrough.gif');

encoder.setFrameRate(60);
encoder.pipe(file);
encoder.setQuality(50);
encoder.setDelay(1000);
encoder.writeHeader();
encoder.setRepeat(0);

var addToGif = function (images, counter = 0) {
	getPixels(images[counter], function (err, pixels) {
		encoder.addFrame(pixels.data);
		encoder.read();

		if (counter === (images.length - 1)) {
			encoder.finish();
		} else {
			addToGif(images, ++counter);
		}
	});
}

/**
 * Get config object to pass to `page.screenshot`.
 */
var getScreenshotConfig = function (step, fullPage) {
	/**
	 * By default, don't show full page.
	 */
	fullPage = fullPage || false;

	return {
		path: (pngDir + '/step-' + step + '.png'),
		fullPage: fullPage
	};
};

/**
 * Set visible step number in the viewport. Useful
 * for demonstrating a walkthrough, step by step.
 */
var setStepIndicator = async function (page, uuid, step) {
	page.evaluate((uuid, step) => {
		(function ($) {
			var element = document.querySelector('[id="' + uuid + '"]');

			if (!element) {
				element = document.createElement('div');
				element.setAttribute('id', uuid);
				document.body.appendChild(element);

				var styles = {
					width: '250px',
					height: '250px',
					position: 'absolute',
					display: 'block',
					top: '0',
					left: '0',
					fontSize: '12em',
					margin: '1rem',
					textAlign: 'center',
					border: '1px solid transparent',
					color: '#fff',
					backgroundColor: 'rgba(128, 128, 128, 0.5)',
					zIndex: '2147483647'
				};

				/**
				 * Set element styles.
				 */
				$(element).css(styles);
			}

			/**
			 * Set/update the step number.
			 */
			element.textContent = step;
		}).call(this, jQuery);
	}, uuid, step);
};

/**
 * Typing input delay.
 */
const typeDelay = {
	delay: 250
};

/**
 * Mouse click delay.
 */
const clickDelay = {
	delay: 250
};

/**
 * waitFor functions timeout.
 */
const waitForTimeout = {
	timeout: 120000
};

/**
 * Billing details.
 */
const billingInfo = {
	firstName: 'Walter',
	middleName: 'Hartwell',
	lastName: 'White',
	email: 'walterhwhite@gmail.com',
	address: '3828 Piermont Drive NE',
	city: 'Albuquerque',
	state: '42',
	postcode: '87111',
	telephone: '5055034455'
};

/**
 * Payment details.
 */
const paymentInfo = {
	ccType: 'VI',
	ccNumber: '4111111111111111',
	ccExprMonth: '12',
	ccExprYear: '28'
};

try {
	(async () => {
		const browser = await puppeteer.launch({ headless: true });
		const webpage = await browser.newPage();
		const uuid = crypto.randomBytes(32).toString('hex');
		var index = 0;

		await webpage.setViewport(viewportConfig);
		await webpage.goto(shopUrl, { waitUntil: 'networkidle2' });

		await webpage.hover('li.nav-4');

		/**
		 * Step 1.
		 */
		console.log('%s. Complete', ++index);
		setStepIndicator(webpage, uuid, index);
		await webpage.screenshot(getScreenshotConfig('0' + index, true));

		const firstNavigation = webpage.waitForNavigation(waitForTimeout);
		await webpage.click('li.nav-4 > ul.level0 > li.nav-4-2 > a.level1');
		await firstNavigation;

		/**
		 * Step 2.
		 */
		console.log('%s. Complete', ++index);
		setStepIndicator(webpage, uuid, index);
		await webpage.screenshot(getScreenshotConfig('0' + index, true));

		const secondNavigation = webpage.waitForNavigation(waitForTimeout);
		await webpage.click('div.category-products > ul > li.item > div.product-info button.btn-cart');
		await secondNavigation;

		/**
		 * Step 3.
		 */
		console.log('%s. Complete', ++index);
		setStepIndicator(webpage, uuid, index);
		await webpage.screenshot(getScreenshotConfig('0' + index, true));

		const thirdNavigation = webpage.waitForNavigation(waitForTimeout);
		await webpage.click('div.cart ul.checkout-types > li > button.btn-proceed-checkout');
		await thirdNavigation;

		/**
		 * Step 4.
		 */
		console.log('%s. Complete', ++index);
		setStepIndicator(webpage, uuid, index);
		await webpage.screenshot(getScreenshotConfig('0' + index, true));

		/**
		 * Click 'Checkout as Guest', then 'Continue'.
		 */
		await webpage.click('ol#checkoutSteps > li#opc-login ul.form-list > li:first-child > input[name="checkout_method"]');
		await webpage.click('button[id="onepage-guest-register-button"]');

		/**
		 * Wait for 'Billing Information' section to load, then
		 * fill out billing details.
		 */
		await webpage.waitForSelector('li[id="opc-billing"].section.allow.active', waitForTimeout);

		await webpage.type('input[id="billing:firstname"]', billingInfo.firstName, typeDelay);
		await webpage.type('input[id="billing:middlename"]', billingInfo.middleName, typeDelay);
		await webpage.type('input[id="billing:lastname"]', billingInfo.lastName, typeDelay);
		await webpage.type('input[id="billing:email"]', billingInfo.email, typeDelay);
		await webpage.type('input[id="billing:street1"]', billingInfo.address, typeDelay);
		await webpage.type('input[id="billing:city"]', billingInfo.city, typeDelay);
		await webpage.type('input[id="billing:postcode"]', billingInfo.postcode, typeDelay);
		await webpage.type('input[id="billing:telephone"]', billingInfo.telephone, typeDelay);
		await webpage.select('select[id="billing:region_id"]', billingInfo.state);

		/**
		 * Click 'Ship to this address', then click 'Continue'.
		 */
		await webpage.click('input[id="billing:use_for_shipping_yes"]');
		await webpage.click('div[id="billing-buttons-container"] > button');

		/**
		 * Step 5.
		 */
		console.log('%s. Complete', ++index);
		setStepIndicator(webpage, uuid, index);
		await webpage.screenshot(getScreenshotConfig('0' + index, true));

		/**
		 * Wait for 'Shipping Method' section to load, then
		 * select 'Fixed' option, then click 'Continue'.
		 */
		await webpage.waitForSelector('li[id="opc-shipping_method"].section.allow.active', waitForTimeout);

		await webpage.click('input[id="s_method_flatrate_flatrate"]');
		await webpage.click('div[id="shipping-method-buttons-container"] > button');

		/**
		 * Step 6.
		 */
		console.log('%s. Complete', ++index);
		setStepIndicator(webpage, uuid, index);
		await webpage.screenshot(getScreenshotConfig('0' + index, true));

		/**
		 * Wait for 'Payment Information' and Braintree hosted fields to load.
		 * Once they're both loaded, fill out the info and click 'Submit'.
		 */
		await webpage.waitForSelector('li[id="opc-payment"].section.allow.active', waitForTimeout);
		await webpage.waitForSelector('iframe[id="braintree-hosted-field-number"]', waitForTimeout);
		await webpage.waitForSelector('iframe[id="braintree-hosted-field-expirationMonth"]', waitForTimeout);
		await webpage.waitForSelector('iframe[id="braintree-hosted-field-expirationYear"]', waitForTimeout);

		/**
		 * Get all <iframe> elements within webpage.
		 */
		const frames = await webpage.frames();

		for (var i = 0; i < frames.length; i += 1) {
			/**
			 * <iframe> Frame object.
			 */
			var frame = frames[i];

			if (frame.name() === 'braintree-hosted-field-number') {
				await frame.waitForSelector('input[id="credit-card-number"]', waitForTimeout);
				await frame.type('input[id="credit-card-number"]', paymentInfo.ccNumber, typeDelay);
			}

			if (frame.name() === 'braintree-hosted-field-expirationMonth') {
				await frame.waitForSelector('input[id="expiration-month"]', waitForTimeout);
				await frame.type('input[id="expiration-month"]', paymentInfo.ccExprMonth, typeDelay);
			}

			if (frame.name() === 'braintree-hosted-field-expirationYear') {
				await frame.waitForSelector('input[id="expiration-year"]', waitForTimeout);
				await frame.type('input[id="expiration-year"]', paymentInfo.ccExprYear, typeDelay);
			}
		}

		await webpage.click('div[id="payment-buttons-container"] > button');

		/**
		 * Step 7.
		 */
		console.log('%s. Complete', ++index);
		setStepIndicator(webpage, uuid, index);
		await webpage.screenshot(getScreenshotConfig('0' + index, true));

		/**
		 * Add tlc_auth_token <input> to payment <form>. Test Live Checkout
		 * will evaluate the payment form parameters for this auth token.
		 */
		await webpage.evaluate(token => {
			(function ($) {
				var input = document.createElement('input');
				var form = $('form#co-payment-form')[0];

				if (!form) {
					return;
				}

				$(input).attr('name', 'tlc_auth_token');
				$(input).attr('type', 'hidden');
				$(input).attr('value', token);

				$(form).append(input);
			}).call(this, jQuery);
		}, TLC_AUTH_TOKEN);

		/**
		 * Wait for Order Review section to load, then click 'Place Order'.
		 */
		await webpage.waitForSelector('li[id="opc-review"].section.allow.active', waitForTimeout);

		const fourthNavigation = webpage.waitForNavigation(waitForTimeout);
		webpage.click('div[id="checkout-review-submit"] > div[id="review-buttons-container"] > button.btn-checkout', clickDelay);

		/**
		 * Step 8.
		 */
		console.log('%s. Complete', ++index);
		setStepIndicator(webpage, uuid, index);
		await webpage.screenshot(getScreenshotConfig('0' + index, true));
		await fourthNavigation;

		/**
		 * Step 9.
		 */
		console.log('%s. Complete', ++index);
		setStepIndicator(webpage, uuid, index);
		await webpage.screenshot(getScreenshotConfig('0' + index, true));

		await browser.close();

		let pngs = fs.readdirSync(pngDir + '/')
		    .map(a => a.substr(0, (a.length - 4)) + '')
		    .sort(function (a, b) {
		        return (fs.statSync(pngDir + '/' + a + '.png').mtime.getTime() - fs.statSync(pngDir + '/' + b + '.png').mtime.getTime());
		    })
		    .map(a => pngDir + '/' + a.substr(0, a.length) + '.png');

		addToGif(pngs);
	})();
} catch (err) {
	console.error(err);
}
