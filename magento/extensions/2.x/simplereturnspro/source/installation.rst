Quickstart
==========

.. toctree::
   :maxdepth: 2
   :caption: Contents:

* :ref:`genindex`
* :ref:`search`

Installation
------------

To get started, add the following entry to the ``require`` section of your project *composer.json*:

.. code-block:: js

    "auroraextensions/simplereturnspro": "~1.0.0"

Once you've made that update, save the file and run the following command:

.. code-block:: sh

    composer install

This will install Simple Returns Pro, along with its dependencies.

.. attention::
    If you're already using Simple Returns, setup for Simple Returns Pro is minimal. However,
    if you're not already using Simple Returns prior to installing Simple Returns Pro, you
    will need to consult the Simple Returns Installation and Configuration guides, which
    outline everything needed to get up and running.

Next, verify the module and its dependencies are installed by running the following command:

.. code-block:: sh

    magento module:status

You should see all of the following modules listed:

1. ``AuroraExtensions_ImageProcessor``
2. ``AuroraExtensions_SimpleReturns``
3. ``AuroraExtensions_SimpleReturnsPro``

If you don't see all of the above modules listed, it is likely the installation process did not
complete properly. See the Troubleshooting section for help.

After you've verified the module is installed, you will need to enable it, along with its dependencies,
and run setup upgrade. Execute the following commands:

.. code-block:: sh

    magento module:enable AuroraExtensions_ImageProcessor
    magento module:enable AuroraExtensions_SimpleReturns
    magento module:enable AuroraExtensions_SimpleReturnsPro
    magento setup:upgrade

The module and dependencies should now be installed and enabled.
