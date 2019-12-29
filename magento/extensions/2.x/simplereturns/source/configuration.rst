Configuration Guide
===================

This guide explains how to configure Simple Returns for Magento Open Source.

Table of Contents
-----------------

- `Prerequisites`_
- `Configuration`_
    - `Module Settings`_
    - `Store Information Settings`_
    - `Shipping Settings`_
    - `Origin Settings`_
- `Carriers`_
- `Sample Data`_

Prerequisites
-------------

Before starting this step, please make sure you have completed the :ref:`installation` step.

.. configuration:

Configuration
-------------

.. attention::
    This is a multi-step process. Please make sure to complete each step sequentially. If you
    encounter issues, please refer to our Troubleshooting section.

Module Settings
^^^^^^^^^^^^^^^

You can view and update module settings by navigating to *Stores* > *Configuration* > *Aurora Extensions* > *Simple Returns*.

1. Under *General Settings*, set *Enable Simple Returns* to *Yes*.
2. Under *RMA Settings*, select the carrier and method to use for return shipments.

Store Information Settings
^^^^^^^^^^^^^^^^^^^^^^^^^^

Return shipments require the store information settings to be set. You can view and update store information settings
by navigating to *Stores* > *Configuration* > *General* > *Store Information*. The following fields must be set:

1. Store Name
2. Store Phone Number
3. Country
4. Region/State
5. ZIP/Postal Code
6. City
7. Street Address

Shipping Settings
^^^^^^^^^^^^^^^^^

For information on setting up each shipping carrier, see [Carriers](#carriers) section.

Origin Settings
^^^^^^^^^^^^^^^

The shipping origin is the recipient address for return shipments, such as a returns processing facility or warehouse.
Return shipments require the shipping origin settings to be set. You can view and update origin settings by navigating
to *Stores* > *Configuration* > *Shipping Settings* > *Origin*. The following fields must be set:

1. Country
2. Region/State
3. ZIP/Postal Code
4. City
5. Street Address

Carriers
--------

Currently, Simple Returns supports UPS and Fedex for return shipments. The respective carrier settings should be completed
prior to use of Simple Returns.

- `UPS <https://docs.magento.com/m2/ce/user_guide/shipping/ups.html>`_
- `Fedex <https://docs.magento.com/m2/ce/user_guide/shipping/fedex.html>`_

Sample Data
-----------

We strongly recommend testing Simple Returns within your own environments prior to use in production. To assist in testing,
we offer a sample data module, made available via `GitHub <https://github.com/auroraextensions/simplereturns-sampledata>`_
and `Packagist <https://packagist.org/packages/auroraextensions/simplereturns-sampledata>`_.

For more information on installing sample data modules, see `Sample Data <https://docs.auroraextensions.com/magento/extensions/2.x/sampledata/index/simplereturns/>`_.
