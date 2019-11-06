## Installation Guide

This guide explains how to install and set up Simple Returns sample data module.

### Table of Contents

+ [Repository](https://github.com/auroraextensions/simplereturns-sampledata) ![Simple Returns Sample Data Repository](/assets/images/extlink.png)
+ [Prerequisites](#prerequisites)
+ [Installation](#installation)
    - [Composer](#composer)
+ [Setup](#setup)
+ [Troubleshooting](#troubleshooting)

### Prerequisites

Prior to installing sample data for Simple Returns, you **must** install and configure Simple Returns. If you have not done this yet,
please refer to the [Simple Returns documentation](https://docs.auroraextensions.com/magento/extensions/2.x/simplereturns/latest/)
to get started.

### Installation

We strongly recommend installing `AuroraExtensions_SimpleReturnsSampleData` via Composer for dependency management.

#### Composer

```
composer require auroraextensions/simplereturns-sampledata
```

### Setup

Once you've installed the sample data module, run the following from the Magento root directory:

```
./bin/magento module:enable AuroraExtensions_SimpleReturnsSampleData --clear-static-content
```

After enabling the module, run the following from the Magento root directory:

```
rm -rf generated/code && ./bin/magento cache:clean && ./bin/magento setup:upgrade
```

### Troubleshooting

There are several points during installation that can cause an unsuccessful setup. Below are potential issues
and possible solutions to those issues.

<blockquote>I've installed and set up the module, but I'm not seeing any data in the backend.</blockquote>

To begin, verify the data patches actually ran. This should've happened when `./bin/magento setup:upgrade` was executed,
and you can verify this by running the following SQL command:

```
select * from `patch_list` where `patch_name` like '%SimpleReturnsSampleData%';
```

If zero rows were returned, this indicates the data patches never ran, so you will need to run the setup command.

<blockquote>When I view an RMA request, I can see the attachments section but the images are broken.</blockquote>

The sample data module copies media files from the module directory into the media directory. This issue can arise when there are
inadequate permissions set on the media directory. Generally speaking, you should see these errors logged in `var/log/system.log`.

To begin, verify the following:

1. The Magento user has read and write access to `pub/media`.
2. The Magento user has read access to files in `vendor/auroraextensions/simplereturns-sampledata/media/resized/150x150`.

Once you've verified the above, you will need to execute the RMA attachments data patch once more. Run the following SQL command:

```
delete from `patch_list` where `patch_name` like '%SimpleReturnsSampleData%CreateAttachmentSampleData%' limit 1;
```

From the Magento root directory, run the following:

```
rm -rf generated/code && ./bin/magento cache:clean && ./bin/magento setup:upgrade
```

You should now see the attachments populated in each sample RMA request.
