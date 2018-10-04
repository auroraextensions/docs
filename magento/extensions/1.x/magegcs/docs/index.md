## Table of Contents

- [Home](https://docs.nickolasburr.com/magento/extensions/1.x/magegcs/latest/)
- [Installation](https://docs.nickolasburr.com/magento/extensions/1.x/magegcs/latest/installation/)
- [License](https://docs.nickolasburr.com/magento/extensions/1.x/magegcs/LICENSE.txt)
- [Release Notes](https://docs.nickolasburr.com/magento/extensions/1.x/magegcs/RELEASE_NOTES.txt)
- [Repository](https://github.com/nickolasburr/GoogleCloudStoragePHPAutoloader)
- [Sitemap](https://docs.nickolasburr.com/magento/extensions/1.x/magegcs/latest/sitemap.xml)
- [Versions](https://docs.nickolasburr.com/magento/extensions/1.x/magegcs/)

### What is Google Cloud PHP?

Google Cloud PHP is a suite of PHP packages for integrating with various Google Cloud services.

### What is Google Cloud Storage?

Google Cloud Storage is a Magento extension for autoloading Google Cloud PHP libraries and dependencies.
It is intended to be used with Magento 1.x only, as Magento 2 provides native support for Composer.

### Usage

To use Google Cloud Storage, add `<NickolasBurr_GoogleCloudStorage/>` as a module dependency:

```
<config>
    <modules>
        <Vendor_Package>
            <active>true</active>
            <codePool>community</codePool>
            <depends>
                <NickolasBurr_GoogleCloudStorage/>
            </depends>
        </Vendor_Package>
    </modules>
</config>
```
