/**
 * guest-checkout.js
 *
 * Simulate guest checkout user flow.
 */
const puppeteer = require('puppeteer');
const imagesDir = '.';
const shopUrl = 'http://dockerized-magento.local';

/**
 * TestLiveCheckout authentication token.
 */
const TLC_AUTH_TOKEN = process.env.TLC_AUTH_TOKEN;

if (!TLC_AUTH_TOKEN) {
	console.error('TLC_AUTH_TOKEN cannot be empty.');

	return;
}

/**
 * Typing input delay.
 */
const typeDelay = {
	delay: 250
};

/**
 * waitFor functions timeout.
 */
const waitForTimeout = {
	timeout: 60000
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

try {
	(async () => {
		const browser = await puppeteer.launch({ headless: true });
		const webpage = await browser.newPage();

		await webpage.setViewport({ width: 1280, height: 800 });
		await webpage.goto(shopUrl, { waitUntil: 'networkidle2' });

		await webpage.hover('li.nav-4');

		console.log('Step One: Complete');
		await webpage.screenshot({ path: (imagesDir + '/step-01.png') });

		const firstNavigation = webpage.waitForNavigation(waitForTimeout);
		await webpage.click('li.nav-4 > ul.level0 > li.nav-4-2 > a.level1');
		await firstNavigation;

		console.log('Step Two: Complete');
		await webpage.screenshot({ path: (imagesDir + '/step-02.png') });

		const secondNavigation = webpage.waitForNavigation(waitForTimeout);
		await webpage.click('div.category-products > ul > li.item > div.product-info button.btn-cart');
		await secondNavigation;

		console.log('Step Three: Complete');
		await webpage.screenshot({ path: (imagesDir + '/step-03.png') });

		const thirdNavigation = webpage.waitForNavigation(waitForTimeout);
		await webpage.click('div.cart ul.checkout-types > li > button.btn-proceed-checkout');
		await thirdNavigation;

		console.log('Step Four: Complete');
		await webpage.screenshot({ path: (imagesDir + '/step-04.png') });

		/**
		 * Click 'Checkout as Guest', then 'Continue'.
		 */
		await webpage.click('ol#checkoutSteps > li#opc-login ul.form-list > li:first-child > input[name="checkout_method"]');
		await webpage.click('button[id="onepage-guest-register-button"]');

		console.log('Step Five: Complete');
		await webpage.screenshot({ path: (imagesDir + '/step-05.png') });

		/**
		 * Fill out Billing Information form.
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

		/**
		 * Select 'New York' from 'State/Province' list.
		 */
		await webpage.select('select[id="billing:region_id"]', '43');

		console.log('Step Six: Complete');
		await webpage.screenshot({ path: (imagesDir + '/step-06.png') });

		/**
		 * Click 'Ship to this address', then click 'Continue'.
		 */
		await webpage.click('input[id="billing:use_for_shipping_yes"]');
		await webpage.click('div[id="billing-buttons-container"] > button');

		console.log('Step Seven: Complete');
		await webpage.screenshot({ path: (imagesDir + '/step-07.png') });

		/**
		 * Wait for Shipping Method section to load, then
		 * select 'Fixed' option, then click 'Continue'.
		 */
		await webpage.waitForSelector('li[id="opc-shipping_method"].section.allow.active', waitForTimeout);
		await webpage.click('input[id="s_method_flatrate_flatrate"]');
		await webpage.click('div[id="shipping-method-buttons-container"] > button');

		console.log('Step Eight: Complete');
		await webpage.screenshot({ path: (imagesDir + '/step-08.png') });

		/**
		 * Wait for 'Payment Information' section to load, then click 'Continue'.
		 */
		await webpage.waitForSelector('li[id="opc-payment"].section.allow.active', waitForTimeout);
		await webpage.click('div[id="payment-buttons-container"] > button');

		console.log('Step Nine: Complete');
		await webpage.screenshot({ path: (imagesDir + '/step-09.png') });

		/**
		 * Add tlc_auth_token <input> to payment <form>. TestLiveCheckout
		 * will evaluate the POST form parameters for this auth token.
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
		await webpage.click('div[id="checkout-review-submit"] > div[id="review-buttons-container"] > button.btn-checkout');
		await fourthNavigation;

		console.log('Step Ten: Complete');
		await webpage.screenshot({ path: (imagesDir + '/step-10.png') });

		await browser.close();
	})();
} catch (err) {
	console.error(err);
}
