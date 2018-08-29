## Table of Contents

- [Home](https://docs.nickolasburr.com/magento/extensions/1.x/googlecloud/latest/)
- [Installation](https://docs.nickolasburr.com/magento/extensions/1.x/googlecloud/latest/installation/)
- [License](https://docs.nickolasburr.com/magento/extensions/1.x/googlecloud/LICENSE.txt)
- [Release Notes](https://docs.nickolasburr.com/magento/extensions/1.x/googlecloud/RELEASE_NOTES.txt)
- [Repository](https://github.com/nickolasburr/GoogleCloudPHPAutoloader)
- [Sitemap](https://docs.nickolasburr.com/magento/extensions/1.x/googlecloud/latest/sitemap.xml)
- [Versions](https://docs.nickolasburr.com/magento/extensions/1.x/googlecloud/)

## What is Google Cloud PHP?

Google Cloud PHP encompasses several packages, which are used for integrating with Google Cloud services.

## What is Google Cloud PHP Autoloader?

Google Cloud PHP Autoloader is a Magento extension for autoloading Google Cloud PHP libraries and dependencies.
It is intended to be used with Magento 1.9 only.

## Usage

```
<config>
    <modules>
        <Vendor_Package>
            <active>true</active>
            <codePool>community</codePool>
            <depends>
                <NickolasBurr_GoogleCloud/>
            </depends>
        </Vendor_Package>
    </modules>
</config>
```
