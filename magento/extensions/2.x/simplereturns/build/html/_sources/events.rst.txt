List of Events
==============

Simple Returns dispatches events for most major actions. The list below shows
events by area and includes information like dispatch class, associated data,
and example usage.

Adminhtml
---------

1. `simplereturns_adminhtml_rma_create_save_before`_
2. `simplereturns_adminhtml_rma_create_save_after`_
3. simplereturns_adminhtml_rma_edit_save_before
4. simplereturns_adminhtml_rma_edit_save_after
5. simplereturns_adminhtml_rma_status_edit_save_before
6. simplereturns_adminhtml_rma_status_edit_save_after

simplereturns_adminhtml_rma_create_save_before
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

|
|

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

simplereturns_adminhtml_rma_create_save_after
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

|
|

=======  =======================================================
Event    **simplereturns_adminhtml_rma_create_save_after**
Class    |AdminhtmlRmaCreateSaveAfterClass|_
Area     ``adminhtml``
Fields   :rma: ``SimpleReturnInterface``
Usage    ``$observer->getEvent()->getRma();``
=======  =======================================================

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

=======  =======================================================
Event    **simplereturns_adminhtml_rma_edit_save_after**
Class    |AdminhtmlRmaEditSaveAfterClass|_
Area     ``adminhtml``
Fields   :rma: ``SimpleReturnInterface``
Usage    ``$observer->getEvent()->getRma();``
=======  =======================================================

=======  =======================================================
Event    **simplereturns_adminhtml_rma_status_edit_save_before**
Class    |AdminhtmlRmaStatusEditSaveBeforeClass|_
Area     ``adminhtml``
Fields   :rma: ``SimpleReturnInterface``
         :status: ``string``
Usage    ``$observer->getEvent()->getStatus();``
=======  =======================================================

=======  =======================================================
Event    **simplereturns_adminhtml_rma_status_edit_save_after**
Class    |AdminhtmlRmaStatusEditSaveAfterClass|_
Area     ``adminhtml``
Fields   :rma: ``SimpleReturnInterface``
Usage    ``$observer->getEvent()->getRma();``
=======  =======================================================

Frontend
--------

1. simplereturns_rma_create_save_before
2. simplereturns_rma_create_save_after
3. simplereturns_rma_edit_save_before
4. simplereturns_rma_edit_save_after

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

=======  =======================================================
Event    **simplereturns_rma_create_save_after**
Class    |FrontendRmaCreateSaveAfterClass|_
Area     ``frontend``
Fields   :rma: ``SimpleReturnInterface``
Usage    ``$observer->getEvent()->getRma();``
=======  =======================================================

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

=======  =======================================================
Event    **simplereturns_rma_edit_save_after**
Class    |FrontendRmaEditSaveAfterClass|_
Area     ``frontend``
Fields   :rma: ``SimpleReturnInterface``
Usage    ``$observer->getEvent()->getRma();``
=======  =======================================================

..
    simplereturns_adminhtml_rma_create_save_before

.. |AdminhtmlRmaCreateSaveBeforeClass| replace:: ``AuroraExtensions\SimpleReturns\Controller\Adminhtml\Rma\CreatePost``
.. _AdminhtmlRmaCreateSaveBeforeClass: https://github.com/auroraextensions/simplereturns/blob/master/Controller/Adminhtml/Rma/CreatePost.php

..
    simplereturns_adminhtml_rma_create_save_after

.. |AdminhtmlRmaCreateSaveAfterClass| replace:: ``AuroraExtensions\SimpleReturns\Controller\Adminhtml\Rma\CreatePost``
.. _AdminhtmlRmaCreateSaveAfterClass: https://github.com/auroraextensions/simplereturns/blob/master/Controller/Adminhtml/Rma/CreatePost.php

..
    simplereturns_adminhtml_rma_edit_save_before

.. |AdminhtmlRmaEditSaveBeforeClass| replace:: ``AuroraExtensions\SimpleReturns\Controller\Adminhtml\Rma\EditPost``
.. _AdminhtmlRmaEditSaveBeforeClass: https://github.com/auroraextensions/simplereturns/blob/master/Controller/Adminhtml/Rma/EditPost.php

..
    simplereturns_adminhtml_rma_edit_save_after

.. |AdminhtmlRmaEditSaveAfterClass| replace:: ``AuroraExtensions\SimpleReturns\Controller\Adminhtml\Rma\EditPost``
.. _AdminhtmlRmaEditSaveAfterClass: https://github.com/auroraextensions/simplereturns/blob/master/Controller/Adminhtml/Rma/EditPost.php

..
    simplereturns_adminhtml_rma_status_edit_save_before

.. |AdminhtmlRmaStatusEditSaveBeforeClass| replace:: ``AuroraExtensions\SimpleReturns\Controller\Adminhtml\Rma\Status\EditPost``
.. _AdminhtmlRmaStatusEditSaveBeforeClass: https://github.com/auroraextensions/simplereturns/blob/master/Controller/Adminhtml/Rma/Status/EditPost.php

..
    simplereturns_adminhtml_rma_status_edit_save_after

.. |AdminhtmlRmaStatusEditSaveAfterClass| replace:: ``AuroraExtensions\SimpleReturns\Controller\Adminhtml\Rma\Status\EditPost``
.. _AdminhtmlRmaStatusEditSaveAfterClass: https://github.com/auroraextensions/simplereturns/blob/master/Controller/Adminhtml/Rma/Status/EditPost.php

..
    simplereturns_rma_create_save_before

.. |FrontendRmaCreateSaveBeforeClass| replace:: ``AuroraExtensions\SimpleReturns\Controller\Rma\CreatePost``
.. _FrontendRmaCreateSaveBeforeClass: https://github.com/auroraextensions/simplereturns/blob/master/Controller/Rma/CreatePost.php

..
    simplereturns_rma_create_save_after

.. |FrontendRmaCreateSaveAfterClass| replace:: ``AuroraExtensions\SimpleReturns\Controller\Rma\CreatePost``
.. _FrontendRmaCreateSaveAfterClass: https://github.com/auroraextensions/simplereturns/blob/master/Controller/Rma/CreatePost.php

..
    simplereturns_rma_edit_save_before

.. |FrontendRmaEditSaveBeforeClass| replace:: ``AuroraExtensions\SimpleReturns\Controller\Rma\EditPost``
.. _FrontendRmaEditSaveBeforeClass: https://github.com/auroraextensions/simplereturns/blob/master/Controller/Rma/EditPost.php

..
    simplereturns_rma_edit_save_after

.. |FrontendRmaEditSaveAfterClass| replace:: ``AuroraExtensions\SimpleReturns\Controller\Rma\EditPost``
.. _FrontendRmaEditSaveAfterClass: https://github.com/auroraextensions/simplereturns/blob/master/Controller/Rma/EditPost.php
