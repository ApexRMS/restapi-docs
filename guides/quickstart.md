# Get started with the SyncroSim API

This tutorial will help you get started with the SyncroSim API and cover the basics of making API calls to [SyncroSim Cloud](https://cloud.syncrosim.com). This tutorial will show how to:
- Get setup with the SyncroSim API
- Get a list of libraries accessible to you
- Get the metadata associated with a library
- Get a list of scenarios in a library
- Get a list of maps in a library
- Perform a zonal calculation on a map

## Step 1: Sign up & Get setup

1. Visit the [Warp Sign-Up Page](#).
2. Create your account and log in.
3. Navigate to your dashboard to retrieve your API key.

An API key is required to authenticate all API requests.

## Step 2: Get libraries

### Request

Begin by requesting a list of the all the libraries available for access under your SyncroSim account, using the command:

```bash
curl -i -X GET \
  https://apidocs.syncrosim.com/_mock/apis/libs \
  -H 'x-ss-api-key: YOUR_API_KEY_HERE'
```

### Response 

The response should return a list of all libraries uploaded by you or that have been share with you by others.

```json
[
    {
        "libraryName": "Library name",
        "lastModified": "Year-Month-Day at Hour:Minute AM/PM",
        "uploadUser": "Owner username"
    }
```

## Step 3: Get library metadata

### Request

To get the metadata associated with a specific library, use the command:

```bash
curl -i -X GET \
  'https://apidocs.syncrosim.com/_mock/apis/libs/user/{username}/{libraryName}/metadata' \
  -H 'x-ss-api-key: YOUR_API_KEY_HERE'
```

### Response 

The response should return the following metadata fields: 

```json
{
    "libraryName": "Library name",
    "libraryOwner": "Organization name",
    "lastModified": "Year-Month-Day at Hour:Minute AM/PM",
    "fileSize": "X MB",
    "packageName": "Package name",
    "packageVersion": "X.X.X",
    "description": "Library description"
}
```

## Step 4: Get scenarios in a library

### Request

To get a list of the all the existing scenarios in a specific library, use the command:

```bash
curl -i -X GET \
  'https://apidocs.syncrosim.com/_mock/apis/libs/user/{username}/{libraryName}/scenarios' \
  -H 'x-ss-api-key: YOUR_API_KEY_HERE'
```

### Response 

The response should return a list of all scenarios in the library with their respective metadata.

```json
[
    {
        "scenarioId": X,
        "parentId": X,
        "scenarioName": "Scenario name",
        "isResult": true/false,
        "lastModified": "Year-Month-Day at Hour:Minute AM/PM",
        "description": "Scenario description"
    }
]
```

## Step 5: Get maps in a library

### Request

To get a list of the all the existing maps in a specific library, use the command:

```bash
curl -i -X GET \
  'https://apidocs.syncrosim.com/_mock/apis/libs/user/{username}/{libraryName}/maps?type=string' \
  -H 'x-ss-api-key: YOUR_API_KEY_HERE'
```

### Response 

The response should return a list of all maps in the library with their respective metadata.

```json
[
    {
        "mapLayoutId": X,
        "mapLayoutTitle": "Map type name",
        "scenarioId": X,
        "iteration": X,
        "variableShortName": "packageName_DatasheetName",
        "variableDisplayName": "Datasheet name",
        "timestep": X,
        "uniqueMapIdentifier": "string"
    }
]
```

## Step 6: Perform zonal calculations

### Request

Lastly, to perform a zonal calculation on a subset of a map, use the command:

```bash
curl -i -X POST \
  'https://apidocs.syncrosim.com/_mock/apis/libs/user/{username}/{libraryName}/maps/zonal' \
  -H 'Content-Type: application/json' \
  -H 'x-ss-api-key: YOUR_API_KEY_HERE' \
  -d '{
    "mapId": "string",
    "webhookUrl": "string",
    "geojson": "string"
  }'
```

### Response 

The results will be displayed in the `webhookUrl` provided, and the response will signal the completion of the request.

```json
{
  "success": true/false,
  "message": "string",
  "requestId": "string"
}
```

## Next steps

This tutorial covered the basics of using the SyncroSim API. Explore more advanced features in the [Reference](/apis) page.