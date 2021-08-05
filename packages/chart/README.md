# @cdc/chart

[![npm](https://img.shields.io/npm/v/@cdc/chart)](https://www.npmjs.com/package/@cdc/chart)


`<CdcChart />` is a React component produced by the CDC for visualizing your data in a chart. Some supported types are Line, bar, pie, combination and horizontal bar chart. This package is part of the larger [CDC Open Visualization](https://github.com/CDCgov/cdc-open-viz) project.

### Installation and Usage

1. Install the package in your React project `npm install @cdc/chart`
2. Import the component and begin using in your code.
```JSX
import CdcChart from '@cdc/chart'

function App() {

  return (
    <div className="App">
      <CdcChart config={configObj} />
    </div>
  );
}

export default App;
```

Note, you must pass in a configuration object. Configuration objects can be created with the [Editor package](https://github.com/CDCgov/cdc-open-viz/tree/main/packages/editor).

```
sampleConfig = {
        data: [{"STATE":"Alabama","Rate":"30","Location":"Vehicle","URL":"https://www.cdc.gov/"},{"STATE":"Alaska","Rate":"40","Location":"Work","URL":"https://www.cdc.gov/"},{"STATE":"American Samoa","Rate":"55","Location":"Home","URL":"https://www.cdc.gov/"},{"STATE":"Arizona","Rate":"57","Location":"School","URL":"https://www.cdc.gov/"},{"STATE":"Arkansas","Rate":"60","Location":"School","URL":"https://www.cdc.gov/"},{"STATE":"California","Rate":"30","Location":"Home","URL":"https://www.cdc.gov/"},{"STATE":"Colorado","Rate":"40","Location":"Vehicle","URL":"https://www.cdc.gov/"},{"STATE":"Connecticut","Rate":"55","Location":"Home","URL":"https://www.cdc.gov/"},{"STATE":"Deleware","Rate":"57","Location":"Home","URL":"https://www.cdc.gov/"},{"STATE":"DC","Rate":"60","Location":"Home","URL":"https://www.cdc.gov/"},{"STATE":"Florida","Rate":"30","Location":"Work","URL":"https://www.cdc.gov/"},{"STATE":"Georgia","Rate":"40","Location":"Work","URL":"https://www.cdc.gov/"},{"STATE":"Guam","Rate":"55","Location":"Home","URL":"https://www.cdc.gov/"},{"STATE":"Hawaii","Rate":"57","Location":"School","URL":"https://www.cdc.gov/"},{"STATE":"Idaho","Rate":"60","Location":"School","URL":"https://www.cdc.gov/"},{"STATE":"Illinois","Rate":"30","Location":"Work","URL":"https://www.cdc.gov/"},{"STATE":"Indiana","Rate":"40","Location":"Vehicle","URL":"https://www.cdc.gov/"},{"STATE":"Iowa","Rate":"55","Location":"Home","URL":"https://www.cdc.gov/"},{"STATE":"Kansas","Rate":"57","Location":"Home","URL":"https://www.cdc.gov/"},{"STATE":"Kentucky","Rate":"60","Location":"NA","URL":"https://www.cdc.gov/"},{"STATE":"Louisiana","Rate":"30","Location":"Vehicle","URL":"https://www.cdc.gov/"},{"STATE":"Maine","Rate":"40","Location":"Work","URL":"https://www.cdc.gov/"},{"STATE":"Marshall Islands","Rate":"55","Location":"Home","URL":"https://www.cdc.gov/"},{"STATE":"Maryland","Rate":"57","Location":"School","URL":"https://www.cdc.gov/"},{"STATE":"Massachusetts","Rate":"60","Location":"School","URL":"https://www.cdc.gov/"},{"STATE":"Michigan","Rate":"12","Location":"Work","URL":"https://www.cdc.gov/"},{"STATE":"Micronesia","Rate":"65","Location":"Vehicle","URL":"https://www.cdc.gov/"},{"STATE":"Minnesota","Rate":"55","Location":"Home","URL":"https://www.cdc.gov/"},{"STATE":"Mississippi","Rate":"57","Location":"Home","URL":"https://www.cdc.gov/"},{"STATE":"Montana","Rate":"60","Location":"Home","URL":"https://www.cdc.gov/"},{"STATE":"Montana","Rate":"30","Location":"Vehicle","URL":"https://www.cdc.gov/"},{"STATE":"Nebraska","Rate":"40","Location":"Work","URL":"https://www.cdc.gov/"},{"STATE":"Nevada","Rate":"55","Location":"Home","URL":"https://www.cdc.gov/"},{"STATE":"New Hampshire","Rate":"57","Location":"School","URL":"https://www.cdc.gov/"},{"STATE":"New Jersey","Rate":"60","Location":"School","URL":"https://www.cdc.gov/"},{"STATE":"New Mexico","Rate":"12","Location":"Work","URL":"https://www.cdc.gov/"},{"STATE":"New York","Rate":"40","Location":"Vehicle","URL":"https://www.cdc.gov/"},{"STATE":"North Carolina","Rate":"55","Location":"Home","URL":"https://www.cdc.gov/"},{"STATE":"North Dakota","Rate":"57","Location":"Home","URL":"https://www.cdc.gov/"},{"STATE":"Northern Mariana Islands","Rate":"60","Location":"Home","URL":"https://www.cdc.gov/"},{"STATE":"Ohio","Rate":"88","Location":"Vehicle","URL":"https://www.cdc.gov/"},{"STATE":"Oklahoma","Rate":"40","Location":"Work","URL":"https://www.cdc.gov/"},{"STATE":"Oregon","Rate":"55","Location":"Home","URL":"https://www.cdc.gov/"},{"STATE":"Palau","Rate":"15","Location":"School","URL":"https://www.cdc.gov/"},{"STATE":"Pennsylvania","Rate":"60","Location":"School","URL":"https://www.cdc.gov/"},{"STATE":"Puerto Rico","Rate":"30","Location":"Work","URL":"https://www.cdc.gov/"},{"STATE":"Rhode Island","Rate":"40","Location":"Vehicle","URL":"https://www.cdc.gov/"},{"STATE":"South Carolina","Rate":"55","Location":"Home","URL":"https://www.cdc.gov/"},{"STATE":"South Dakota","Rate":"86","Location":"Home","URL":"https://www.cdc.gov/"},{"STATE":"Tennessee","Rate":"60","Location":"Home","URL":"https://www.cdc.gov/"},{"STATE":"Texas","Rate":"30","Location":"Vehicle","URL":"https://www.cdc.gov/"},{"STATE":"Utah","Rate":"54","Location":"Work","URL":"https://www.cdc.gov/"},{"STATE":"Vermont","Rate":"40","Location":"Home","URL":"https://www.cdc.gov/"},{"STATE":"Virgin Islands","Rate":"55","Location":"School","URL":"https://www.cdc.gov/"},{"STATE":"Virginia","Rate":"57","Location":"School","URL":"https://www.cdc.gov/"},{"STATE":"Washington","Rate":"62","Location":"Work","URL":"https://www.cdc.gov/"},{"STATE":"West Virginia","Rate":"25","Location":"Vehicle","URL":"https://www.cdc.gov/"},{"STATE":"Wyoming","Rate":"43","Location":"Vehicle","URL":"https://www.cdc.gov/"}],"dataFileName":"valid-data-map.csv","dataFileSourceType":"file","dataDescription":{"horizontal":false},
        newViz: true,
        type: "chart",
        visualizationType: "Bar"
}
```

### Properties

| Property          | Type     | Description                                                                                                                                                                                                                                                                             |
|-------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| config        | String   | A JavaScript object with the configuration for the chart. Pass either this or the configUrl property to setup your chart.                                                                                                                                                                                         |
| configUrl         | String   | Pass a URL to a .json file and it will be consumed and used as the configuration.                                                                                                                                                                                                       |