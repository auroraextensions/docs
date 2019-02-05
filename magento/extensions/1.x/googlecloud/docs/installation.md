## Installation Guide

This guide explains how to install Google Cloud PHP Autoloader and its dependencies.

### Requirements

+ [Composer](https://getcomposer.org)
+ [modman](https://github.com/colinmollenhour/modman) (Recommended)

### Dependencies

Google Cloud PHP Autoloader loads packages from the [Google Cloud PHP](https://googlecloudplatform.github.io/google-cloud-php) library for use by other extensions.
Listed below are the default packages and subsequent dependencies:

+ [google/cloud-core](https://packagist.org/packages/google/cloud-core)
    - [rize/uri-template](https://packagist.org/packages/rize/uri-template)
    - [google/auth](https://packagist.org/packages/google/auth)
    - [guzzlehttp/guzzle](https://packagist.org/packages/guzzlehttp/guzzle)
    - [guzzlehttp/psr7](https://packagist.org/packages/guzzlehttp/psr7)
    - [monolog/monolog](https://packagist.org/packages/monolog/monolog)
    - [psr/http-message](https://packagist.org/packages/psr/http-message)

Google Cloud PHP Autoloader is pre-packaged with the necessary Composer files, therefore little to no additional configuration should be needed for installation.
If you would like to add additional packages to the mix, simply update the composer.json file and re-run the installer.

### Installing

Below are examples of how to install the extension via `modman` and manually.

###### modman

```
modman init                                                                            # Only run if you haven't initialized modman yet.
modman clone https://github.com/auroraextensions/NickolasBurr_GoogleCloud.git
modman deploy NickolasBurr_GoogleCloud
```

###### Manual

```
cd /var/www                                                                            # Replace /var/www with the Magento root directory.
git -C /tmp/ clone https://github.com/auroraextensions/NickolasBurr_GoogleCloud.git
rsync -Pahmvz --stats \
              --exclude="package.xml" \
              --exclude=".git*" \
              --exclude="modman" \
              /tmp/NickolasBurr_GoogleCloud/* ./
rm -rf /tmp/NickolasBurr_GoogleCloud
```

### Composer

After the extension files are installed, we need to install the library dependencies via Composer.

```
cd /var/www/lib/GoogleCloud   # Replace /var/www with Magento root directory.
composer install --no-dev     # Run the Composer installer.
```

The Composer file is configured to install modules under `lib/GoogleCloud` instead of `lib/GoogleCloud/vendor`.

### Wrap Up

Lastly, you will need to enable the extension from the admin panel. Make sure to clear the configuration cache, and, if any admin sessions are open, log out and log back in.
