<blockquote class="important">
This documentation is for the Magento 1.x version. For the Magento 2.x version, see <a href="https://nickolasburr.github.io/magento/extensions/2.x/testlivecheckout/latest/">here</a>.
</blockquote>

## Background

Automated browser testing is an established paradigm that allows a developer to programmatically control a web browser through an API. While it may not seem obvious
at first, this is especially valuable for online retailers because it allows a developer to simulate real user behaviors within the context of a web browser, providing
a mechanism for testing aspects of your storefront.

## About

Test Live Checkout is intended for use with automated browser testing tools, such as [Puppeteer](https://github.com/GoogleChrome/puppeteer) and [Selenium](https://www.seleniumhq.org).
By allowing authenticated users to submit test orders using real products, Test Live Checkout can help aid in the discovery and remediation of issues affecting your checkout, which
subsequently affect your bottom line, too.

Test Live Checkout provides the most value when used with automated browser tests, as part of a comprehensive transaction monitoring plan. However, it can be a helpful
tool to use during development and testing phases, as well, because it provides useful feedback regarding checkout health.

## Download

The extension is available for purchase [here](https://marketplace.magento.com/nickolasburr-nickolasburr-testlivecheckout.html).

## Table of Contents

- [Quick Start](https://nickolasburr.github.io/magento/extensions/1.x/testlivecheckout/latest/quickstart/)
- [Configuration](https://nickolasburr.github.io/magento/extensions/1.x/testlivecheckout/latest/configuration/)
- Puppeteer
    + Guest Checkout
        - [Authorize.net](https://nickolasburr.github.io/magento/extensions/1.x/testlivecheckout/latest/examples/guest-checkout/authorizenet/)
        - [Braintree](https://nickolasburr.github.io/magento/extensions/1.x/testlivecheckout/latest/examples/guest-checkout/braintree/)
