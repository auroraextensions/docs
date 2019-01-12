<blockquote class="important">This documentation is for Magento 1.x. For Magento 2.x, see <a href="https://docs.auroraextensions.com/magento/extensions/2.x/tokenizeuserauthentication/latest/">here</a>.</blockquote>

## Installation Guide

This guide explains how to install Tokenize User Authentication for Magento 1.x.

### Prerequisites

+ Purchase extension and download extension archive. See <a href="#where-to-buy">Where to buy</a> if you've not yet purchased the extension.
+ Read <a href="#caveats">Caveats</a> to familiarize yourself with potential issues and risks.

### Getting Started

To get started, we'll show how to install the extension via `modman` and manually.

##### modman

```
cd /var/www                                                           # Replace with the Magento root directory
modman init                                                           # Only run if you haven't initialized modman yet.
mkdir -p .modman/NickolasBurr_TokenizeUserAuthentication && \
tar -C .modman/NickolasBurr_TokenizeUserAuthentication \
    -xzf /path/to/NickolasBurr_TokenizeUserAuthentication-1.1.0.tgz
```

The extension archive does not contain a `modman` file, but one is available [here](https://docs.auroraextensions.com/magento/extensions/1.x/tokenizeuserauthentication/latest/examples/modman).
Run the following to add the `modman` file to the extension root directory:

```
curl -fsL https://docs.auroraextensions.com/magento/extensions/1.x/tokenizeuserauthentication/latest/examples/modman \
     > .modman/NickolasBurr_TokenizeUserAuthentication/modman
```

Lastly, deploy the updates:

```
modman deploy NickolasBurr_TokenizeUserAuthentication
```

##### Manual

```
# Replace /var/www with the Magento root directory.
cd /var/www
mkdir -p /tmp/NickolasBurr_TokenizeUserAuthentication && \
tar -C /tmp/NickolasBurr_TokenizeUserAuthentication \
    -xzf /path/to/NickolasBurr_TokenizeUserAuthentication-1.1.0.tgz
rsync -Pahmvz --stats \
              --exclude="package.xml" /tmp/NickolasBurr_TokenizeUserAuthentication/* ./
rm -rf /tmp/NickolasBurr_TokenizeUserAuthentication
```

### Wrap Up

Before attempting to configure the extension, make sure to clear the configuration cache, and, if any admin sessions are open, log out and log back in.

### Caveats

There are specific areas where close attention to detail should be given to help minimize potential issues and risks.

1. Properly managing an SMTP server is tedious and susceptible to unnecessary risks. It is **highly** recommended to use a third-party email provider like Mailgun or SendGrid.
2. Make sure to test emails prior to installation. If, for whatever reason, you are not able to send emails from Magento, you'll need to disable the extension to access admin and customer accounts.

### Where to buy

You can purchase the extension at the following:

+ <a href="https://store.nickolasburr.com/tokenize-user-authentication.html" target="_blank">https://store.nickolasburr.com/tokenize-user-authentication.html</a>
+ <a href="https://marketplace.magento.com/nickolasburr-nickolasburr-tokenizeuserauthentication.html" target="_blank">https://marketplace.magento.com/nickolasburr-nickolasburr-tokenizeuserauthentication.html</a>
