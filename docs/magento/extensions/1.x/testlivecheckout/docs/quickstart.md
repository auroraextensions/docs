<blockquote class="important">This documentation is for Magento 1.x. For Magento 2.x, see <a href="https://nickolasburr.github.io/docs/magento/extensions/2.x/testlivecheckout/latest/">here</a>.</blockquote>

## Quick Start

This guide shows how to use [Puppeteer](https://github.com/GoogleChrome/puppeteer) with [Test Live Checkout](https://marketplace.magento.com/nickolasburr-nickolasburr-testlivecheckout.html) to simulate a guest checkout scenario.

### Requirements

+ [Docker](https://www.docker.com)
    - [docker-compose](https://docs.docker.com/compose/)
+ [Git](https://git-scm.com)
+ [Node](https://nodejs.org)
    - [puppeteer](https://www.npmjs.com/package/puppeteer)
+ [Authorize.net Sandbox Credentials](https://sandbox.authorize.net)

**macOS Users:**

To run Docker locally, you need to install [VirtualBox](https://www.virtualbox.org) and [Docker Machine](https://github.com/docker/machine).

For Homebrew users, Docker Machine is available via homebrew/core and VirtualBox is available via homebrew/cask.

```
brew update
brew cask install virtualbox
brew install docker-machine
```

Once VirtualBox and Docker Machine are installed, you will need to create a new machine (VM).

```
docker-machine create magento
```

This will generate a new VM where the Docker processes will run. Lastly, you will need to export several
`docker-machine` variables to your shell environment, in order for `docker-machine` to work properly.

```
eval $(docker-machine env magento)
```

### Getting Started

To get started, verify Docker is running properly.

```
docker ps
```

If the daemon process (`dockerd`) has yet to be started, you will receive an error.

Next, we're going to use the prebuilt Magento 1.x setup provided by [dockerized-magento](https://github.com/andreaskoch/dockerized-magento). It will supply us with all of the
necessary components we need to run Magento 1.9.3.9 locally.

```
git clone https://github.com/andreaskoch/dockerized-magento.git
cd dockerized-magento
./magento start
```

Setup can take awhile the first time around, so be patient and follow the instructions to avoid issues.

### Payment Configuration

Once dockerized-magento setup is complete, we need to update the payment methods configuration.

1. From **admin panel**, navigate to **System** &#8594; **Configuration** &#8594; **Sales** &#8594; **Payment Methods**
2. Click on *Cash On Delivery Payment* and set **Enabled** to **No**
3. Click on *Authorize.net* (not *Authorize.net Direct Post*) and set the following fields:
    - **Enabled** to **Yes**
    - **Payment Action** to **Authorize and Capture**
    - **API Login ID** to your Sandbox API Login ID
    - **Merchant's Email** to the email used for your Sandbox account
    - **Transaction Key** to your Sandbox Transaction Key
4. Click **Save Config**
5. If you have caching enabled, clear the config cache.

### Extension Installation

Once the payment gateway has been configured, we need to install Test Live Checkout. If you are unfamiliar with installing Magento extensions,
a great resource to get started is [The Ultimate Guide to Installing Magento Extensions](https://store.fooman.co.nz/media/custom/upload/TheUltimateGuidetoInstallingMagentoExtensions.pdf).

### Extension Configuration

After installing the extension, complete the following:

1. From Admin area, navigate to **System** &#8594; **Configuration** &#8594; **Test Live Checkout** (left sidebar)
2. Under **General Settings**, set **Enable Live Checkout Testing** to **Yes**
3. Generate random 32 character alphanumeric string<sup>1</sup> and paste into **Authentication Token** field.
4. Under **Log Settings**, set **Enable Logging** to **Yes**.
5. Click **Save Config**

### Tests

After configuring the extension, we can start running automated browser tests.

Create a workspace directory and fetch a copy of the **authorizenet.js** Puppeteer script:

```
mkdir tlc-puppeteer && cd tlc-puppeteer
curl -fsLO \
  https://nickolasburr.github.io/docs/magento/extensions/1.x/testlivecheckout/1.1.0/puppeteer/src/guest-checkout/authorizenet.js
```

The **authorizenet.js** Puppeteer script requires the environment variable `TLC_AUTH_TOKEN` to be present. Using the authentication
token we created earlier, export `TLC_AUTH_TOKEN` to your shell environment.

```
export TLC_AUTH_TOKEN="<AUTH_TOKEN_FROM_EARLIER>"
```

Next, install the puppeteer package via `npm`:

```
npm install puppeteer
```

Last but not least, let's run the script.

```
node authorizenet.js
```

Once the process has completed, you will be left with 9 PNGs showing various stages of checkout, and a GIF of all screenshots merged.

To see what the end result will look like, take a look at [Guest Checkout](https://nickolasburr.github.io/docs/magento/extensions/1.x/testlivecheckout/latest/examples/guest-checkout/authorizenet/).

### Notes

1. There are many ways to generate random, secure alphanumeric strings. Below is just one of many such ways:

```
LC_CTYPE=C tr -dc A-Za-z0-9 < /dev/urandom | head -c 32 | xargs ;
```
