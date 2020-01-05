List of Events
==============

Simple Returns dispatches events for most major actions. The list below shows
events by area and includes information like dispatch class, associated data,
and example usage.

Adminhtml
---------

1. `simplereturns_adminhtml_rma_create_save_before`_
2. `simplereturns_adminhtml_rma_create_save_after`_
3. `simplereturns_adminhtml_rma_edit_save_before`_
4. `simplereturns_adminhtml_rma_edit_save_after`_
5. `simplereturns_adminhtml_rma_status_edit_save_before`_
6. `simplereturns_adminhtml_rma_status_edit_save_after`_

|

.. _simplereturns_adminhtml_rma_create_save_before:

=======  =======================================================
Event    **simplereturns_adminhtml_rma_create_save_before**
Class    |AdminhtmlRmaCreateSaveBeforeClass|_
Area     ``adminhtml``
Fields   :order_id: ``int``
         :status: ``string``
         :reason: ``string``
         :resolution: ``string``
         :comments: ``string``
         :remote_ip: ``string``
         :token: ``string``
         :created_at: ``string``
Usage    ``$observer->getEvent()->getStatus();``
=======  =======================================================

|

.. _simplereturns_adminhtml_rma_create_save_after:

=======  =======================================================
Event    **simplereturns_adminhtml_rma_create_save_after**
Class    |AdminhtmlRmaCreateSaveAfterClass|_
Area     ``adminhtml``
Fields   :rma: ``SimpleReturnInterface``
Usage    ``$observer->getEvent()->getRma();``
=======  =======================================================

|

.. _simplereturns_adminhtml_rma_edit_save_before:

=======  =======================================================
Event    **simplereturns_adminhtml_rma_edit_save_before**
Class    |AdminhtmlRmaEditSaveBeforeClass|_
Area     ``adminhtml``
Fields   :rma: ``SimpleReturnInterface``
         :status: ``string``
         :reason: ``string``
         :resolution: ``string``
         :comments: ``string``
Usage    ``$observer->getEvent()->getReason();``
=======  =======================================================

|

.. _simplereturns_adminhtml_rma_edit_save_after:

=======  =======================================================
Event    **simplereturns_adminhtml_rma_edit_save_after**
Class    |AdminhtmlRmaEditSaveAfterClass|_
Area     ``adminhtml``
Fields   :rma: ``SimpleReturnInterface``
Usage    ``$observer->getEvent()->getRma();``
=======  =======================================================

|

.. _simplereturns_adminhtml_rma_status_edit_save_before:

=======  =======================================================
Event    **simplereturns_adminhtml_rma_status_edit_save_before**
Class    |AdminhtmlRmaStatusEditSaveBeforeClass|_
Area     ``adminhtml``
Fields   :rma: ``SimpleReturnInterface``
         :status: ``string``
Usage    ``$observer->getEvent()->getStatus();``
=======  =======================================================

|

.. _simplereturns_adminhtml_rma_status_edit_save_after:

=======  =======================================================
Event    **simplereturns_adminhtml_rma_status_edit_save_after**
Class    |AdminhtmlRmaStatusEditSaveAfterClass|_
Area     ``adminhtml``
Fields   :rma: ``SimpleReturnInterface``
Usage    ``$observer->getEvent()->getRma();``
=======  =======================================================

Frontend
--------

1. `simplereturns_rma_create_save_before`_
2. simplereturns_rma_create_save_after
3. simplereturns_rma_edit_save_before
4. simplereturns_rma_edit_save_after

.. _simplereturns_rma_create_save_before:

=======  =======================================================
Event    **simplereturns_rma_create_save_before**
Class    |FrontendRmaCreateSaveBeforeClass|_
Area     ``frontend``
Fields   :order_id: ``int``
         :status: ``string``
         :reason: ``string``
         :resolution: ``string``
         :comments: ``string``
         :remote_ip: ``string``
         :token: ``string``
         :created_at: ``string``
Usage    ``$observer->getEvent()->getOrderId();``
=======  =======================================================

|

.. _simplereturns_rma_create_save_after:

=======  =======================================================
Event    **simplereturns_rma_create_save_after**
Class    |FrontendRmaCreateSaveAfterClass|_
Area     ``frontend``
Fields   :rma: ``SimpleReturnInterface``
Usage    ``$observer->getEvent()->getRma();``
=======  =======================================================

|

.. _simplereturns_rma_edit_save_before:

