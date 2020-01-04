Attribute Guide
===============

This guide explains how to set the ``simple_return`` product attribute. This attribute
must be set and enabled for *each product of an order*, as required for RMA eligibility.

.. note::
    Simple Returns is an order-based RMA extension, meaning an RMA request is not specific to any
    single item, but the order as a whole. If you need itemized and/or partial returns capabilities,
    please check out our premium RMA extension, Simple Returns Pro. It provides all of the features
    of Simple Returns with several added features like itemized and partial returns, RMA archives,
    and lockable RMAs to prevent customers from editing, just to name a few.

Table of Contents
-----------------

- `Prerequisites`_
- `Attribute`_

Prerequisites
-------------

Before starting, please make sure you have completed the following steps:

:ref:`installation`
:ref:`configuration`

.. _attribute:

Attribute
---------

.. attention::
    This is a multi-step process. Please make sure to complete each step sequentially. If you
    encounter issues, please refer to our Troubleshooting section.

Step One: Add Attribute
^^^^^^^^^^^^^^^^^^^^^^^

To start, navigate to *Catalog* > *Products* and click on a product you would like to make returnable.

.. attention::
   For configurable products, you will need to complete this step for both the configurable product, as
   well as the associated simple product.


From the product edit page, click *Add Attribute* in the top right corner of the page.

.. figure:: images/step_one_1.png
   :width: 800
   :height: 200
   :alt: Add attribute button
   :align: center
   :figclass: align-center

From the attributes grid, select the checkbox for ``simple_return`` and click *Add Selected*.

.. figure:: images/step_one_2.png
   :width: 1600
   :height: 800
   :alt: Add selected attribute
   :align: center
   :figclass: align-center

Then click *Save* to update the product.

Step Two: Reindex Products
^^^^^^^^^^^^^^^^^^^^^^^^^^

The next step is to reindex the products and their attributes. From the Magento root directory,
run the following command:

.. code-block:: sh

    ./bin/magento cache:clean && ./bin/magento indexer:reindex

Once the above command has completed, navigate back to the product edit page and look for the
*Attributes* section near the bottom of the page. Toggle open the *Attributes* section and click
the *Returnable* attribute button to enable returns for the product.

.. figure:: images/step_two_1.png
   :width: 1600
   :height: 200
   :alt: Enable Returnable attribute
   :align: center
   :figclass: align-center

Then click *Save* to update the product.
