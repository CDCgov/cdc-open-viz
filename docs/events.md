# Custom Events


## Subscribe Events
### cove_loaded

Each COVE package emits this event when a container ref and config are available. The event returns the entire config in `e.detail`, should a developer want to use any of the properties of the original config. 

**Example:**
```js
document.addEventListener('cove_loaded', e => console.log('COVE_LOADED', e.detail))
```

## Publish Events
### cove_filterData:
The chart package currently listens for this event in order to filter data using controls outside of the COVE package. An external filter is added and ran against the chart package.

**Creating filters for COVE to listen to:**

```js
// get dropdown and values
const select = document.querySelector("[DROPDOWN_EXAMPLE_SELECTOR]");

// listen to dropdown
select.addEventListener('change', function(e) {
  
	const updateFilters = () => {
		const values = Array.from(select.options).map(e => e.value);

		let externalFilters = {
			columnName: '[Column name in CSV]',
			active: select.value,
			values: values,
		}

		// If option is empty/default reset filters
		// Otherwise pass the external filter to a package.
		if(externalFilters.active === "") {
			const event = new CustomEvent('cove_filterData', { detail: [] });
			document.dispatchEvent(event);
		} else {
			const event = new CustomEvent('cove_filterData', { detail: externalFilters });
			document.dispatchEvent(event);
		}
	}

	updateFilters()

})
```
