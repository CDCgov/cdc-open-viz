import { useContext } from 'react'
import FootnotesEditor from '@cdc/core/components/EditorPanel/FootnotesEditor'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import type { Datasets } from '@cdc/core/types/DataSet'
import ConfigContext from '../../../../../ConfigContext'

type FootnotesPanelProps = { datasets?: Datasets }

const FootnotesPanel = ({ datasets }: FootnotesPanelProps) => {
  const { config, updateConfig } = useContext(ConfigContext)
  const updateField = updateFieldFactory(config, updateConfig, true)
  return <FootnotesEditor config={config} updateField={updateField} datasets={datasets} />
}

export default FootnotesPanel
