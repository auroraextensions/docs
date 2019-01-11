<blockquote class="important">This documentation is for Magento 1.x. For Magento 2.x, see <a href="https://docs.auroraextensions.com/magento/extensions/2.x/magecroncloudfunctions/latest/">here</a>.</blockquote>

## Installation Guide

This guide explains how to install Mage Cron Cloud Functions.

### Dependencies

+ [Google Cloud PHP Autoloader](https://github.com/auroraextensions/googlecloudphpautoloader)

### Installing

Below are examples of how to install the extension via `modman` and manually.

#### modman

```
modman init                                                                         # Only run if you haven't initialized modman yet.
modman clone https://github.com/auroraextensions/magecroncloudfunctions.git
modman deployMageCronCloudFunctions
```

#### Manual

```
cd /var/www                                                                         # Replace /var/www with the Magento root directory.
git -C /tmp/ clone https://github.com/auroraextensions/magecroncloudfunctions.git
rsync -Pahmvz --stats \
              --exclude="package.xml" \
              --exclude=".git*" \
              --exclude="modman" \
              /tmp/magecroncloudfunctions/* ./
rm -rf /tmp/magecroncloudfunctions
```

### Wrap Up

Before attempting to configure the extension, make sure to clear the configuration cache, and, if any admin sessions are open, log out and log back in.
