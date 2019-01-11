<blockquote class="important">This documentation is for Magento 1.x. For Magento 2.x, see <a href="https://docs.auroraextensions.com/magento/extensions/2.x/cloudpubsubeventanalytics/latest/">here</a>.</blockquote>

## Installation Guide

This guide explains how to install Google Cloud Pub/Sub Event Analytics and its dependencies.

### Dependencies

+ [Google Cloud PHP Autoloader](https://github.com/nickolasburr/GoogleCloudPHPAutoloader.git)

### Getting Started

Make sure you've downloaded your copy of the extension archive. If you've not yet purchased the extension, you can do so at the following locations:

+ <a href="https://store.nickolasburr.com/extensions/magento-1-x/analytics/cloud-pubsub-event-analytics.html" target="_blank">https://store.nickolasburr.com/extensions/magento-1-x/analytics/cloud-pubsub-event-analytics.html</a>
+ <a href="https://marketplace.magento.com/nickolasburr-nickolasburr-cloudpubsubeventanalytics.html" target="_blank">https://marketplace.magento.com/nickolasburr-nickolasburr-cloudpubsubeventanalytics.html</a>

Next, we'll show how to install the extension via `modman` and manually.

#### modman

```
cd /var/www                                                           # Replace with the Magento root directory
modman init                                                           # Only run if you haven't initialized modman yet.
mkdir -p .modman/NickolasBurr_CloudPubSubEventAnalytics && \
tar -C .modman/NickolasBurr_CloudPubSubEventAnalytics \
    -xzf /path/to/NickolasBurr_CloudPubSubEventAnalytics-1.0.1.tgz
```

The extension archive does not contain a `modman` file, but one is available [here](https://docs.auroraextensions.com/magento/extensions/1.x/cloudpubsubeventanalytics/latest/examples/modman).
Run the following to add the `modman` file to the extension root directory:

```
curl -fsL https://docs.auroraextensions.com/magento/extensions/1.x/cloudpubsubeventanalytics/latest/examples/modman \
     > .modman/NickolasBurr_CloudPubSubEventAnalytics/modman
```

Lastly, deploy the updates:

```
modman deploy NickolasBurr_CloudPubSubEventAnalytics
```

#### Manual

```
# Replace /var/www with the Magento root directory.
cd /var/www
mkdir -p /tmp/NickolasBurr_CloudPubSubEventAnalytics && \
tar -C /tmp/NickolasBurr_CloudPubSubEventAnalytics \
    -xzf /path/to/NickolasBurr_CloudPubSubEventAnalytics-1.0.1.tgz
rsync -Pahmvz --stats \
              --exclude="package.xml" /tmp/NickolasBurr_CloudPubSubEventAnalytics/* ./
rm -rf /tmp/NickolasBurr_CloudPubSubEventAnalytics
```

### Wrap Up

Before attempting to configure the extension, make sure to clear the configuration cache, and, if any admin sessions are open, log out and log back in.
