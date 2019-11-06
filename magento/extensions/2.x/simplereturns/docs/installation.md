## Installation Guide

This guide explains how to install and configure Simple Returns for Magento Open Source.

### Table of Contents

+ [Repository](https://github.com/auroraextensions/simplereturns)
+ [Installation](#installation)
  - [Composer](#composer)
+ [Configuration](#configuration)
  - [Module Settings](#module-settings)
  - [Store Information Settings](#store-information-settings)
  - [Shipping Settings](#shipping-settings)
  - [Origin Settings](#origin-settings)
+ [Carriers](#carriers)

### Installation

You can install Simple Returns several ways, however we highly recommend using [Composer](https://getcomposer.org).
Simple Returns has several dependencies, so installing with Composer makes dependency management substantially easier.

#### Composer

```
composer require auroraextensions/simplereturns
```

### Configuration

This is a multi-step process, so please make sure to complete each step.

#### Module Settings

You can view and update module settings by navigating to _Stores > Configuration > Aurora Extensions > Simple Returns_.

1. Under _General Settings_, set _Enable Simple Returns_ to *Yes*.
2. Under _RMA Settings_, select the carrier and method to use for return shipments.

#### Store Information Settings

Return shipments require the store information settings to be set. You can view and update store information settings
by navigating to _Stores > Configuration > General > Store Information_. The following fields must be set:

1. Store Name
2. Store Phone Number
3. Country
4. Region/State
5. ZIP/Postal Code
6. City
7. Street Address

#### Shipping Settings

For information on setting up each shipping carrier, see [Carriers](#carriers) section.

#### Origin Settings

The shipping origin is the recipient address for return shipments, such as a returns processing facility or warehouse.
Return shipments require the shipping origin settings to be set. You can view and update origin settings by navigating
to _Stores > Configuration > Shipping Settings > Origin_. The following fields must be set:

1. Country
2. Region/State
3. ZIP/Postal Code
4. City
5. Street Address

### Carriers

Currently, Simple Returns supports UPS and Fedex for return shipments. The respective carrier settings should be completed
prior to use of Simple Returns.

+ [UPS](https://docs.magento.com/m2/ce/user_guide/shipping/ups.html)
+ [Fedex](https://docs.magento.com/m2/ce/user_guide/shipping/fedex.html)
