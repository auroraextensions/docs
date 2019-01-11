## Installation Guide

This guide explains how to install Google Cloud Storage for Magento 1.9.

### Dependencies

+ [Google Cloud PHP Autoloader](https://github.com/auroraextensions/googlecloudphpautoloader)

### Installing

Below are examples of how to install the extension via `modman` and manually.

#### modman

```
modman init                                                                         # Only run if you haven't initialized modman yet.
modman clone https://github.com/auroraextensions/magegcs.git
modman deploy magegcs
```

#### Manual

```
cd /var/www                                                                         # Replace /var/www with the Magento root directory.
git -C /tmp/ clone https://github.com/auroraextensions/magegcs.git
rsync -Pahmvz --stats \
              --exclude="package.xml" \
              --exclude=".git*" \
              --exclude="modman" \
              /tmp/magegcs/* ./
rm -rf /tmp/magegcs
```

### Wrap Up

Before attempting to configure the extension, make sure to clear the configuration cache, and, if any admin sessions are open, log out and log back in.
