<blockquote class="important">
This documentation is for the Magento 1.x version. For the Magento 2.x version, see <a href="https://nickolasburr.github.io/magento/extensions/2.x/testlivecheckout/latest">here</a>.
</blockquote>

# Guest Checkout

<blockquote class="notice">Tests were performed using Puppeteer and Magento 1.9.3.9 CE with sample data.</blockquote>

## Download

You can download <tt>guest-checkout.js</tt> [here](https://nickolasburr.github.io/magento/extensions/1.x/testlivecheckout/puppeteer/scripts/guest-checkout.js).

## Purpose

To simulate a guest checkout scenario on a Magento 1.x storefront.

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

<a href="/magento/extensions/1.x/testlivecheckout/puppeteer/images/guest-checkout/walkthrough.gif" target="_blank">
  <img src="/magento/extensions/1.x/testlivecheckout/puppeteer/images/guest-checkout/walkthrough.gif">
</a>

## Screenshots

<a href="/magento/extensions/1.x/testlivecheckout/puppeteer/images/guest-checkout/step-01.png" target="_blank">
  <img src="/magento/extensions/1.x/testlivecheckout/puppeteer/images/guest-checkout/step-01.png" alt="Step One" height="250" width="250">
</a>
<a href="/magento/extensions/1.x/testlivecheckout/puppeteer/images/guest-checkout/step-02.png" target="_blank">
  <img src="/magento/extensions/1.x/testlivecheckout/puppeteer/images/guest-checkout/step-02.png" alt="Step Two" height="250" width="250">
</a>
<a href="/magento/extensions/1.x/testlivecheckout/puppeteer/images/guest-checkout/step-03.png" target="_blank">
  <img src="/magento/extensions/1.x/testlivecheckout/puppeteer/images/guest-checkout/step-03.png" alt="Step Three" height="250" width="250">
</a>
<a href="/magento/extensions/1.x/testlivecheckout/puppeteer/images/guest-checkout/step-04.png" target="_blank">
  <img src="/magento/extensions/1.x/testlivecheckout/puppeteer/images/guest-checkout/step-04.png" alt="Step Four" height="250" width="250">
</a>
<a href="/magento/extensions/1.x/testlivecheckout/puppeteer/images/guest-checkout/step-05.png" target="_blank">
  <img src="/magento/extensions/1.x/testlivecheckout/puppeteer/images/guest-checkout/step-05.png" alt="Step Five" height="250" width="250">
</a>
<a href="/magento/extensions/1.x/testlivecheckout/puppeteer/images/guest-checkout/step-06.png" target="_blank">
  <img src="/magento/extensions/1.x/testlivecheckout/puppeteer/images/guest-checkout/step-06.png" alt="Step Six" height="250" width="250">
</a>
<a href="/magento/extensions/1.x/testlivecheckout/puppeteer/images/guest-checkout/step-07.png" target="_blank">
  <img src="/magento/extensions/1.x/testlivecheckout/puppeteer/images/guest-checkout/step-07.png" alt="Step Seven" height="250" width="250">
</a>
<a href="/magento/extensions/1.x/testlivecheckout/puppeteer/images/guest-checkout/step-08.png" target="_blank">
  <img src="/magento/extensions/1.x/testlivecheckout/puppeteer/images/guest-checkout/step-08.png" alt="Step Eight" height="250" width="250">
</a>
<a href="/magento/extensions/1.x/testlivecheckout/puppeteer/images/guest-checkout/step-09.png" target="_blank">
  <img src="/magento/extensions/1.x/testlivecheckout/puppeteer/images/guest-checkout/step-09.png" alt="Step Nine" height="250" width="250">
</a>
<a href="/magento/extensions/1.x/testlivecheckout/puppeteer/images/guest-checkout/step-10.png" target="_blank">
  <img src="/magento/extensions/1.x/testlivecheckout/puppeteer/images/guest-checkout/step-10.png" alt="Step Ten" height="250" width="250">
</a>
