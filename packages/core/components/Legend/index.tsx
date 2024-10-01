import useDataVizClasses from '../Layout/components/ContentWrapper/useDataVizClasses'

const Legend = props => {
  const { config } = props

  if (!config) return
  const { legendClasses } = useDataVizClasses(config)

  return (
    <aside id='legend' className={legendClasses.aside.join(' ')} tabIndex={0} aria-label='legend' role='region'>
      <section className={legendClasses.section.join(' ') || ''}>
        <Legend.ResetButton />
      </section>
    </aside>
  )
}

const ResetButton = props => {
  const { config, resetLegendToggles, setAccessibleStatus } = props
  const { legendClasses } = useDataVizClasses(config)

  const handleReset = e => {
    e.preventDefault()
    resetLegendToggles()
    setAccessibleStatus('Legend has been reset, please reference the data table to see updated values.')
  }

  if (config.runtime.disabledAmt === 0) return <></>

  return (
    <button onClick={handleReset} className={legendClasses.resetButton.join(' ') || ''}>
      Reset
    </button>
  )
}

Legend.ResetButton = ResetButton

export default Legend
