# Overview

<blockquote>
  <span style="color: red !important; font-weight: bold !important;">IMPORTANT</span>: Test Live Checkout for Magento 2.x is currently unavailable. It will become available for purchase within the next month.
</blockquote>

<blockquote>
This documentation is for the Magento 2.x version. For the Magento 1.x version, see <a href="https://docs.nickolasburr.com/docs/magento/extensions/1.x/testlivecheckout/latest/">here</a>.
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
