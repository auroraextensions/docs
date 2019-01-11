<blockquote class="important">This documentation is for Magento 1.x. For Magento 2.x, see <a href="https://docs.auroraextensions.com/magento/extensions/2.x/magecroncloudfunctions/latest/">here</a>.</blockquote>
<blockquote class="notice">At the time of writing, Cloud Functions only supports three runtimes: Node.js 6, Node.js 8, and Python 3.7.</blockquote>

## Example: Clean Visitor Logs

## Requirements

+ Active Google account
+ GCP project with Cloud Functions API enabled
+ Cloud SQL database instance
+ `gcloud` command-line tool (Recommended)

## Downloads

To use the Python runtime, two files are required: `main.py` and `requirements.txt`. You can download them here:

+ [main.py](https://docs.auroraextensions.com/magento/extensions/1.x/magecroncloudfunctions/latest/python/src/visitor_log_clean/main.py)
+ [requirements.txt](https://docs.auroraextensions.com/magento/extensions/1.x/magecroncloudfunctions/latest/python/src/visitor_log_clean/requirements.txt)

```
mkdir -pv visitor_log_clean && \
curl -fsL \
     https://docs.auroraextensions.com/magento/extensions/1.x/magecroncloudfunctions/latest/python/src/visitor_log_clean/main.py
     > ./visitor_log_clean/main.py && \
curl -fsL \
     https://docs.auroraextensions.com/magento/extensions/1.x/magecroncloudfunctions/latest/python/src/visitor_log_clean/requirements.txt
     > ./visitor_log_clean/requirements.txt
```

## Objective

Clean the database of visitor log entries using Cloud Functions.

## Steps

1. Create `visitor_log_clean` cloud function

    The following environment variables are required for Cloud Functions to access Cloud SQL:

    + `DB_NAME`: The name of the Magento database.
    + `DB_USER`: The name of the database user.
    + `DB_PASS`: The database user's password.
    + `PROJECT_ID`: The Google Cloud Platform project ID.
    + `REGION_ID`: The region where the Cloud SQL instance exists (e.g. us-central1, us-east4).
    + `INSTANCE_NAME`: The name of Cloud SQL instance.

    Using `gcloud`, run the following:

    <pre>
      <code>
      gcloud functions deploy visitor_log_clean
                              --entry-point="log_clean" \
                              --runtime=python37 \
                              --set-env-vars=DB_NAME=&lt;YOUR_DB_NAME&gt;,DB_USER=&lt;YOUR_DB_USER&gt;,DB_PASS=&lt;YOUR_DB_PASS&gt;,PROJECT_ID=&lt;GCP_PROJECT_ID&gt;,REGION_ID=&lt;CLOUD_SQL_REGION_ID&gt;,INSTANCE_NAME=&lt;CLOUD_SQL_INSTANCE_NAME&gt; \
                              --source="./visitor_log_clean" \
                              --trigger-http
      </code>
    </pre>

    Alternatively, you can use the [Cloud Functions](https://console.cloud.google.com/functions/list) interface. Click *Create Function*
    from the list overview, and specify the following:

    + Name: visitor\_log\_clean
    + Memory: 256MB
    + Trigger: HTTP
    + Source code: Inline editor
    + Runtime: Python 3.7
    + main.py: Contents of `main.py` from above
    + requirements.txt: Contents of `requirements.txt` from above
    + Function to execute: `log_clean`

    Next, click *More* and set each of the environment variables listed above. Then click *Create*.

2. Add entry to `<crontab>`

    To make use of `visitor_log_clean` from within Magento, you will need to add
    the following to your module `config.xml` file:

    <pre>
      <code>
        &lt;crontab&gt;
          &lt;jobs&gt;
            &lt;visitor_log_clean&gt;
              &lt;schedule&gt;
                &lt;cron_expr&gt;30 2 &#42; &#42; &#42;&lt;/cron_expr&gt;
              &lt;/schedule&gt;
              &lt;run&gt;
                &lt;model&gt;magecroncloudfunctions/observer::run&lt;/model&gt;
              &lt;/run&gt;
            &lt;/visitor_log_clean&gt;
          &lt;/jobs&gt;
        &lt;/crontab&gt;
      </code>
    </pre>

    Alternatively, you can use [Aoe_Scheduler](https://github.com/AOEpeople/Aoe_Scheduler) to create and schedule
    cron jobs. It's a substantially nicer solution and it provides a ton of additional benefits.