=======  =======================================================
Event    **simplereturns_rma_edit_save_before**
Class    |FrontendRmaEditSaveBeforeClass|_
Area     ``frontend``
Fields   :rma_id: ``int``
         :status: ``string``
         :reason: ``string``
         :resolution: ``string``
         :comments: ``string``
         :remote_ip: ``string``
         :token: ``string``
Usage    ``$observer->getEvent()->getComments();``
=======  =======================================================

|

.. _simplereturns_rma_edit_save_after:

=======  =======================================================
Event    **simplereturns_rma_edit_save_after**
Class    |FrontendRmaEditSaveAfterClass|_
Area     ``frontend``
Fields   :rma: ``SimpleReturnInterface``
Usage    ``$observer->getEvent()->getRma();``
=======  =======================================================

..
    simplereturns_adminhtml_rma_create_save_before
    simplereturns_adminhtml_rma_create_save_after

.. |AdminhtmlRmaCreateSaveBeforeClass| replace:: ``AuroraExtensions\SimpleReturns\Controller\Adminhtml\Rma\CreatePost``
.. _AdminhtmlRmaCreateSaveBeforeClass: https://github.com/auroraextensions/simplereturns/blob/master/Controller/Adminhtml/Rma/CreatePost.php

.. |AdminhtmlRmaCreateSaveAfterClass| replace:: ``AuroraExtensions\SimpleReturns\Controller\Adminhtml\Rma\CreatePost``
.. _AdminhtmlRmaCreateSaveAfterClass: https://github.com/auroraextensions/simplereturns/blob/master/Controller/Adminhtml/Rma/CreatePost.php

..
    simplereturns_adminhtml_rma_edit_save_before
    simplereturns_adminhtml_rma_edit_save_after

.. |AdminhtmlRmaEditSaveBeforeClass| replace:: ``AuroraExtensions\SimpleReturns\Controller\Adminhtml\Rma\EditPost``
.. _AdminhtmlRmaEditSaveBeforeClass: https://github.com/auroraextensions/simplereturns/blob/master/Controller/Adminhtml/Rma/EditPost.php

.. |AdminhtmlRmaEditSaveAfterClass| replace:: ``AuroraExtensions\SimpleReturns\Controller\Adminhtml\Rma\EditPost``
.. _AdminhtmlRmaEditSaveAfterClass: https://github.com/auroraextensions/simplereturns/blob/master/Controller/Adminhtml/Rma/EditPost.php

..
    simplereturns_adminhtml_rma_status_edit_save_before
    simplereturns_adminhtml_rma_status_edit_save_after

.. |AdminhtmlRmaStatusEditSaveBeforeClass| replace:: ``AuroraExtensions\SimpleReturns\Controller\Adminhtml\Rma\Status\EditPost``
.. _AdminhtmlRmaStatusEditSaveBeforeClass: https://github.com/auroraextensions/simplereturns/blob/master/Controller/Adminhtml/Rma/Status/EditPost.php

.. |AdminhtmlRmaStatusEditSaveAfterClass| replace:: ``AuroraExtensions\SimpleReturns\Controller\Adminhtml\Rma\Status\EditPost``
.. _AdminhtmlRmaStatusEditSaveAfterClass: https://github.com/auroraextensions/simplereturns/blob/master/Controller/Adminhtml/Rma/Status/EditPost.php

..
    simplereturns_rma_create_save_before
    simplereturns_rma_create_save_after

.. |FrontendRmaCreateSaveBeforeClass| replace:: ``AuroraExtensions\SimpleReturns\Controller\Rma\CreatePost``
.. _FrontendRmaCreateSaveBeforeClass: https://github.com/auroraextensions/simplereturns/blob/master/Controller/Rma/CreatePost.php

.. |FrontendRmaCreateSaveAfterClass| replace:: ``AuroraExtensions\SimpleReturns\Controller\Rma\CreatePost``
.. _FrontendRmaCreateSaveAfterClass: https://github.com/auroraextensions/simplereturns/blob/master/Controller/Rma/CreatePost.php

..
    simplereturns_rma_edit_save_before
    simplereturns_rma_edit_save_after

.. |FrontendRmaEditSaveBeforeClass| replace:: ``AuroraExtensions\SimpleReturns\Controller\Rma\EditPost``
.. _FrontendRmaEditSaveBeforeClass: https://github.com/auroraextensions/simplereturns/blob/master/Controller/Rma/EditPost.php

.. |FrontendRmaEditSaveAfterClass| replace:: ``AuroraExtensions\SimpleReturns\Controller\Rma\EditPost``
.. _FrontendRmaEditSaveAfterClass: https://github.com/auroraextensions/simplereturns/blob/master/Controller/Rma/EditPost.php
