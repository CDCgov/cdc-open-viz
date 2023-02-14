import React, { useEffect } from 'react'

// Context
import { useGlobalContext } from '@cdc/core/context/GlobalContext'
import { useConfigContext } from '@cdc/core/context/ConfigContext'

// Components - Local
import Tabs from './Tabs'
import TabData from './Tab.Data'
import TabVizSelect from './Tab.Viz.Select'
import TabVizConfigure from './Tab.Viz.Configure'


const Wizard = () => {
  const { globalActions, wizardActiveTab } = useGlobalContext()
  const { config } = useConfigContext()

/*  useEffect(() => {
    if (wizardActiveTab > -1) {
      globalActions.setWizardActiveTab(-1)
    }
  }, [ wizardActiveTab ])*/

  return (
    <Tabs startingTab={wizardActiveTab} fullsize>
      <Tabs.Content title="1. Import Data" className="cove-wizard__data-designer">
        <TabData/>
      </Tabs.Content>
      <Tabs.Content title="2. Choose Visualization Type" disableRule={!config.data && !config.formattedData}>
        <TabVizSelect/>
      </Tabs.Content>
      <Tabs.Content title="3. Configure" disableRule={null === config.data || !config.type}>
        <TabVizConfigure/>
      </Tabs.Content>
    </Tabs>

  )
}

export default Wizard
