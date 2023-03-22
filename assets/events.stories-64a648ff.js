import{M as c}from"./index-f24d5b78.js";import{j as e,a as s,F as l}from"./jsx-runtime-670450c2.js";import{u as i}from"./index-4fb8b842.js";import"./iframe-0f1521e3.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-96c5f47c.js";import"./index-d37d4223.js";import"./index-53833bae.js";import"./index-356e4a49.js";function d(r={}){const{wrapper:a}=Object.assign({},i(),r.components);return a?e(a,{...r,children:e(o,{})}):o();function o(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",code:"code",strong:"strong",pre:"pre"},i(),r.components);return s(l,{children:[e(c,{title:"Helpers/events"}),`
`,e(t.h1,{children:"Custom Events"}),`
`,e(t.p,{children:"COVE packages are able to emit events in order to interface with external services."}),`
`,e("br",{}),`
`,e("br",{}),`
`,e(t.h2,{children:"Subscribe Events"}),`
`,e(t.h3,{children:"cove_loaded"}),`
`,s(t.p,{children:["Each COVE package emits this event when a container ref and config are available. The event returns the entire config in ",e(t.code,{children:"e.detail"}),", should a developer want to use any of the properties of the original config."]}),`
`,e(t.p,{children:e(t.strong,{children:"Example:"})}),`
`,e(t.pre,{children:e(t.code,{className:"language-js",children:`document.addEventListener('cove_loaded', e => console.log('COVE_LOADED', e.detail))
`})}),`
`,e(t.p,{children:" "}),`
`,e(t.h2,{children:"Publish Events"}),`
`,e(t.h3,{children:"cove_filterData:"}),`
`,e(t.p,{children:"The chart package currently listens for this event in order to filter data using controls outside of the COVE package. An external filter is added and ran against the chart package."}),`
`,e(t.p,{children:e(t.strong,{children:"Creating filters for COVE to listen to:"})}),`
`,e(t.pre,{children:e(t.code,{className:"language-js",children:`// get dropdown and values
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
`})})]})}}const p=()=>{throw new Error("Docs-only story")};p.parameters={docsOnly:!0};const n={title:"Helpers/events",tags:["stories-mdx"],includeStories:["__page"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:d};const b=["__page"];export{b as __namedExportsOrder,p as __page,n as default};
//# sourceMappingURL=events.stories-64a648ff.js.map
