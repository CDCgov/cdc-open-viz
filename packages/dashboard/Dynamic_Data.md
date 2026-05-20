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

## URL Filter Types: Query String vs File Name

URL filters support two different methods for modifying dataset URLs, specified by the `filterBy` property:

### Query String Filters (`filterBy: "Query String"`)

Query String filters append the filter value as a URL query parameter. This is the most common approach for REST APIs.

**Configuration:**
- `filterBy`: Set to `"Query String"`
- `queryParameter`: The name of the query parameter to append (e.g., `"geography"`, `"state"`)
- `usedBy`: Optional row or visualization targets that scope which dataset URLs receive the query parameter

**Example:**
```json
{
  "key": "Geography",
  "type": "urlfilter",
  "filterBy": "Query String",
  "queryParameter": "geography",
  "usedBy": ["chart1"],
  "apiFilter": {
    "apiEndpoint": "https://api.cdc.gov/states",
    "valueSelector": "state",
    "textSelector": "state_name"
  }
}
```

When a user selects "Alaska", the dataset URL `https://api.cdc.gov/data.json` becomes `https://api.cdc.gov/data.json?geography=Alaska`.

### File Name Filters (`filterBy: "File Name"`)

File Name filters replace the filename portion of the URL. This is useful for APIs that use path-based routing or file-based data sources.

**Configuration:**
- `filterBy`: Set to `"File Name"`
- `fileNameTargets`: One or more dataset-specific filename rewrite targets
- `fileNameTargets[].datasetKey`: Dataset whose URL filename should be modified
- `fileNameTargets[].fileName`: Required template for the new filename; use `${query}` as the filter-value placeholder
- `whitespaceReplacement`: How to handle spaces in the filter value (`"Keep Spaces"`, `"Remove Spaces"`, or `"Replace With Underscore"`)
- `forceFileNameCapitalization`: Optional legacy compatibility behavior. Leave off for new configs and author filename templates exactly as the target files are named.

**Example:**
```json
{
  "key": "State",
  "type": "urlfilter",
  "filterBy": "File Name",
  "fileNameTargets": [
    { "datasetKey": "resp-data.json", "fileName": "NSSPSubState${query}" },
    { "datasetKey": "resp-summary.json", "fileName": "NSSPSubState${query}_summary" }
  ],
  "whitespaceReplacement": "Remove Spaces",
  "forceFileNameCapitalization": false,
  "usedBy": ["chart1"],
  "apiFilter": {
    "apiEndpoint": "https://api.cdc.gov/states",
    "valueSelector": "state"
  }
}
```

When a user selects "Alaska", the dataset URL for `resp-data.json` changes from `https://api.cdc.gov/data/default.json` to `https://api.cdc.gov/data/NSSPSubStateAlaska.json`. A dataset not listed in `fileNameTargets` keeps its original filename.

By default, File Name filters do not change template casing. The template text is used exactly as authored, and `whitespaceReplacement` is applied to the `${query}` value. Migrated legacy configs may set `forceFileNameCapitalization: true`, which capitalizes the first letter of each space-separated word in the template and selected filter value before applying whitespace replacement.

### Targeting Behavior

- **Query String filters**: `usedBy` scopes query parameters to datasets used by the selected visualizations or rows. The system looks at each target's `dataKey` property to identify which datasets should receive the query parameter.

- **File Name filters**: Filename rewrites are driven by `fileNameTargets`, not `usedBy`. `usedBy` still scopes visualization/row filtering and query-string parameter assembly, but a File Name filter can rewrite any dataset listed in `fileNameTargets` even when that dataset is used by a different visualization.

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
