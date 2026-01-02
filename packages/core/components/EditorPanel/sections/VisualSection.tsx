import { ReactNode } from 'react'
import { CheckBox } from '../Inputs'
import { HeaderThemeSelector } from '../../HeaderThemeSelector'
import { UpdateFieldFunc } from '../../../types/UpdateFieldFunc'

export interface VisualSectionConfig {
  visual?: {
    border?: boolean
    borderColorTheme?: boolean
    accent?: boolean
    background?: boolean
    hideBackgroundColor?: boolean
  }
  theme?: string
}

export interface VisualSectionProps<TConfig extends VisualSectionConfig = VisualSectionConfig> {
  /** The visualization config object */
  config: TConfig

  /** Update function for individual fields */
  updateField: UpdateFieldFunc<TConfig>

  /** Update function for the entire config (used by HeaderThemeSelector) */
  updateConfig: (config: TConfig) => void

  /** Optional content to render before the standard checkboxes */
  beforeCheckboxes?: ReactNode

  /** Optional content to render after the standard checkboxes */
  afterCheckboxes?: ReactNode

  /** Position of HeaderThemeSelector. Defaults to 'before' */
  themeSelectorPosition?: 'before' | 'after' | 'none'

  /** Whether to show the border checkbox. Defaults to true */
  showBorder?: boolean

  /** Whether to show the borderColorTheme checkbox. Defaults to true */
  showBorderColorTheme?: boolean

  /** Whether to show the accent checkbox. Defaults to true */
  showAccent?: boolean

  /** Whether to show the background checkbox. Defaults to true */
  showBackground?: boolean

  /** Whether to show the hideBackgroundColor checkbox. Defaults to true */
  showHideBackgroundColor?: boolean
}

/**
 * Reusable Visual section component for EditorPanels
 *
 * Provides common visual configuration options including:
 * - Theme selection
 * - Border controls
 * - Background and accent styling
 *
 * Note: Must be wrapped in an Accordion.Section when used
 *
 * @example
 * ```tsx
 * <Accordion.Section title='Visual'>
 *   <VisualSection
 *     config={config}
 *     updateField={updateField}
 *     updateConfig={updateConfig}
 *     beforeCheckboxes={
 *       <Select
 *         value={config.fontSize}
 *         fieldName='fontSize'
 *         label='Font Size'
 *         updateField={updateField}
 *         options={['small', 'medium', 'large']}
 *       />
 *     }
 *   />
 * </Accordion.Section>
 * ```
 */
export const VisualSection = <TConfig extends VisualSectionConfig = VisualSectionConfig>({
  config,
  updateField,
  updateConfig,
  beforeCheckboxes,
  afterCheckboxes,
  themeSelectorPosition = 'before',
  showBorder = true,
  showBorderColorTheme = true,
  showAccent = true,
  showBackground = true,
  showHideBackgroundColor = true
}: VisualSectionProps<TConfig>) => {
  const visual = config.visual || {}
  const theme = config.theme

  const renderThemeSelector = () => {
    if (themeSelectorPosition === 'none') return null

    return (
      <HeaderThemeSelector
        selectedTheme={theme}
        onThemeSelect={theme => updateConfig({ ...config, theme } as TConfig)}
        label='Theme'
      />
    )
  }

  const renderCheckboxes = () => (
    <div className='checkbox-group'>
      {showBorder && (
        <CheckBox
          value={visual.border}
          section='visual'
          fieldName='border'
          label='Display Border'
          updateField={updateField}
        />
      )}
      {showBorderColorTheme && (
        <CheckBox
          value={visual.borderColorTheme}
          section='visual'
          fieldName='borderColorTheme'
          label='Use Border Color Theme'
          updateField={updateField}
        />
      )}
      {showAccent && (
        <CheckBox
          value={visual.accent}
          section='visual'
          fieldName='accent'
          label='Use Accent Style'
          updateField={updateField}
        />
      )}
      {showBackground && (
        <CheckBox
          value={visual.background}
          section='visual'
          fieldName='background'
          label='Use Theme Background Color'
          updateField={updateField}
        />
      )}
      {showHideBackgroundColor && (
        <CheckBox
          value={visual.hideBackgroundColor}
          section='visual'
          fieldName='hideBackgroundColor'
          label='Hide Background Color'
          updateField={updateField}
        />
      )}
    </div>
  )

  return (
    <>
      {beforeCheckboxes}
      {themeSelectorPosition === 'before' && renderThemeSelector()}
      {renderCheckboxes()}
      {themeSelectorPosition === 'after' && renderThemeSelector()}
      {afterCheckboxes}
    </>
  )
}
