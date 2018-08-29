## Installation Guide

This guide explains how to install Google Cloud PHP Autoloader and its dependencies.

### Requirements

+ [Composer](https://getcomposer.org)
+ [modman](https://github.com/colinmollenhour/modman) (Recommended)

### Dependencies

Google Cloud PHP Autoloader loads components from the [Google Cloud PHP](https://googlecloudplatform.github.io/google-cloud-php) library for use by other extensions.
Listed below are those dependencies and each dependency requirements, all of which are handled by Composer.

+ [google/cloud-pubsub](https://packagist.org/packages/google/cloud-pubsub)
    - [google/cloud-core](https://packagist.org/packages/google/cloud-core)
    - [google/gax](https://packagist.org/packages/google/gax)

Google Cloud PHP Autoloader is pre-packaged with the necessary Composer files, therefore no additional configuration should be needed for installation.

### Installing

Below are examples of how to install the extension via `modman` and manually.

#### modman

```
modman init                                                                         # Only run if you haven't initialized modman yet.
modman clone https://github.com/nickolasburr/GoogleCloudPHPAutoloader.git
modman deploy GoogleCloudPHPAutoloader
```

#### Manual

```
cd /var/www                                                                         # Replace /var/www with the Magento root directory.
git -C /tmp/ clone https://github.com/nickolasburr/GoogleCloudPHPAutoloader.git
rsync -Pahmvz --stats \
              --exclude="package.xml" \
              --exclude=".git*" \
              --exclude="modman" \
              /tmp/GoogleCloudPHPAutoloader/* ./
rm -rf /tmp/GoogleCloudPHPAutoloader
```

### Composer

After the extension files are installed, we need to install the library dependencies via Composer.

```
cd /var/www/lib/GoogleCloud   # Replace /var/www with Magento root directory.
composer install --no-dev     # Run the Composer installer.
```

The Composer file is configured to install modules under `lib/GoogleCloud` instead of `lib/GoogleCloud/vendor`. This is to make compatibility with Magento 1.x slightly easier.

### Wrap Up

Lastly, you will need to enable the extension from the admin panel. Make sure to clear the configuration cache, and, if any admin sessions are open, log out and log back in.
