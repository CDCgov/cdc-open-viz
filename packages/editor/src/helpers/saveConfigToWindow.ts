import { formatConfigBeforeSave } from '@cdc/core/helpers/formatConfigBeforeSave'

export const saveConfigToWindow = newTempConfig => {
  if (null !== newTempConfig) {
    // Remove runtime/unnecessary items from config before saving to WCMS, performance optimization
    let strippedConfig = formatConfigBeforeSave(newTempConfig)

    const parsedData = JSON.stringify(strippedConfig)
    // Emit the data in a regular JS event so it can be consumed by anything.
    const event = new CustomEvent('updateVizConfig', { detail: parsedData, bubbles: true })
    window.dispatchEvent(event)
  }
}
