# Test Live Checkout

This documentation is for the Magento 1.x version. For the Magento 2.x version, see [here](https://nickolasburr.github.io/magento/extensions/2.x/testlivecheckout/latest).

## Preamble

Test Live Checkout is a premium Magento extension, costing only $49.99 USD. If you're uncertain whether or not you want to purchase, please consider the following:

> The average online order (across all industries) is approximately $82 USD. If Test Live Checkout is able to save just _one_ order of equal value,
> it will have covered its cost in revenue by 1.64x.

That's an exceptionally small price to pay for such a valuable asset.

## Overview

Test Live Checkout is a Magento extension intended for use with automated browser testing tools, such as [Puppeteer](https://github.com/GoogleChrome/puppeteer).
Automated browser testing simulates real user behaviors through a series of instructions, allowing you to discover subtle, difficult bugs which impact your bottom line.

Test Live Checkout provides the ability to complete the sales transaction pipeline, by allowing an automated browser test to submit an order in the same fashion a real user
would submit an order. This has several advantages over the historical approach, which is to create simple test products and submit the order outside of a browser context.

## Quick Start

+ Install [Docker](https://www.docker.com)
+ Install [Node](https://nodejs.org)
+ Clone [dockerized-magento](https://github.com/andreaskoch/dockerized-magento) and follow setup guide

Once dockerized-magento has completed setup, you need to install the Test Live Checkout extension.

After installing the extension, complete the following:

+ Log into Admin area and navigate to System -> Configuration -> NEB Extensions (left sidebar) -> Test Live Checkout
+ Enable the extension
+ Generate 32 character alphanumeric authentication token and paste into *Authentication Token* field
+ If you want a custom redirect URL, add it to the *Redirect URL* field. By default, it redirects to `/` on successful submission.
+ Click Save

Once the extension configuration is complete, we can now run an example automated test.

+ `mkdir testlivecheckout-puppeteer-scripts && cd testlivecheckout-puppeteer-scripts`
+ `curl -fsL -O https://nickolasburr.github.io/magento/extensions/1.x/testlivecheckout/puppeteer/guest-checkout.js`
+ Replace `testshop.com` with the domain used for dockerized-magento (default is `dockerized-magento.local`) and save file
+ Using the authentication token from earlier, `export TLC_AUTH_TOKEN="<AUTH_TOKEN_FROM_EARLIER>"`
+ `node guest-checkout.js`

Once the script has finished running, you should 10 PNG screenshots of the various stages of checkout.
