# Test Live Checkout

> This documentation is for the Magento 1.x version. For the Magento 2.x version, see [here](https://nickolasburr.github.io/magento/extensions/2.x/testlivecheckout/latest).

## Value Proposition

Test Live Checkout is a premium Magento extension, costing only $49.99 USD. If you're uncertain whether or not you want to purchase, please consider the following:

> The average online order (across all industries) is approximately $82 USD. If Test Live Checkout is able to save just _one_ order of equal value,
> it will have covered its cost in revenue by 1.64x.

## Overview

Test Live Checkout is a Magento extension intended for use with automated browser testing tools, such as [Puppeteer](https://github.com/GoogleChrome/puppeteer).
Automated browser tests simulate real user behaviors through a series of instructions, allowing you to discover subtle, difficult bugs which impact your bottom line.

Test Live Checkout provides the ability to complete the sales transaction pipeline, by allowing an automated browser test to submit an order in the same fashion a real user
would submit an order. This has several advantages over the historical approach, which is to create simple test products and submit the order outside of a browser context.

## Quick Start

+ Install [Docker](https://www.docker.com)
+ Install [Node](https://nodejs.org)
+ Clone [dockerized-magento](https://github.com/andreaskoch/dockerized-magento) and follow setup guide

Once dockerized-magento has completed setup, you need to install the Test Live Checkout extension.

After installing the extension, complete the following:

+ From Admin area, navigate to <tt>System</tt> -> <tt>Configuration</tt> -> <tt>NEB Extensions</tt> (left sidebar) -> <tt>Test Live Checkout</tt>
+ Under <tt>General Settings</tt>, set <tt>Enable Live Checkout Testing</tt> to <tt>Yes</tt>
+ Generate 32 character alphanumeric authentication token and paste into <tt>Authentication Token</tt> field
+ Click <tt>Save</tt>

After configuring the extension, complete the following:

1. Create a workspace directory:

    ```
    mkdir testlivecheckout-puppeteer-scripts && cd testlivecheckout-puppeteer-scripts
    ```

2. Fetch a copy of the <tt>guest-checkout.js</tt> Puppeteer script we'll use shortly:

    ```
    curl -fsL -O https://nickolasburr.github.io/magento/extensions/1.x/testlivecheckout/puppeteer/guest-checkout.js
    ```

3. Export the authentication token from earlier to your shell environment:

    ```
    export TLC_AUTH_TOKEN="<AUTH_TOKEN_FROM_EARLIER>"
    ```

4. Run <tt>guest-checkout.js</tt>:

    ```
    node guest-checkout.js
    ```

Once the script has finished running, you should have 10 PNG screenshots of the various stages of checkout. The last screenshot should be of the Home page, indicating a successful order submission.
