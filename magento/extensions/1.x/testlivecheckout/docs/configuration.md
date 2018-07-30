# Configuration

<blockquote class="important">This documentation is for Magento 1.x. For Magento 2.x, see <a href="https://nickolasburr.github.io/magento/extensions/2.x/testlivecheckout/latest/">here</a>.</blockquote>

To configure Test Live Checkout, log into the **admin panel** and navigate to **System** &#8594; **Configuration** &#8594; **Test Live Checkout** (left sidebar, typically toward the bottom).

### General Settings

1. **Enable Live Checkout Testing**: Enable the extension for use. This must be enabled for the extension to function.
2. **Authentication Token**: An alphanumeric token used for authentication. It must be _at least_ 32 characters in length, and can only contain letters and numbers.
3. **Redirect URL**: The redirect URL is the URL where the browser is redirected after a successful test order submission. The URL must be part of the same [SLD](https://en.wikipedia.org/wiki/Second-level_domain) as Magento.

### Log Settings

1. **Enable Logging**: Enable transaction logging. For monitoring and debugging purposes, Test Live Checkout provides the ability to log test transactions. By default, transaction logging is disabled.

![General Settings](https://nickolasburr.github.io/magento/extensions/1.x/testlivecheckout/latest/images/settings.png)

## Transaction Log

During an authenticated transaction, Test Live Checkout will record certain fields from the order, such as the payment gateway and timestamp, that are helpful when debugging checkout issues.

![Transaction Log](https://nickolasburr.github.io/magento/extensions/1.x/testlivecheckout/latest/images/log.png)
