## Installation Guide

This guide explains how to install and enable Simple Returns for Magento Open Source.

### Table of Contents

+ [Repository](https://github.com/auroraextensions/simplereturns)
+ [Installation](#installation)
    - [Composer](#composer)
+ [Setup](#setup)
+ [Next Steps](#next-steps)

### Installation

You can install Simple Returns several ways, however we highly recommend using [Composer](https://getcomposer.org).
Simple Returns has several dependencies, so installing with Composer makes dependency management substantially easier.

#### Composer

```
composer require auroraextensions/simplereturns
```

### Setup

Once you've installed the module, you will need to enable it. Run the following from the Magento root directory:

```
./bin/magento module:enable AuroraExtensions_SimpleReturns --clear-static-content
```

Lastly, run the setup upgrade command from the Magento root directory:

```
rm -rf generated/code && ./bin/magento cache:clean && ./bin/magento setup:upgrade
```

### Next Steps

After you've completed the above steps, you will need to configure Simple Returns for use. This is explained at length in
the [Configuration](https://docs.auroraextensions.com/magento/extensions/2.x/simplereturns/latest/configuration/) step.
