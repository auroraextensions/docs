## Configuration Guide

This guide explains how to configure Simple Returns for Magento Open Source.

### Table of Contents

+ [Prerequisites](#prerequisites)
+ [Configuration](#configuration)
    - [Module Settings](#module-settings)
    - [Store Information Settings](#store-information-settings)
    - [Shipping Settings](#shipping-settings)
    - [Origin Settings](#origin-settings)
+ [Carriers](#carriers)
+ [Sample Data](#sample-data) [Optional]

### Prerequisites

Before starting this step, please make sure you have completed the [Installation](https://docs.auroraextensions/magento/extensions/2.x/simplereturns/latest/installation/) step.

### Configuration

<blockquote class="important">This is a multi-step process, so make sure to complete each step sequentially.</blockquote>

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

### Sample Data

We strongly recommend testing Simple Returns within your own environments prior to use in production. To assist in testing,
we offer a sample data module, made available via [GitHub](https://github.com/auroraextensions/simplereturns-sampledata)
and [Packagist](https://packagist.org/packages/auroraextensions/simplereturns-sampledata).

For more information on installing sample data modules, see [Sample Data](https://docs.auroraextensions.com/magento/extensions/2.x/sampledata/index/simplereturns/).
