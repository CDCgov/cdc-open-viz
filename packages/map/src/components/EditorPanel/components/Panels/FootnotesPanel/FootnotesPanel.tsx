import { useContext } from 'react'
import PanelSection from '@cdc/core/components/panels/PanelSection'
import FootnotesEditor from '@cdc/core/components/EditorPanel/FootnotesEditor'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import type { Datasets } from '@cdc/core/types/DataSet'

import ConfigContext from '../../../../../context'
import type { MapContext } from '../../../../../types/MapContext'

type FootnotesPanelProps = {
  datasets?: Datasets
}

const FootnotesPanel = ({ datasets }: FootnotesPanelProps) => {
  const { config, setConfig } = useContext<MapContext>(ConfigContext)
  const updateField = updateFieldFactory(config, setConfig)

  if (config.general.type === 'navigation') return null

  return (
    <PanelSection title='Footnotes'>
      <FootnotesEditor config={config} updateField={updateField} datasets={datasets} />
    </PanelSection>
  )
}

export default FootnotesPanel
