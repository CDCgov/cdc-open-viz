import { useContext } from 'react'
import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'

import FootnotesEditor from '@cdc/core/components/EditorPanel/FootnotesEditor'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import type { Datasets } from '@cdc/core/types/DataSet'

import ConfigContext from '../../../../context'
import type { MapContext } from '../../../../types/MapContext'

type FootnotesSectionProps = {
  datasets?: Datasets
}

const FootnotesSection = ({ datasets }: FootnotesSectionProps) => {
  const { config, setConfig } = useContext<MapContext>(ConfigContext)
  const updateField = updateFieldFactory(config, setConfig)

  if (config.general.type === 'navigation') return null

  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>Footnotes</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <FootnotesEditor config={config} updateField={updateField} datasets={datasets} />
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default FootnotesSection
