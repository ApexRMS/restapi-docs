# Get started with the SyncroSim API

This tutorial guide will help you get started with the SyncroSim API and cover the basics of making API calls to [SyncroSim Cloud](https://cloud.syncrosim.com). This tutorial will cover:
- List libraries
- Select library
- Metadata
- Scenarios exist
- Get map List
- Zonal calculation

For more information on SyncroSim API requests, see the [Reference](/apis) page.

## Step 1: Sign Up and Get Your API Key

1. Visit the [Warp Sign-Up Page](#).
2. Create your account and log in.
3. Navigate to your dashboard to retrieve your API key.

Your API key is required to authenticate all API requests.

## Step 2: Make your first API request

Let's start by making a simple request to the SyncroSim API to ..

### Get list of libraries

Use the following command to get a list of the libraries available for access under your SyncroSim account.

```bash
curl -i -X GET \
  https://apidocs.syncrosim.com/_mock/apis/libs \
  -H 'x-ss-api-key: YOUR_API_KEY_HERE'
```

- **`timestamp`**: The date and time you wish to anchor, in ISO 8601 format.
- **`description`**: A brief description of the anchor’s purpose.

### Response Example

```json
{
  "anchor_id": "1234567890abcdef",
  "status": "Anchor set successfully"
}
```

This response confirms that the anchor has been successfully set and provides an `anchor_id` for future reference.
The response includes a list of libraries you uploaded and others have shared with you, along with public libraries created by the community:

## Step 3: Traveling to a Different Time

Next, let's travel to a different point in time using the Warp API.

### Making a Time Travel Request

To travel to a specific date and time, use this `curl` command:

```bash
curl -X POST https://api.warp.com/v1/travel \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_API_KEY" \
-d '{
  "destination_time": "1889-03-10T23:45:00Z",
  "location": "Tesla's Lab"
}'
```

- **`destination_time`**: The date and time you wish to travel to.
- **`location`**: The specific location you want to arrive at.

### Response Example

```json
{
  "status": "Travel successful",
  "current_time": "1889-03-10T23:45:00Z",
  "location": "Tesla's Lab"
}
```

This response confirms that you have successfully traveled to the specified time and location.

## Step 4: Retrieving Historical Data

While in the past, you may want to retrieve specific data or objects. Here's how to do that:

### Retrieving an Item

Use the following `curl` command to retrieve an item:

```bash
curl -X GET https://api.warp.com/v1/retrieve-item \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_API_KEY" \
-d '{
  "item_description": "Tesla's Blueprint",
  "location": "Tesla's Lab",
  "time": "1889-03-10T23:50:00Z"
}'
```

### Response Example

```json
{
  "item_id": "0987654321fedcba",
  "status": "Item retrieved successfully",
  "item_details": {
    "description": "Tesla's Blueprint",
    "retrieved_at": "1889-03-10T23:50:00Z"
  }
}
```

This response indicates that the item has been successfully retrieved and provides details about the item.

## Step 5: Returning to Your Temporal Anchor

Once you've completed your mission, return to your previously set temporal anchor.

### Returning to an Anchor

To return to your temporal anchor, use this `curl` command:

```bash
curl -X POST https://api.warp.com/v1/return \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_API_KEY" \
-d '{
  "anchor_id": "1234567890abcdef"
}'
```

### Response Example

```json
{
  "status": "Return successful",
  "current_time": "2024-09-01T00:00:00Z"
}
```

This response confirms that you've successfully returned to your starting point.

## Step 6: Monitoring for Paradoxes

Finally, ensure that your actions haven’t created any temporal paradoxes:

### Checking for Paradoxes

Use the following `curl` command:

```bash
curl -X GET https://api.warp.com/v1/check-paradox \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_API_KEY" \
-d '{
  "timeline_id": "primary"
}'
```

### Response Example

```json
{
  "status": "No paradoxes detected",
  "timeline_stability": "Stable"
}
```

This response indicates that your timeline is stable and free of paradoxes.

## Congratulations!

You’ve completed your first time travel mission using the Warp API! Explore more advanced features in our [documentation](#) or join our [community](#) to connect with other time travelers.

[Start Your Next Mission](#)
```
