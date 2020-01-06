Installation Guide
==================

This guide explains how to install Simple Returns Pro and its dependencies.

Table of Contents
-----------------

- `Dependencies`_
- `Installation`_
    - `Composer`_
- `Setup`_

Dependencies
------------

Simple Returns Pro has the following dependencies, as listed in its ``composer.json`` file:

.. code-block:: js

    "require": {
        "php": ">=7.1",
        "auroraextensions/simplereturns": "~1.1.0"
    }

.. note::
    The aforementioned list of dependencies is subject to change. Please consult the composer.json
    file of the target version you are using to find the most accurate list of dependencies.

.. _installation:

Installation
------------

You can install Simple Returns Pro several ways, however we highly recommend using `Composer <https://getcomposer.org>`_.
Simple Returns Pro has dependencies, so installing with Composer makes dependency management substantially easier.

Composer
^^^^^^^^

Add the following entry to the ``require`` section of your project *composer.json*:

.. code-block:: js

    "auroraextensions/simplereturnspro": "~1.0.0"

Once you've made that update, save the file and run the following command from the Magento root directory:

.. code-block:: sh

    composer install

This will install Simple Returns Pro, along with its dependencies.

.. attention::
    If you're already using Simple Returns, setup for Simple Returns Pro is minimal. However,
    if you're not already using Simple Returns prior to installing Simple Returns Pro, you
    will need to consult the Simple Returns documentation, as it outlines everything needed
    to get up and running.

Setup
-----

Verify the module and its dependencies are installed by running the following command:

.. code-block:: sh

    magento module:status

You should see all of the following modules listed:

1. ``AuroraExtensions_ImageProcessor``
2. ``AuroraExtensions_SimpleReturns``
3. ``AuroraExtensions_SimpleReturnsPro``

If you don't see all of the above modules listed, it is likely the installation process did not
complete properly.

After verifying the modules are installed, you will need to enable ``AuroraExtensions_SimpleReturnsPro``.
Run the following commands from the Magento root directory:

.. code-block:: sh

    ./bin/magento module:enable AuroraExtensions_SimpleReturnsPro
    ./bin/magento setup:upgrade

The module and dependencies should now be installed and enabled.
