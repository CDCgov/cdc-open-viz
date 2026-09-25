import { type ChangeEvent, type FocusEvent, type InputHTMLAttributes, useContext } from 'react'
import { isCoveDeveloperMode } from '@cdc/core/helpers/queryStringUtils'
import Alert from '@cdc/core/components/Alert'
import { Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import ConfigContext from '../../../../ConfigContext'
import { clampBarRaceMaxBars, DEFAULT_BAR_RACE_MAX_BARS, getBarRaceEligibility } from '../../../BarChartRace/helpers'
import { getLineRaceEligibility } from '../../../LineChartRace/helpers'
import { clampRaceSecondsPerFrame, RACE_SECONDS_PER_FRAME_OPTIONS } from '../../../raceTiming'
import { useEditorPanelContext } from '../../EditorPanelContext'

const formatSecondsPerStep = (seconds: number) =>
  `${Number(seconds.toFixed(1))} ${seconds === 1 ? 'second' : 'seconds'}`

const RacingControls = () => {
  const { config, raceTiming, transformedData = [], updateConfig } = useContext(ConfigContext)
  const { updateField } = useEditorPanelContext()
  const applyConfig = updateConfig!
  const applyField = updateField!
  const { visualizationType, visualizationSubType } = config
  const supportsRacing = visualizationType === 'Bar' || visualizationType === 'Line'
  const candidateConfig = {
    ...config,
    visualizationSubType: 'racing' as const,
    ...(visualizationType === 'Bar'
      ? { orientation: 'horizontal' as const, isLollipopChart: false, barStyle: 'flat' as const }
      : {})
  }
  const candidateEligibility =
    visualizationType === 'Line'
      ? getLineRaceEligibility(candidateConfig, transformedData)
      : getBarRaceEligibility(candidateConfig, transformedData)
  const savedEligibility =
    visualizationType === 'Line'
      ? getLineRaceEligibility(config, transformedData)
      : getBarRaceEligibility(config, transformedData)
  const racingOptionAvailable = supportsRacing && (candidateEligibility.eligible || visualizationSubType === 'racing')
  const raceConfigKey = visualizationType === 'Bar' ? 'barRace' : 'lineRace'
  const secondsPerFrame = clampRaceSecondsPerFrame(config[raceConfigKey]?.secondsPerFrame)

  const enablePlayback = () => {
    if (visualizationType === 'Line') {
      applyConfig({
        ...config,
        visualizationSubType: 'racing',
        animate: false,
        lineRace: { ...config.lineRace, secondsPerFrame }
      })
      return
    }

    const enteringFromVertical = config.orientation !== 'horizontal'
    applyConfig({
      ...config,
      visualizationSubType: 'racing',
      orientation: 'horizontal',
      barStyle: 'flat',
      isLollipopChart: false,
      animate: false,
      labels: false,
      xAxis: enteringFromVertical
        ? { ...config.xAxis, anchors: config.yAxis?.anchors ?? [], hideAxis: true, hideTicks: true }
        : config.xAxis,
      yAxis: enteringFromVertical
        ? {
            ...config.yAxis,
            anchors: config.xAxis?.anchors ?? [],
            hideAxis: false,
            hideTicks: false,
            labelPlacement: config.yAxis?.labelPlacement || 'On Date/Category Axis'
          }
        : config.yAxis,
      barRace: {
        ...config.barRace,
        maxBars: clampBarRaceMaxBars(
          config.barRace?.maxBars ?? DEFAULT_BAR_RACE_MAX_BARS,
          'competitorCount' in candidateEligibility ? candidateEligibility.competitorCount : 0
        ),
        secondsPerFrame
      }
    })
  }

  const handleSubtypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === 'racing') {
      enablePlayback()
      return
    }
    applyConfig({ ...config, visualizationSubType: event.target.value })
  }

  const subtypeOptions = [
    { label: 'Standard', value: 'regular' },
    ...(visualizationType !== 'Line' ? [{ label: 'Stacked', value: 'stacked' }] : []),
    ...(racingOptionAvailable ? [{ label: 'Racing', value: 'racing' }] : [])
  ]

  return (
    <>
      <Select
        value={visualizationSubType || 'regular'}
        fieldName='visualizationSubType'
        label='Chart Subtype'
        updateField={applyField}
        onChange={supportsRacing ? handleSubtypeChange : undefined}
        options={subtypeOptions}
      />
      {visualizationSubType === 'racing' && visualizationType === 'Bar' && 'competitorCount' in savedEligibility && (
        <TextField
          type='number'
          value={clampBarRaceMaxBars(
            config.barRace?.maxBars ?? DEFAULT_BAR_RACE_MAX_BARS,
            savedEligibility.competitorCount
          )}
          section='barRace'
          fieldName='maxBars'
          label='Maximum Bars'
          updateField={applyField}
          min={1}
          max={Math.max(1, savedEligibility.competitorCount)}
          {...({
            onBlur: (event: FocusEvent<HTMLInputElement>) =>
              applyField(
                'barRace',
                null,
                'maxBars',
                clampBarRaceMaxBars(event.target.value, savedEligibility.competitorCount)
              )
          } as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {visualizationSubType === 'racing' && supportsRacing && (
        <>
          {!savedEligibility.eligible && (
            <Alert
              type='info'
              message={`Racing mode cannot render this configuration. ${savedEligibility.reason} A regular ${
                visualizationType === 'Bar' ? 'horizontal bar' : 'Line'
              } chart is shown instead.`}
              showCloseButton={false}
            />
          )}
          <label style={{ display: 'block', width: '100%' }}>
            <span className='edit-label column-heading'>
              Seconds per Time Step: <strong>{formatSecondsPerStep(secondsPerFrame)}</strong>
            </span>
            <input
              type='range'
              aria-label='Seconds per Time Step'
              aria-valuetext={`${formatSecondsPerStep(secondsPerFrame)} per time step`}
              min={RACE_SECONDS_PER_FRAME_OPTIONS[0]}
              max={RACE_SECONDS_PER_FRAME_OPTIONS[RACE_SECONDS_PER_FRAME_OPTIONS.length - 1]}
              step={RACE_SECONDS_PER_FRAME_OPTIONS[1] - RACE_SECONDS_PER_FRAME_OPTIONS[0]}
              value={secondsPerFrame}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                applyField(raceConfigKey, null, 'secondsPerFrame', Number(event.target.value))
              }
              style={{ display: 'block', width: '100%' }}
            />
            <span
              aria-hidden='true'
              style={{ display: 'flex', fontSize: '0.75rem', justifyContent: 'space-between', lineHeight: 1.5 }}
            >
              {RACE_SECONDS_PER_FRAME_OPTIONS.map(value => (
                <span key={value}>{value}s</span>
              ))}
            </span>
          </label>
          {isCoveDeveloperMode() && raceTiming && (
            <p data-testid={`${visualizationType.toLowerCase()}-race-playback-timing`} role='status' aria-live='polite'>
              {raceTiming.isPlaying ? 'Playing' : 'Paused'} · {raceTiming.frameKey} ·{' '}
              {raceTiming.elapsedSeconds.toFixed(1)}s / {raceTiming.totalSeconds.toFixed(1)}s
            </p>
          )}
        </>
      )}
    </>
  )
}

export default RacingControls
