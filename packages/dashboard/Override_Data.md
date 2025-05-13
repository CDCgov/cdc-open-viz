# Manually Overriding Dashboard Data

It is possible to override any data which has been uploaded as a file.

## Configure Visualization with Placeholder Data

1. Upload either a .csv or .json dataset in the Import Data tab under the Upload File section. Record the Data Source Name as it will be used later.

2. Map the data to a visualization. This will act as placeholder data allowing you to configure the visualization.

3. Complete the COVE configuration and save.

## Use CustomEvent to Override Data

1. In an area on the page where you can input custom javascript code you will be able to dispatch a [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent) to reset the data in your visualization.

2. You'll need to structure your data as an array of flat objects. Each object being a row of data. Each row should have the same columns as what was provided in the placeholder Data.

3. Create an Object which will be the dataset Override for the placeholder data. Each Data Override will have a key which matches the placeholder data's Data Source Name, i.e. `sample_data.csv`, and a value equal to the new data greated.

```
   const dataOverride = {
        "sample_data.csv": [{state: 'Alabama', rate: 123}, {state: 'Alaska', rate: 135}]
   }
```

4. Now create a CustomEvent with the event type set to `cove_set_data` and the options detail set to the `dataOverride`

```
    const customEvent = new CustomEvent('cove_set_data', {detail: dataOverride})
```

5. dispatch the event to the document.

```
document.dispatchEvent(customEvent)
```

You should see the data update immediately. Note: you can add as many datasets as you want in the dataOverride and they will all be updated in the same event.
