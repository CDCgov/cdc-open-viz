import HeatMapValueAxisControls from './HeatMapValueAxisControls'
import StandardValueAxisControls from './StandardValueAxisControls'
import ValueAxisDomainControls from './ValueAxisDomainControls'
import ValueAxisNumberFormatting from './ValueAxisNumberFormatting'
import { useValueAxisControlsContext } from './ValueAxisControlsContext'

const ValueAxisControls = () => {
  const { model } = useValueAxisControlsContext()
  return (
    <>
      <HeatMapValueAxisControls />
      <StandardValueAxisControls />
      <ValueAxisNumberFormatting />
      <ValueAxisDomainControls />
      {model.anchorEditor}
    </>
  )
}

export default ValueAxisControls
