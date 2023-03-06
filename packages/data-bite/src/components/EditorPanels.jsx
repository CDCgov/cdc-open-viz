import React, { useEffect, useState } from 'react'

// Store
import { useConfigStoreContext } from '@cdc/core/components/hoc/ConfigProxy'

// Helpers
import CoveHelper from '@cdc/core/helpers/cove'

// Components - Core
import Accordion from '@cdc/core/components/ui/Accordion'
import PanelGlobal from '@cdc/core/components/editor/Panel.Global.jsx'
import InputCheckbox from '@cdc/core/components/input/InputCheckbox'
import InputSelect from '@cdc/core/components/input/InputSelect'
import InputText from '@cdc/core/components/input/InputText'
import PanelComponentFilters from '@cdc/core/components/editor/Panel.Component.Filters'
import SectionWrapper from '@cdc/core/components/ui/SectionWrapper'

// Components - Local
import PanelDynamicImages from './Panel.DynamicImages'

// Constants
import { BITE_LOCATIONS, DATA_FUNCTIONS, IMAGE_POSITIONS } from '../data/consts'
import useDataStore from '@cdc/core/stores/data/dataSlice'

const EditorPanels = () => {
  const { config, setMissingRequiredSections } = useConfigStoreContext()
  const { data } = useDataStore()

  /** PARENT CONFIG UPDATE SECTION ---------------------------------------------------------------- */
  /*const [ tempConfig, setTempConfig ] = useState(config)

  useEffect(() => {
    // Remove any newViz entries and update tempConfig cache to send to parent, if one exists
    if (!isConfigEqual(config, tempConfig)) {
      let tempConfig = { ...config }
      delete tempConfig.newViz
      setTempConfig(tempConfig)
    }
  }, [ config, tempConfig ])

  useEffect(() => {
    // Pass tempConfig settings back up to parent, if one exists
    if (setParentConfig) setParentConfig(tempConfig)
  }, [ tempConfig, setParentConfig ])*/


  /** Required Sections -------------------------------------------------------------------------- */
  const requiredSections = [
    config.title,
    config.dataColumn,
    config.dataFunction
  ]

  useEffect(() => {
    const validateSections = setTimeout(() => {
      if (requiredSections && config)
        setMissingRequiredSections(!requiredSections.every(isValid => !!isValid === true))
    }, 500)
    return clearTimeout(validateSections)
  }, [ config ])


  /** Panels ------------------------------------------------------------------------------------- */
  const panelGeneral = (
    <Accordion.Section label="General">
      <InputText label="Title" configField="title" placeholder="Data bite Title"/>

      <InputText label="Message" configField="biteBody" type="textarea" tooltip={<>
        <p>
          Enter the message text for the visualization. <br/>
          <br/>
          <small>The following HTML tags are supported:<br/> strong, em, sup, and sub.</small>
        </p>
      </>}/>

      <InputText label="Subtext/Citation" configField="subtext" placeholder="Data bite Subtext or Citation" tooltip={<>
        <p>
          Enter supporting text to display below the data visualization, if applicable. <br/>
          <br/>
          <small>The following HTML tags are supported: strong, em, sup, and sub.</small>
        </p>
      </>}/>

    </Accordion.Section>
  )
  const panelData = (
    <Accordion.Section label="Data" warnIf={(!config.dataColumn || !config.dataFunction)}>
      <div className="cove-grid cove-grid--gap--2">
        <div className="cove-grid__col--6">
          <InputSelect label="Data Column" options={CoveHelper.Data.getDataColumns(data)} configField="dataColumn" initialDisabled required/>
        </div>
        <div className="cove-grid__col--6">
          <InputSelect label="Data Function" options={DATA_FUNCTIONS} configField="dataFunction" initialDisabled required/>
        </div>
      </div>

      <SectionWrapper label="Number Formatting">
        <div className="cove-grid cove-grid--gap--2">
          <div className="cove-grid__col--4">
            <InputText label="Prefix" configField={[ 'dataFormat', 'prefix' ]}/>
          </div>
          <div className="cove-grid__col--4">
            <InputText label="Suffix" configField={[ 'dataFormat', 'suffix' ]}/>
          </div>
          <div className="cove-grid__col--4">
            <InputText label="Round" configField={[ 'dataFormat', 'roundToPlace' ]} type="number" min="0" max="99"/>
          </div>
        </div>
        <InputCheckbox label="Add commas" size="small" configField={[ 'dataFormat', 'commas' ]}/>
      </SectionWrapper>
    </Accordion.Section>
  )

  const panelFilters = (
    <Accordion.Section label="Filters">
      <PanelComponentFilters/>
    </Accordion.Section>
  )

  const panelVisual = (
    <Accordion.Section label="Visual">
      <InputSelect label="Bite Style" options={BITE_LOCATIONS} configField="biteStyle" initialDisabled/>
      {[ 'graphic' ].includes(config.biteStyle) &&
        <InputSelect label="Graphic Position" options={IMAGE_POSITIONS} configField="bitePosition" initialDisabled/>
      }
      <InputText label="Bite Font Size" configField="biteFontSize" type="number" min="16" max="65"/>
      <InputSelect label="Overall Font Size" options={[ 'small', 'medium', 'large' ]} configField="fontSize"/>
    </Accordion.Section>
  )

  const panelImages = (
    <Accordion.Section
      label={`Image${[ 'dynamic' ].includes(config.imageData.display) ? 's' : ''}`}
      showIf={[ 'title', 'body' ].includes(config.biteStyle)}
    >
      <InputSelect label="Image Display Type" options={[ 'none', 'static', 'dynamic' ]} configField={[ 'imageData', 'display' ]} initialDisabled/>

      {[ 'static', 'dynamic' ].includes(config.imageData.display) &&
        <>
          <InputSelect label="Image Position" options={IMAGE_POSITIONS} configField="bitePosition" initialDisabled/>
        </>
      }
      {[ 'static' ].includes(config.imageData.display) &&
        <>
          <InputText label="Image URL" configField={[ 'imageData', 'url' ]}/>
          <InputText label="Alt Text" configField={[ 'imageData', 'alt' ]}/>
        </>
      }

      {[ 'dynamic' ].includes(config.imageData.display) &&
        <PanelDynamicImages/>
      }
    </Accordion.Section>
  )

  return <>
    <Accordion>
      {panelGeneral}
      {panelData}
      {panelFilters}
      {panelVisual}
      {panelImages}
      {PanelGlobal}
    </Accordion>
  </>
}

export default EditorPanels
