import { useContext } from 'react'
import { StyleTreatmentSection, Tp5VisualSection } from '@cdc/core/components/panels/VisualPanel'
import { HeaderThemeSelector } from '@cdc/core/components/HeaderThemeSelector'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import ConfigContext from '../../../../../ConfigContext'

const VisualPanel = () => {
  const { config, updateConfig } = useContext(ConfigContext)
  const isTp5Style = config.contentEditor?.style === 'tp5'
  const updateField = updateFieldFactory(config, updateConfig, true)
  const styleTreatment = (config.visual as any)?.tp5Treatment ? 'tp5' : 'legacy'

  const handleStyleTreatmentChange = (value: string) => {
    const useTp5Treatment = value === 'tp5'
    updateConfig({
      ...config,
      visual: {
        ...config.visual,
        tp5Treatment: useTp5Treatment,
        border: useTp5Treatment ? false : config.visual?.border,
        borderColorTheme: useTp5Treatment ? false : config.visual?.borderColorTheme,
        accent: useTp5Treatment ? false : config.visual?.accent
      }
    })
  }

  return (
    <>
      {!isTp5Style && (
        <HeaderThemeSelector selectedTheme={config.theme} onThemeSelect={theme => updateConfig({ ...config, theme })} />
      )}
      {isTp5Style ? (
        <Tp5VisualSection config={config} updateField={updateField} />
      ) : (
        <StyleTreatmentSection
          styleTreatment={styleTreatment}
          onStyleTreatmentChange={handleStyleTreatmentChange}
          showStyleTreatment={false}
          border={config.visual?.border}
          borderColorTheme={config.visual?.borderColorTheme}
          accent={config.visual?.accent}
          background={config.visual?.background}
          hideBackgroundColor={config.visual?.hideBackgroundColor}
          showBackground
          showHideBackgroundColor
          updateField={updateField}
        />
      )}
    </>
  )
}

export default VisualPanel
