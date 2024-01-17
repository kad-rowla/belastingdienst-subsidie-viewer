# Belastingdienst Subsidie Viewer ETL

In order to be able to publish linked data to an online data catalog, TriplyEtl must first be configured.
This is done with the following steps:

## 1. Create a TriplyDB API Token

**NOTE** *This step can be omitted if you already created or provided your token during setup of your project*
​
Your TriplyDB API Token is your access key to TriplyDB. You can create one in TriplyDB using [this instructions](https://triply.cc/docs/api-token) or you can type (and follow the onscreen instructions):

```sh
npx tools create-token
```

Once you have your token, open the file `.env` and write the following line:
`TRIPLYDB_TOKEN=<your-token-here>`

If this does not work, please make a token manually in the PLDN environment and paste your new token into the `.env` file. 

### Upload File

Once you have added your token to the .env file, upload this to the assets tab in this environment: https://data.pldn.nl/voor-bewoners/aanvragen. The tab is found above the insights tab on the left hand side of the screen. Here you will already see an uploaded CSV file, simply click on `upload a new version` and upload the new CSV file.

### 2.1 Transpile

Your ETL is written in TypeScript, but the ETL will be executed in JavaScript.  The following command transpiles your TypeScript code into the corresponding JavaScript code:

```sh
npm run build
```

### 2.2 Run

The following command runs your ETL:

```sh
npx etl lib/main.js
```
Your ETL is expected to tak around 40 minutes. 

## 2.3 Clean 
Once you have finalised the ETL, you should see two graphs in this environment: https://data.pldn.nl/voor-bewoners/aanvragen/graphs. Delete the oldest graph.

Once that is deleted, go to the services tab on the left hand side of the screen and update the service. The data will now be showing the latest data from the CSV. 
