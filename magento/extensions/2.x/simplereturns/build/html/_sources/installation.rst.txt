Installation Guide
==================

This guide explains how to install Simple Returns and its dependencies.

Table of Contents
-----------------

- `Repository <https://github.com/auroraextensions/simplereturns>`_
- `Dependencies`_
- `Installation`_
    - `Composer`_
- `Setup`_
- `Next Steps`_

.. _installation:

Installation
------------

You can install Simple Returns several ways, however we highly recommend using `Composer <https://getcomposer.org>`_.
Simple Returns has dependencies, so installing with Composer makes dependency management substantially easier.

Dependencies
------------

Simple Returns has the following dependencies, as listed in its ``composer.json`` file:

.. code-block:: js

    "require": {
        "php": ">=7.1",
        "ext-gd": "*",
        "magento/framework": "102.*.*",
        "magento/module-catalog": "103.*.*",
        "magento/module-customer": "102.*.*",
        "magento/module-directory": "100.*.*",
        "magento/module-eav": "102.*.*",
        "magento/module-sales": "102.*.*",
        "magento/module-shipping": "100.*.*",
        "magento/module-store": "101.*.*",
        "magento/module-ups": "100.*.*",
        "auroraextensions/imageprocessor": "~1.0.0"
    }

.. note::
    The aforementioned list of dependencies is subject to change. Please consult the composer.json
    file of the target version you are using to find the most accurate list of dependencies.

Composer
^^^^^^^^

.. code-block:: sh

    composer require auroraextensions/simplereturns

Setup
-----

Once you've installed the module, you will need to enable it, along with its dependencies. Run the following from
the Magento root directory:

.. code-block:: sh

    ./bin/magento module:enable AuroraExtensions_ImageProcessor AuroraExtensions_SimpleReturns --clear-static-content

Next, run the setup upgrade command from the Magento root directory:

.. code-block:: sh

    ./bin/magento cache:clean && ./bin/magento setup:upgrade

.. note::
    The above command may take a few minutes to finish, so please be patient.

After setup upgrade has completed, verify the modules are listed as enabled:

.. code-block:: sh

    ./bin/magento module:status

Next Steps
----------

After you've completed the above steps, you will need to configure Simple Returns for use. This is explained at length in
the :ref:`configuration` guide.
