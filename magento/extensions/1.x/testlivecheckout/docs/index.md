# Getting Started

> This documentation is for the Magento 1.x version. For the Magento 2.x version, see [here](https://nickolasburr.github.io/magento/extensions/2.x/testlivecheckout/latest).

## Overview

Test Live Checkout is a Magento extension intended for use with automated browser testing tools, such as [Puppeteer](https://github.com/GoogleChrome/puppeteer).
Automated browser tests simulate real user behaviors through a series of instructions, allowing you to discover subtle, difficult bugs which impact your bottom line.

Test Live Checkout provides the ability to complete the sales transaction pipeline, by allowing an automated browser test to submit an order in the same fashion a real user
would submit an order. This has several advantages over the historical approach, which is to create simple test products and submit the order outside of a browser context.

## Download

The extension is available for purchase [here](https://marketplace.magento.com/nickolasburr-test-live-checkout.html).

## Quick Start

### Requirements

+ [Docker](https://www.docker.com)
+ [Git](https://git-scm.com)
+ [Node](https://nodejs.org)
+ [Authorize.net Sandbox Credentials](https://sandbox.authorize.net)
    - API Login
    - Transaction Key

### Setup

To get started quickly, we're going to use [dockerized-magento](https://github.com/andreaskoch/dockerized-magento).

```
git clone https://github.com/andreaskoch/dockerized-magento
cd dockerized-magento
./magento start
```

Once dockerized-magento has completed setup, we need to disable *Cash On Delivery* payment method and set up *Authorize.net*.

1. From Admin area, navigate to <tt>System</tt> -> <tt>Configuration</tt> -> <tt>Sales</tt> -> <tt>Payment Methods</tt>
2. Click on *Cash On Delivery Payment* and set <tt>Enabled</tt> to <tt>No</tt>
3. Click on *Authorize.net* (not *Authorize.net Direct Post*) and set the following fields:
  - <tt>Enabled</tt> to <tt>Yes</tt>
  - <tt>Payment Action</tt> to <tt>Authorize and Capture</tt>
  - <tt>API Login ID</tt> to your Sandbox account API Login ID
  - <tt>Merchant's Email</tt> to the email used for your Sandbox account
  - <tt>Transaction Key</tt> to your Sandbox account Transaction Key
4. Click <tt>Save Config</tt>
5. If you have caching enabled, clear the config cache.

Once the payment gateway has been configured, we need to install Test Live Checkout.

After installing the extension, complete the following:

1. From Admin area, navigate to <tt>System</tt> -> <tt>Configuration</tt> -> <tt>NEB Extensions</tt> (sidebar) -> <tt>Test Live Checkout</tt>
2. Under <tt>General Settings</tt>, set <tt>Enable Live Checkout Testing</tt> to <tt>Yes</tt>
3. Generate random 32 character alphanumeric string and paste into <tt>Authentication Token</tt> field
4. Click <tt>Save Config</tt>

After configuring the extension, complete the following:

1. Create a workspace directory:

    ```
    mkdir testlivecheckout-puppeteer && cd testlivecheckout-puppeteer
    ```

2. Fetch a copy of the <tt>guest-checkout.js</tt> Puppeteer script:

    ```
    curl -fsL -O https://nickolasburr.github.io/magento/extensions/1.x/testlivecheckout/puppeteer/scripts/guest-checkout.js
    ```

3. Export the authentication token from earlier to your shell environment:

    ```
    export TLC_AUTH_TOKEN="<AUTH_TOKEN_FROM_EARLIER>"
    ```

4. Run <tt>guest-checkout.js</tt>:

    ```
    node guest-checkout.js
    ```

Once the script has finished running, you should have 10 PNG screenshots of the various stages of checkout.

To see an example of what to expect, see [Guest Checkout](https://nickolasburr.github.io/magento/extensions/1.x/testlivecheckout/latest/examples/guest-checkout/).
