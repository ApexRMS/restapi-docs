# Get started

This tutorial will get you started with the **SyncroSim API**, covering the basics of making API calls to [SyncroSim Cloud](https://cloud.syncrosim.com). It includes how to:
* Get setup with the SyncroSim API
* Get a list of libraries accessible to you
* Get the metadata associated with a library
* Get a list of scenarios in a library
* Get a list of maps in a library
* Perform a zonal calculations on a map

## Step 1: Sign up & Get setup

1. Visit the [Warp Sign-Up Page](#).
2. Create your account and log in.
3. Navigate to your dashboard to retrieve your API key.

An API key is required to authenticate all API requests.

## Step 2: Get libraries

### Request

Begin by requesting a list of all the libraries available for access under your SyncroSim account, using the command:

```bash
curl -i -X GET \
  https://apidocs.syncrosim.com/_mock/apis/libs \
  -H 'x-ss-api-key: YOUR_API_KEY_HERE'
```

### Response 

The response should return a list of all libraries uploaded by you. If you belong to an organization, you will also be able to see all the libraries published by other members of that organization.

```json
[
    {
        "libraryName": "Library name",
        "lastModified": "Year-Month-Day at Hour:Minute AM/PM",
        "uploadUser": "Owner username"
    }
]
```

## Step 3: Get library metadata

### Request

To get the metadata associated with a library, identify the `uploadUser` and `libraryName` of the target library, and substitute them in the following command:

```bash
curl -i -X GET \
  'https://apidocs.syncrosim.com/_mock/apis/libs/user/{uploadUser}/{libraryName}/metadata' \
  -H 'x-ss-api-key: YOUR_API_KEY_HERE'
```

### Response 

The response should return the following metadata fields for the specified library: 

```json
{
    "libraryName": "Library name",
    "libraryOwner": "User or Organization name",
    "lastModified": "Year-Month-Day at Hour:Minute AM/PM",
    "fileSize": "X MB",
    "packageName": "Package name",
    "packageVersion": "X.X.X",
    "description": "Library description"
}
```

## Step 4: Get scenarios in a library

### Request

To get a list of all the existing scenarios in a specific library, use the command:

```bash
curl -i -X GET \
  'https://apidocs.syncrosim.com/_mock/apis/libs/user/{uploadUser}/{libraryName}/scenarios' \
  -H 'x-ss-api-key: YOUR_API_KEY_HERE'
```

### Response 

The response should return a list of all scenarios in the specified library with their respective metadata.

```json
[
    {
        "scenarioId": X,
        "parentId": X/null,
        "scenarioName": "Scenario name",
        "isResult": true/false,
        "lastModified": "Year-Month-Day at Hour:Minute AM/PM",
        "description": "Scenario description"
    }
]
```

## Step 5: Get maps in a library

### Request

To get a list of all the existing maps in a specific library, use the command:

```bash
curl -i -X GET \
  'https://apidocs.syncrosim.com/_mock/apis/libs/user/{uploadUser}/{libraryName}/maps?type=string' \
  -H 'x-ss-api-key: YOUR_API_KEY_HERE'
```

### Response 

The response should return a list of all maps in the specified library with their respective metadata.

```json
[
    {
        "mapLayoutId": X,
        "mapLayoutTitle": "Map type name",
        "scenarioId": X,
        "iteration": X/null,
        "variableShortName": "packageName_DatasheetName",
        "variableDisplayName": "Datasheet name",
        "timestep": X/null,
        "uniqueMapIdentifier": "string"
    }
]
```

## Step 6: Perform zonal calculations

### Request

Lastly, to perform a zonal calculation on a subset area of a map, in addition to the `{uploadUser}` and `{libraryName}` of the target library, you will need to: (1) copy the `mapId` for the target map from the previous response, (2) provide a `webhookUrl` for the results to be delivered to, and (3) provide a `geojson` of the map area to be used in the zonal calculation. Substitute them in the following command:

```bash
curl -i -X POST \
  'https://apidocs.syncrosim.com/_mock/apis/libs/user/{uploadUser}/{libraryName}/maps/zonal' \
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