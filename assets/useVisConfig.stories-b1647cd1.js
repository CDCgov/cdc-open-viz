import{M as u,S as s,A as d}from"./index-a5c7af6f.js";import{j as n,a as i,F as p}from"./jsx-runtime-670450c2.js";import{u as c}from"./index-4fb8b842.js";import"./iframe-9bfe7737.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const o=({...t})=>{const r=Object.assign({div:"div"},c());return n(r.div,{className:"example-wrapper"})};function v(t={}){const{wrapper:r}=Object.assign({},c(),t.components);return r?n(r,{...t,children:n(g,{})}):g();function g(){const e=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",h2:"h2",h3:"h3",strong:"strong",pre:"pre",a:"a",ol:"ol",em:"em"},c(),t.components);return i(p,{children:[n(u,{title:"Hooks/useVisConfig"}),`
`,`
`,n(e.h1,{children:"useVisConfig Hook"}),`
`,i(e.p,{children:["The ",n(e.code,{children:"useVisConfig()"})," hook is used to access and update the configuration data for a visualization. It provides the following:"]}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"An exported object of values that can be destructured and used for accessing, setting, and updating, the store's config values."}),`
`,i(e.li,{children:["A Context wrapper, ",n(e.code,{children:"<VisConfigProvider/>"}),", that provides a uniformed loader, processor, and setter for all visualization config settings and data. This Context provides proxied access to the config values on the Zustand store (where the processed settings and data is registered)."]}),`
`]}),`
`,n(e.p,{children:" "}),`
`,n(e.h2,{children:"Exports"}),`
`,n("br",{}),`
`,n(e.h3,{children:n(e.strong,{children:"{ config } = useVisConfig()"})}),`
`,i(e.p,{children:["Returns the ",n(e.code,{children:"<VisConfigProvider/>"})," config values, retrieved from the store."]}),`
`,n(e.p,{children:" "}),`
`,n(e.h3,{children:n(e.strong,{children:"{ visualizationKey } = useVisConfig()"})}),`
`,i(e.p,{children:["Returns the ",n(e.code,{children:"visualizationKey"})," of the current component/visualization. If the component is a:"]}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.strong,{children:"standalone visualization"}),", or ",n(e.strong,{children:"dashboard"})," - ",n(e.code,{children:"visualizationKey"})," returns ",n(e.code,{children:"__default__"}),"."]}),`
`,i(e.li,{children:[n(e.strong,{children:"visualization displayed on a dashboard"})," - ",n(e.code,{children:"visualizationKey"})," returns the ",n(e.code,{children:"UID"})," assigned to it by the dashboard."]}),`
`]}),`
`,n(e.p,{children:" "}),`
`,n(e.h3,{children:n(e.strong,{children:"{ updateVisConfig } = useVisConfig()"})}),`
`,n(e.p,{children:"Returns a function used to update the store's config object."}),`
`,n(e.p,{children:n(e.strong,{children:"Syntax"})}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`updateVisConfig(config)
`})}),`
`,n(e.p,{children:n(e.strong,{children:"Arguments"})}),`
`,n(s,{name:"updateVisConfig",argTypes:{config:{description:"An `{object}` containing the key/value pairs that you want to update the store's config object with.",control:!1}},children:o.bind({})}),`
`,n(d,{story:"updateVisConfig"}),`
`,n(e.p,{children:" "}),`
`,n(e.h3,{children:n(e.strong,{children:"{ updateVisConfigField } = useVisConfig()"})}),`
`,i(e.p,{children:["Returns a function used to update a specific, targeted key in the store's config object. Uses the ",n(e.a,{href:"./?path=/docs/helpers-confighelpers--docs",children:"setConfigKeyValue()"})," helper function to update the key."]}),`
`,n(e.p,{children:n(e.strong,{children:"Syntax"})}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`updateVisConfigField(configKeyArray, setValue, merge = true)
`})}),`
`,n(e.p,{children:n(e.strong,{children:"Arguments"})}),`
`,n(s,{name:"updateVisConfigField",argTypes:{configKeyArray:{description:'An `[array]` of strings, or a single `"string"`, that identifies (or traverses to) the key in the config object that you want to update.',control:!1},setValue:{description:"The value that you want to update the key to.",control:!1},merge:{description:"(Optional) A `boolean`; if `true`, updates the field using a deep merge, instead of a simple assignment. This is useful for updating nested objects, or arrays, without overwriting the entire object. <br/><br/>Default: `true`",control:!1}},children:o.bind({})}),`
`,n(d,{story:"updateVisConfigField"}),`
`,n(e.p,{children:n(e.strong,{children:"Example"})}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`config = {
  foo: {
    bar: {
      baz: 'This is old...'
    }
  }
}

updateConfigField(['foo', 'bar', 'baz'], 'A new value!')

// Sets the following:
config = {
  foo: {
    bar: {
      baz: 'A new value!'
    }
  }
}

updateConfigField('foo', { qux: 'A new, merged key!'})

// Sets the following:
config = {
  foo: {
    bar: {
      baz: 'A new value!'
    },
    qux: 'A new, merged key!'
  }
}
`})}),`
`,n(e.p,{children:" "}),`
`,n(e.h2,{children:"<VisConfigProvider/> Context"}),`
`,i(e.p,{children:["The ",n(e.code,{children:"<VisConfigProvider/>"}),` is a Context Provider that provides loading and processing functions for config settings, as well as proxied access to configuration settings and data on the store. This context makes stored config  values
accessible to any of its children when using the `,n(e.code,{children:"useVisConfig()"})," hook."]}),`
`,i(e.p,{children:[n(e.code,{children:"<VisConfigProvider/>"})," receives the following props:"]}),`
`,n(s,{name:"VisConfigProvider",argTypes:{visualizationKey:{description:"A string key annotating either a visualization key for a dashboard config, or a root level config. The `__default__` key is used to annotate the root level config on the store, and is used for standalone visualizations, and dashboards.<br/><br/> This key is used to retrieve - and update - a visualization's config in its dashboard `config.visualizations[visualizationKey]` object.",control:!1},config:{description:"A JSON object containing the configuration settings for a visualization.",control:!1},configUrl:{description:"A URL to a JSON file containing the configuration settings for a visualization.",control:!1},defaultConfig:{description:"A JSON object containing the default configuration settings for a specific visualization.",control:!1},transformConfig:{description:'A function to be processed on a config - this "runtime" provides a way to dynamically update the config based on the current state/config settings of the visualization. This can be necessary in certain circumstances, where you need a transitional state to be applied to a display, but the original config itself should not be updated to reflect these values.',control:!1}},children:o.bind({})}),`
`,n(d,{story:"VisConfigProvider"}),`
`,n(e.p,{children:" "}),`
`,n(e.h2,{children:"Config Processing"}),`
`,i(e.p,{children:[n(e.code,{children:"<VisConfigProvider/>"})," processes the supplied config entries using the following steps:"]}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:[`
`,i(e.p,{children:[n(e.code,{children:"initConfig()"})," is initiated on mount of the ",n(e.code,{children:"<VisConfigProvider/>"}),", and performs the following procedures:"]}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:"A config object is resolved from one of the following sources, in the following order:"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["(2a.) ",n(e.strong,{children:"dashboardStoredConfig"}),": A pre-existing object retrieved from a dashboard's config, residing on ",n(e.code,{children:"config.visualizations['visualizationKey']"}),"."]}),`
`,i(e.li,{children:["(2b.) ",n(e.strong,{children:"config as configObj"}),": If a ",n(e.strong,{children:"dashboardStoredConfig"})," is not found, the ",n(e.strong,{children:"configObj"})," (an object directly supplied to the visualization) is used."]}),`
`,i(e.li,{children:["(2c.) ",n(e.strong,{children:"configUrl"}),": if a ",n(e.strong,{children:"configObj"})," is not found, the ",n(e.strong,{children:"configUrl"})," link is fetched to retrieve an object from an external JSON file."]}),`
`]}),`
`,n("br",{}),`
`]}),`
`,i(e.li,{children:[`
`,i(e.p,{children:["The resolved config object is then deep merged with the ",n(e.code,{children:"defaultConfig"})," property object with lodash merge; the resolved config object values take precedence over ",n(e.code,{children:"defaultConfig"}),"."]}),`
`]}),`
`,i(e.li,{children:[`
`,i(e.p,{children:["The now-resolved config (",n(e.code,{children:"resolvedConfig"}),"), containing any defaults, is then processed using the ",n(e.a,{href:"./?path=/docs/helpers-coveupdateworker--docs",children:"coveUpdateWorker"}),", which adds/removes/updates any config key/values that might have been modified during versioned updates."]}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:"The config object is then set in the store:"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["If working with a dashboard config, the config is ",n(e.em,{children:n(e.strong,{children:"updated"})}),", using its ",n(e.code,{children:"visualizationKey"}),", on the ",n(e.code,{children:"config.visualizations['visualizationKey']"})," entry. This ensures that the config is stored in the dashboard, and can be retrieved on subsequent page loads."]}),`
`,i(e.li,{children:["If working with a standalone visualization, the config is ",n(e.em,{children:n(e.strong,{children:"set"})})," on the root config entry, and is immediately available to the visualization through the store."]}),`
`]}),`
`]}),`
`,i(e.li,{children:[`
`,i(e.p,{children:["The ",n(e.code,{children:"getData()"})," store function is run, which retrieves the data from either ",n(e.code,{children:"config.data"}),", or the ",n(e.code,{children:"config.dataUrl"}),` source, and registers the returned values on the store. This function also processes the provided data
with the `,n(e.a,{href:"./?path=/docs/helpers-datatransform-autostandardize--docs",children:"autoStandardize"})," and ",n(e.a,{href:"./?path=/docs/helpers-datatransform-developerstandardize--docs",children:"developerStandardize"})," ",n(e.a,{href:"./?path=/docs/helpers-datatransform-datatransform-class--docs",children:"DataTransform"})," functions."]}),`
`]}),`
`]}),`
`,n(e.p,{children:" "}),`
`,n(e.h2,{children:"Runtime Processing (transformConfig)"}),`
`,i(e.p,{children:["While the config is being processed, the ",n(e.code,{children:"finalConfig()"}),` callback listens for a resolved config. Once a config object has been resolved,
the `,n(e.code,{children:"transformConfig()"}),` function is then run on that resolved config object. Depending on the behavior defined, this can result in a variety of different outputs.
Most commonly, the `,n(e.code,{children:"transformConfig()"})," function is used to dynamically update the config object based on the current state of the visualization, and creates ",n(e.code,{children:"config.runtime"}),` values
that can be used for a visualization. This can be used to address a variety of situational needs.`]}),`
`,n(e.p,{children:n(e.strong,{children:"[Example]"})}),`
`,i(e.p,{children:["If you change a Bar Chart from Horizontal, to Vertical, you may want to swap the values of the ",n(e.code,{children:"xAxisLabel"})," to ",n(e.code,{children:"yAxisLabel"}),`.
Approaching this could prove to be a bit tricky:`]}),`
`,n(e.p,{children:n(e.strong,{children:"Without transformConfig:"})}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`// Without a runtime transformConfig, the following code will not work as expected:
if (config.orientation = 'vertical') {
  config.xAxisLabel = config.yAxisLabel // After changing the 'xAxisLabel' value, the original value of 'xAxisLabel' is lost
  config.yAxisLabel = config.xAxisLabel // Since the original value of 'xAxisLabel' is now lost, the 'yAxisLabel' value cannot be updated properly - it retains it's original value
}
`})}),`
`,n(e.p,{children:n(e.strong,{children:"With transformConfig:"})}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`  // With a runtime transformConfig, the following code will work as expected:
// The 'config.runtime' object is used to store transitional values, leaving the initial config values intact

config.runtime = {}

if (config.orientation = 'vertical') {
  config.runtime.xAxisLabel = config.yAxisLabel
  config.runtime.yAxisLabel = config.xAxisLabel
}
`})})]})}}const l=o.bind({});l.storyName="updateVisConfig";l.argTypes={config:{description:"An `{object}` containing the key/value pairs that you want to update the store's config object with.",control:!1}};l.parameters={storySource:{source:`({ ...args
}) => {
  return <div className="example-wrapper">
    </div>;
}`}};const h=o.bind({});h.storyName="updateVisConfigField";h.argTypes={configKeyArray:{description:'An `[array]` of strings, or a single `"string"`, that identifies (or traverses to) the key in the config object that you want to update.',control:!1},setValue:{description:"The value that you want to update the key to.",control:!1},merge:{description:"(Optional) A `boolean`; if `true`, updates the field using a deep merge, instead of a simple assignment. This is useful for updating nested objects, or arrays, without overwriting the entire object. <br/><br/>Default: `true`",control:!1}};h.parameters={storySource:{source:`({ ...args
}) => {
  return <div className="example-wrapper">
    </div>;
}`}};const f=o.bind({});f.storyName="VisConfigProvider";f.argTypes={visualizationKey:{description:"A string key annotating either a visualization key for a dashboard config, or a root level config. The `__default__` key is used to annotate the root level config on the store, and is used for standalone visualizations, and dashboards.<br/><br/> This key is used to retrieve - and update - a visualization's config in its dashboard `config.visualizations[visualizationKey]` object.",control:!1},config:{description:"A JSON object containing the configuration settings for a visualization.",control:!1},configUrl:{description:"A URL to a JSON file containing the configuration settings for a visualization.",control:!1},defaultConfig:{description:"A JSON object containing the default configuration settings for a specific visualization.",control:!1},transformConfig:{description:'A function to be processed on a config - this "runtime" provides a way to dynamically update the config based on the current state/config settings of the visualization. This can be necessary in certain circumstances, where you need a transitional state to be applied to a display, but the original config itself should not be updated to reflect these values.',control:!1}};f.parameters={storySource:{source:`({ ...args
}) => {
  return <div className="example-wrapper">
    </div>;
}`}};const a={title:"Hooks/useVisConfig",tags:["stories-mdx"],includeStories:["updateVisConfig","updateVisConfigField","visConfigProvider"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:v};const S=["Template","updateVisConfig","updateVisConfigField","visConfigProvider"];export{o as Template,S as __namedExportsOrder,a as default,l as updateVisConfig,h as updateVisConfigField,f as visConfigProvider};
//# sourceMappingURL=useVisConfig.stories-b1647cd1.js.map
