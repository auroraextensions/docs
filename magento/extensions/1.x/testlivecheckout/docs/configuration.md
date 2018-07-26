<blockquote class="important">
This documentation is for the Magento 1.x version. For the Magento 2.x version, see <a href="https://nickolasburr.github.io/magento/extensions/2.x/testlivecheckout/latest/">here</a>.
</blockquote>

# Configuration

## Settings

- [General](#general)
- [Log](#log)

#### General

1. Enable Live Checkout Testing: Enable the extension for live use.
2. Authentication Token: Alphanumeric token used to authenticate a test order.
3. Redirect URL: URL to 302 redirect to after a successful test order.

#### Log

1. Enable Logging: Enable transaction logging.

![General Settings](https://nickolasburr.github.io/magento/extensions/1.x/testlivecheckout/latest/images/settings.png)

## Transaction Log

The transaction log must be enabled before any logs are recorded.

During an authenticated transaction, Test Live Checkout will record certain fields
from the order, such as the payment gateway and timestamp, that are helpful when
debugging checkout issues.

![Transaction Log](https://nickolasburr.github.io/magento/extensions/1.x/testlivecheckout/latest/images/log.png)
