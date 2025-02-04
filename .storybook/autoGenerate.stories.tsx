/* COPY THIS FILE INTO A FOLDER TO DYNAMICALLY GENERATE STORIES FOR ALL THE CONFIGS */
/* Creates one story that contains all configs in folder */
/* RECOMMENDED USE:
  1) create a /_stories/private directory with configs or config subfolders and copy this file into it/them
  2) Change [folder-name] below to a name for the folder
*/

const meta = {
  title: 'Private/[folder-name]'
}

import React from 'react'

import CdcMap from '@cdc/map/src/CdcMap'
import Chart from '@cdc/chart/src/CdcChart'
import Dashboard from '@cdc/dashboard/src/CdcDashboard'
import CdcDataBite from '@cdc/data-bite/src/CdcDataBite'
import CdcWaffleChart from '@cdc/waffle-chart/src/CdcWaffleChart'

async function importAll() {
  const modules = import.meta.glob('./**/*.json')
  const configs = {}
  for (const path in modules) {
    const [, filename] = path.split('/')
    const mod = await modules[path]()
    configs[filename] = mod
  }
  return configs
}

const allConfigs: Record<
  string,
  {
    type: string
    [key: string]: any
  }
> = await importAll()

export default meta

export const AllConfigs = {
  render: () => {
    return (
      <div>
        {Object.entries(allConfigs).map(([filename, config]) => (
          <>
            <div key={filename}>
              <h1 className='mb-4'>{filename.split('-').join(' ')}</h1>
              {config.type === 'map' && <CdcMap config={{ ...config }} />}
              {config.type === 'chart' && <Chart config={{ ...config }} isEditor={false} />}
              {config.type === 'dashboard' && <Dashboard config={{ ...config }} />}
              {config.type === 'data-bite' && <CdcDataBite config={{ ...config }} />}
              {config.type === 'waffle-chart' && <CdcWaffleChart config={{ ...config }} />}
            </div>
            <hr style={{ margin: '2rem 0' }} />
          </>
        ))}
      </div>
    )
  }
}
