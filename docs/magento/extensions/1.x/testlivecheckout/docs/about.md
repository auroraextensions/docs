<blockquote class="important">This documentation is for Magento 1.x. For Magento 2.x, see <a href="https://nickolasburr.github.io/docs/magento/extensions/2.x/testlivecheckout/latest/">here</a>.</blockquote>

## Background

Automated browser testing is an established paradigm that allows a developer to programmatically control a web browser through an API. While it may not seem obvious
at first, this is especially valuable for online retailers because it allows a developer to simulate real user behaviors within the context of a web browser, providing
a mechanism for testing aspects of your storefront.

Test Live Checkout is intended for use with automated browser testing tools, such as [Puppeteer](https://github.com/GoogleChrome/puppeteer) and [Selenium](https://www.seleniumhq.org).
By allowing authenticated users to submit test orders using real products, Test Live Checkout can help aid in the discovery and remediation of issues affecting your checkout, which
subsequently affect your bottom line, too.

Test Live Checkout provides the most value when used with automated browser tests, as part of a comprehensive transaction monitoring plan. However, it can be a helpful
tool to use during development and testing phases, as well, because it provides useful feedback regarding checkout health.
