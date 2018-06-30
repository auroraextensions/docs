# Guest Checkout

> This documentation is for the Magento 1.x version. For the Magento 2.x version, see [here](https://nickolasburr.github.io/magento/extensions/2.x/testlivecheckout/latest).

> Tests were performed using the default Magento 1.9.3.9 CE setup with sample data.

## Download

You can download <tt>guest-checkout.js</tt> [here](https://nickolasburr.github.io/magento/extensions/1.x/testlivecheckout/puppeteer/guest-checkout.js).

## Purpose

To simulate a guest checkout scenario.

## Steps

1. Visit Home page and click on 'Home & Decor -> Bed & Bath' navigation link
2. On 'Bed & Bath' category page, click 'Add to cart' button on first product
3. On Cart overview page, click 'Proceed to Checkout'
4. On Checkout page, click 'Checkout as Guest'
5. Fill in 'Billing Information' section and click 'Continue'
6. Select 'Flat Rate' option as shipping method and click 'Continue'
7. Fill in 'Payment Information' section and click 'Continue'
8. Click 'Place Order' to submit order
