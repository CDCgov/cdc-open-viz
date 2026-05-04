import { CheckBox } from '../Inputs'
import { UpdateFieldFunc } from '../../../types/UpdateFieldFunc'
import { SharedTp5VisualOptions } from '../../../types/SharedTp5VisualOptions'

export interface Tp5VisualSectionConfig {
  visual?: SharedTp5VisualOptions
}

export interface Tp5VisualSectionProps<TConfig extends Tp5VisualSectionConfig = Tp5VisualSectionConfig> {
  config: TConfig
  updateField: UpdateFieldFunc<TConfig>
}

export const Tp5VisualSection = <TConfig extends Tp5VisualSectionConfig = Tp5VisualSectionConfig>({
  config,
  updateField
}: Tp5VisualSectionProps<TConfig>) => {
  return (
    <CheckBox
      value={config.visual?.whiteBackground}
      section='visual'
      fieldName='whiteBackground'
      label='Use White Background Style'
      updateField={updateField}
    />
  )
}

export default Tp5VisualSection
