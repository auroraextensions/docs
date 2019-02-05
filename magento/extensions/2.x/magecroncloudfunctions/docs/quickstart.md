<blockquote class="important">This documentation is for Magento 2.x. For Magento 1.x, see <a href="https://docs.auroraextensions.com/magento/extensions/1.x/magecroncloudfunctions/latest/">here</a>.</blockquote>

## Quick Start

This guide explains how to utilize Magento Cron Cloud Functions for Magento 2.x
from within your own custom modules.

## Caveats

Magento Cron Cloud Functions should only be used as a dependency for your own
modules. Modifying the module directly can be very problematic when, for example,
you upgrade versions or migrate environments.

## Getting Started

To get started, take a look at the [sample module](https://github.com/auroraextensions/samplecroncloudfunctions)
we put together. You can use this as boilerplate for your module, as it's very easy to get up and running.

#### Step One: Package Requirements

As shown below and in [`composer.json`](https://github.com/auroraextensions/samplecroncloudfunctions/blob/master/composer.json),
you will need to require `auroraextensions/magentocroncloudfunctions`:

```
...
  "require": {
    "php": ">=7.1",
    "auroraextensions/magentocroncloudfunctions": "~1.0.0"
  },
...
```

#### Step Two: Virtual Types and Dependency Injection

To maximize code reuse and minimize overhead needed to interface with HTTP endpoints, you can
create `<virtualType>` classes that hold data specific to each Cloud Functions HTTP endpoint.

As shown below and in [`etc/di.xml`](https://github.com/auroraextensions/samplecroncloudfunctions/blob/master/etc/di.xml),
there are two `<virtualType>` classes:

```
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">
  <virtualType name="VisitorLogCronJob" type="AuroraExtensions\MagentoCronCloudFunctions\Model\Cron\Job">
    <arguments>
      <argument name="jobCode" xsi:type="string">visitor_log_clean</argument>
    </arguments>
  </virtualType>

  <virtualType name="VisitorLogCloudFunctionHttpRequest" type="AuroraExtensions\MagentoCronCloudFunctions\Model\Http\Request">
    <arguments>
      <argument name="cronJob" xsi:type="object">VisitorLogCronJob</argument>
    </arguments>
  </virtualType>
</config>
```

+ `VisitorLogCronJob` is an instance of [`AuroraExtensions\MagentoCronCloudFunctions\Model\Cron\JobInterface`](https://github.com/auroraextensions/magentocroncloudfunctions/blob/master/Model/Cron/JobInterface.php)
    - Contains the `jobCode` used to invoke HTTP endpoint.
+ `VisitorLogCloudFunctionHttpRequest` is an instance of [`AuroraExtensions\MagentoCronCloudFunctions\Model\Http\RequestInterface`](https://github.com/auroraextensions/magentocroncloudfunctions/blob/master/Model/Http/RequestInterface.php)
    - Contains the `VisitorLogCronJob` instance used to interact with HTTP endpoint.

#### Step Three: Job Entries in crontab.xml

Next, create a `<job>` entry in `crontab.xml` and use `VisitorLogCloudFunctionHttpRequest` for the `instance` attribute value:

```
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Cron:etc/crontab.xsd">
  <group id="default">
    <job name="visitor_log_cloud_function_http_request" instance="VisitorLogCloudFunctionHttpRequest" method="execute">
      <schedule>* * * * *</schedule>
    </job>
  </group>
</config>
```

#### Step Four: Deploy Cloud Function

There are several ways to set up the Cloud Function HTTP endpoint. See [HTTP Triggers](https://cloud.google.com/functions/docs/calling/http) for more information.

We'll use `gcloud` below to illustrate a quick way to create the appropriate HTTP endpoint.

```
gcloud functions deploy visitor_log_clean --entry-point visitor_log_clean \
                                          --runtime python37 \
                                          --trigger-http
```

If you're new to Cloud Functions, simply have the `visitor_log_clean` function print a string when it's invoked.
Once you've become acquainted, we **highly** recommend implementing authentication in each cloud function you use,
as cloud function endpoints are insecure, by default.

## Wrap Up

That's it! With a minimal sample module, you're able to easily interact with Cloud Functions HTTP endpoints using
the Magento Cron Cloud Functions extension, enabling you to execute Magento cron jobs on Google Cloud Functions.
