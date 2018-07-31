# Authorize.net Guest Checkout

<blockquote class="important">This documentation is for Magento 1.x. For Magento 2.x, see <a href="https://nickolasburr.github.io/docs/magento/extensions/2.x/testlivecheckout/latest/">here</a>.</blockquote>
<blockquote class="notice">Tests were performed using Puppeteer, Magento 1.9.3.9 CE with sample data, and Authorize.net.</blockquote>

## Download

You can download <tt>authorizenet.js</tt> [here](https://nickolasburr.github.io/docs/magento/extensions/1.x/testlivecheckout/1.1.0/puppeteer/src/guest-checkout/authorizenet.js).

## Purpose

To simulate a guest checkout scenario on a Magento 1.x storefront using Authorize.net.

## Steps

1. Visit Home page and click on <tt>Bed & Bath</tt> link under __Home & Decor__ navigation menu
2. On __Bed & Bath__ category page, click <tt>Add to Cart</tt> button on first product
3. On __Cart__ overview page, click <tt>Proceed to Checkout</tt>
4. On __Checkout__ page, click <tt>Checkout as Guest</tt>
5. Fill in __Billing Information__ section and click <tt>Continue</tt>
6. Select <tt>Flat Rate</tt> option as shipping method and click <tt>Continue</tt>
7. Fill in __Payment Information__ section and click <tt>Continue</tt>
8. Click <tt>Place Order</tt> to submit order
9. On success, redirect to Home page

## Walkthrough

![Authorize.net Guest Checkout -- Walkthrough](https://nickolasburr.github.io/docs/magento/extensions/1.x/testlivecheckout/1.1.0/puppeteer/img/guest-checkout/authorizenet/walkthrough.gif)

## Screenshots

![Authorize.net Guest Checkout -- Step 1](https://nickolasburr.github.io/docs/magento/extensions/1.x/testlivecheckout/1.1.0/puppeteer/img/guest-checkout/authorizenet/step-01.png)
![Authorize.net Guest Checkout -- Step 2](https://nickolasburr.github.io/docs/magento/extensions/1.x/testlivecheckout/1.1.0/puppeteer/img/guest-checkout/authorizenet/step-02.png)
![Authorize.net Guest Checkout -- Step 3](https://nickolasburr.github.io/docs/magento/extensions/1.x/testlivecheckout/1.1.0/puppeteer/img/guest-checkout/authorizenet/step-03.png)
![Authorize.net Guest Checkout -- Step 4](https://nickolasburr.github.io/docs/magento/extensions/1.x/testlivecheckout/1.1.0/puppeteer/img/guest-checkout/authorizenet/step-04.png)
![Authorize.net Guest Checkout -- Step 5](https://nickolasburr.github.io/docs/magento/extensions/1.x/testlivecheckout/1.1.0/puppeteer/img/guest-checkout/authorizenet/step-05.png)
![Authorize.net Guest Checkout -- Step 6](https://nickolasburr.github.io/docs/magento/extensions/1.x/testlivecheckout/1.1.0/puppeteer/img/guest-checkout/authorizenet/step-06.png)
![Authorize.net Guest Checkout -- Step 7](https://nickolasburr.github.io/docs/magento/extensions/1.x/testlivecheckout/1.1.0/puppeteer/img/guest-checkout/authorizenet/step-07.png)
![Authorize.net Guest Checkout -- Step 8](https://nickolasburr.github.io/docs/magento/extensions/1.x/testlivecheckout/1.1.0/puppeteer/img/guest-checkout/authorizenet/step-08.png)
![Authorize.net Guest Checkout -- Step 9](https://nickolasburr.github.io/docs/magento/extensions/1.x/testlivecheckout/1.1.0/puppeteer/img/guest-checkout/authorizenet/step-09.png)
