Simple Redirects
================

.. toctree::
   :maxdepth: 2
   :caption: Table of Contents:

   installation
   configuration
   rules
   License <https://docs.auroraextensions.com/magento/extensions/2.x/simpleredirects/LICENSE.txt>
   Release Notes <https://docs.auroraextensions.com/magento/extensions/2.x/simpleredirects/RELEASE_NOTES.txt>
   Repository <https://github.com/auroraextensions/simpleredirects>
   Versions <https://docs.auroraextensions.com/magento/extensions/2.x/simpleredirects/index.html>

What is Simple Redirects?
-------------------------

Simple Redirects provides URL redirect management for Magento Open Source and Magento Commerce.

By default, Magento has fairly limited flexibility with respect to URL redirect management. The
URL rewrite module ``Magento_UrlRewrite``, as well as related modules ``Magento_CatalogUrlRewrite``
and ``Magento_CmsUrlRewrite``, provide the ability to redirect and rewrite URLs for products,
categories, and CMS pages, which is extremely useful for SEO purposes. However, there's a lack of
functionality for simple rule-based redirects, which can be especially helpful when transitioning
to Magento from another platform like Shopify or BigCommerce.

Key Features
^^^^^^^^^^^^

1. Rule types:
    a. Path
    b. Query Parameter
    c. Host
2. Match types:
    a. Exact match
    b. Not exact match
    c. Contains
    d. Does not contain
    e. Matches regex
    f. Does not match regex
3. Redirect types:
    a. 301
    b. 302
4. Priority levels 1-10
