# Building an API for COVE

COVE's URL data sources are able to work along side dashboard URL Filters to dynamically generate query strings for API requests. These query strings are intendent to be flexible and generic so that they can work with different API structures, however most APIs built for COVE at the time of writing this follow the behavior of (Socrata)[https://dev.socrata.com/docs/queries/].

To triger a data source to pull dynamic data make sure a `dataUrl` is present in the config.

Example (1):

```
  "datasets": {
    "cove_app_api": {
      "dataFileSize": 1292219,
      "dataFileName": "https://cdc.gov/cove_app_api",
      "dataFileSourceType": "url",
      "dataFileFormat": "JSON",
      "dataUrl": "https://cdc.gov/cove_app_api"
    }
  }
```

The `cove_app_api` data source can be mapped to a visualization or row using `cove_app_api` as the `dataKey`.

# Working with `urlfilter` type Filters

Dashboards have a section called `sharedFilters` that is mapped over to gather any relevant filter values to include in dynamic API calls. `urlfilter` types have an `apiEndpoint`, located in the `apiFilter` section, which is fetched to provide options for the filter. At runtime this data response uses the `valueSelector` in the `apiFilter` section to cache filter values in the sharedFilter item (optionaly `textSelector` can be configured show a different text to the user than the raw value).

After all required selections are made the `sharedFilters` are mapped over to gather query parameters to attach to the dynamic datasets. If the sharedFilter item has a list of `usedBy` identifiers the query parameters will only apply to datasets that are mapped to those respective visualizations or rows, conversly if there's now `usedBy` or the list is empty the sharedFilter item will apply it's query parameter(s) to all dynamic datasets used by the current dashboard.

Example (2):

```
    "sharedFilters": [
      {
        "key": "Dataset",
        "showDropdown": true,
        "tier": 1,
        "type": "urlfilter",
        "apiFilter": {
          "apiEndpoint": "https://cdc.gov/cove_app_api?$select=DISTINCT%20Topic",
          "valueSelector": "Topic",
          "textSelector": ""
        },
        "resetLabel": "",
        "setByQueryParameter": "",
        "usedBy": []
      }
    ]
```

If the sharedFilter in Example (2) was configured in the dashboard configuration as Example (1), after the user made a selection to a dropdown mapped to this sharedFilter, the value selected would be appended to the `dataUrl` in the dataset.

Example: `https://cdc.gov/cove_app_api?Topic="Some Topic"`

The resulting url will be fetched and the resulting data will be mapped to the respective visualizations or rows.

# Dynamic Data without a sharedFilter item

A `loadQueryParam` can be configured directly on the dataset.

Example (3):

```
  "datasets": {
    "cove_app_api": {
      "dataFileSize": 1292219,
      "dataFileName": "https://cdc.gov/cove_app_api?Topic='Sample Topics'",
      "dataFileSourceType": "url",
      "dataFileFormat": "JSON",
      "dataUrl": "https://cdc.gov/cove_app_api?Topic='Sample Topics'",
      "loadQueryParam": "Topic"
    }
  }
```

When the page is loaded COVE will look at the `window.location.search` to find any matching query parameters that match `Topic` if one is found it will replace the found browser param with any that are present in the `dataUrl` in the dataset. For Example if `window.location.search` has `?Topic="Some Topic"&SomethingElse="something"` the url fetched for the Example (3) dataset would be `https://cdc.gov/cove_app_api?Topic="Some Topic"`. Note: `Topic='Sample Topics'` is included in the `dataUrl` to provide sample data intended for the COVE editor, this data will load if no matching query param is present in `window.location.search`.

# Special Statement parameters

Any query parameter which begins with `$` will be treated as a special statement parameter. These are reserved words which will for the most part be ignored by COVE filters and simply passed to the API. Example: `https://cdc.gov/cove_app_api?$select=Topic,Location&Age=18+` here the 'Age' param can be manipulated by a `urlfilter` type Filter, however the '$select' param cannot.
