import React, { useEffect } from 'react'

// Context
import { useGlobalContext } from '@cdc/core/context/GlobalContext'
import { useConfigContext } from '@cdc/core/context/ConfigContext'

// Components - Local
import DataImport from './DataImport'
import ChooseTab from './ChooseTab'
import ConfigureTab from './ConfigureTab'
import Tabs from './Tabs'


const Wizard = () => {
  const { globalContext, globalActions } = useGlobalContext()
  const { config } = useConfigContext()

  useEffect(() => {
    if (globalContext.wizardActiveTab > -1) {
      globalActions.setGlobalContext(state => ({ ...state, wizardActiveTab: -1 }))
    }
  }, [ globalContext.wizardActiveTab ])


  return (
    <Tabs startingTab={globalContext.wizardActiveTab} fullsize>
      <Tabs.Content title="1. Import Data" className="cove-wizard__data-designer">
        <DataImport/>
      </Tabs.Content>
      <Tabs.Content title="2. Choose Visualization Type" className="choose-type" disableRule={!config.data && !config.formattedData}>
        <ChooseTab/>
      </Tabs.Content>
      <Tabs.Content title="3. Configure" className="configure" disableRule={null === config.data || !config.type}>
        <ConfigureTab/>
      </Tabs.Content>
    </Tabs>

  )
}

export default Wizard
