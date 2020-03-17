Installation Guide
==================

.. contents:: Table of Contents
    :local:

Dependencies
------------

Simple Redirects has the following dependencies, as listed in its ``composer.json`` file:

.. code-block:: js

    "require": {
        "php": "~7.1.0||~7.2.0||~7.3.0",
        "magento/framework": "^100||^101||^102",
        "magento/module-backend": "^100||^101",
        "magento/module-store": "^100||^101",
        "magento/module-ui": "^100||^101"
    }

.. note::
    The aforementioned list of dependencies is subject to change. Please consult the composer.json
    file of the target version you are using to find the most accurate list of dependencies.

.. _installation:

Installation
------------

You can install Simple Redirects several ways, however we highly recommend using `Composer <https://getcomposer.org>`_.
Simple Redirects has dependencies, so installing with Composer makes dependency management substantially easier.

Composer
^^^^^^^^

.. code-block:: sh

    composer require auroraextensions/simpleredirects

Setup
-----

Once you've installed the module, you will need to enable it. Run the following from the Magento root directory:

.. code-block:: sh

    ./bin/magento module:enable AuroraExtensions_SimpleRedirects --clear-static-content

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

After you've completed the above steps, you will need to configure Simple Redirects for use. This is explained at length in
the :ref:`configuration` guide.
