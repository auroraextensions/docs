<blockquote class="important">This documentation is for Magento 1.x. For Magento 2.x, see <a href="https://docs.nickolasburr.com/magento/extensions/2.x/cloudpubsubeventanalytics/latest/">here</a>.</blockquote>

# Configuration

To configure Google Cloud Pub/Sub Event Analytics, log into the **admin panel** and navigate to **System** &#8594; **Configuration** &#8594; **Google Cloud Pub/Sub Event Analytics** (left sidebar).

### General Settings

1. **Enable Google Cloud Pub/Sub Event Analytics**: Disabled by default. Event data will not be sent unless the extension is enabled first.
2. **Google Cloud Platform Project**: The name of the GCP project. You can find this information through Google Cloud Platform Console.
3. **JSON Key File Path**: Path to JSON key file. Relative paths are relative to the Magento root directory. For more information on service account keys, see <a href="https://cloud.google.com/iam/docs/creating-managing-service-account-keys" target="_blank">here</a>. To generate a service account key, see <a href="https://console.cloud.google.com/projectselector/iam-admin/serviceaccounts" target="_blank">here</a>.
4. **Initialize Cloud Pub/Sub Topic**: Enabled by default. If a Cloud Pub/Sub topic does not exist, it will be created.

![General Settings](https://docs.nickolasburr.com/magento/extensions/1.x/cloudpubsubeventanalytics/latest/images/general_settings.png)

### Event Settings

1. **Events**: Trackable events. Each event has associated fields, which will display while the event selection is activated.

**Available Events**:

+ `order_save`: Order save event.
+ `customer_register`: Customer registration event.
+ `catalogsearch_query`: Catalog search event.

![Event Settings](https://docs.nickolasburr.com/magento/extensions/1.x/cloudpubsubeventanalytics/latest/images/event_settings.png)

2. **`{event}` Event Cloud Pub/Sub Topic**: The name of the Cloud Pub/Sub topic for the event. If **Initialize Cloud Pub/Sub Topic** is set to **Yes**, the topic will be initialized using this value.
3. **`{event}` Message Type**: The type of message to include in the Cloud Pub/Sub <tt>Data</tt> field.
4. **Custom `{event}` Message**: User-defined message to include in the Cloud Pub/Sub <tt>Data</tt> field.
5. **`{event}` Attributes**: Attributes to include in the Cloud Pub/Sub <tt>Attributes</tt> field.

![Order Save Event Settings](https://docs.nickolasburr.com/magento/extensions/1.x/cloudpubsubeventanalytics/latest/images/event_settings_order_save.png)
