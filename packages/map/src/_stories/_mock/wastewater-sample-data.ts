/**
 * Minimal inline sample data for wastewater map smoke tests.
 * Used to avoid external network requests (dataUrl) in CI.
 *
 * Covers all US states/DC with representative activity level values so maps
 * render with colored regions without fetching from cdc.gov.
 */

const STATES_WITH_LEVELS: [string, string][] = [
  ['Alabama', 'Minimal'],
  ['Alaska', 'Low'],
  ['Arizona', 'Moderate'],
  ['Arkansas', 'High'],
  ['California', 'Very High'],
  ['Colorado', 'Minimal'],
  ['Connecticut', 'Low'],
  ['Delaware', 'Moderate'],
  ['Florida', 'High'],
  ['Georgia', 'Very High'],
  ['Hawaii', 'Minimal'],
  ['Idaho', 'Low'],
  ['Illinois', 'Moderate'],
  ['Indiana', 'High'],
  ['Iowa', 'Very High'],
  ['Kansas', 'Minimal'],
  ['Kentucky', 'Low'],
  ['Louisiana', 'Moderate'],
  ['Maine', 'High'],
  ['Maryland', 'Very High'],
  ['Massachusetts', 'Minimal'],
  ['Michigan', 'Low'],
  ['Minnesota', 'Moderate'],
  ['Mississippi', 'High'],
  ['Missouri', 'Very High'],
  ['Montana', 'Minimal'],
  ['Nebraska', 'Low'],
  ['Nevada', 'Moderate'],
  ['New Hampshire', 'High'],
  ['New Jersey', 'Very High'],
  ['New Mexico', 'Minimal'],
  ['New York', 'Low'],
  ['North Carolina', 'Moderate'],
  ['North Dakota', 'High'],
  ['Ohio', 'Very High'],
  ['Oklahoma', 'Minimal'],
  ['Oregon', 'Low'],
  ['Pennsylvania', 'Moderate'],
  ['Rhode Island', 'High'],
  ['South Carolina', 'Very High'],
  ['South Dakota', 'Minimal'],
  ['Tennessee', 'Low'],
  ['Texas', 'Moderate'],
  ['Utah', 'High'],
  ['Vermont', 'Very High'],
  ['Virginia', 'Minimal'],
  ['Washington', 'Low'],
  ['West Virginia', 'Moderate'],
  ['Wisconsin', 'High'],
  ['Wyoming', 'Very High'],
  ['District of Columbia', 'Minimal']
]

/** Wastewater sample data for standard (non-small-multiples) map stories */
export const wastewaterSampleData = STATES_WITH_LEVELS.map(([State, activity_level_label], i) => ({
  State,
  activity_level_label,
  num_sites: i + 1,
  hatch: ''
}))

/** Wastewater sample data for small-multiples map stories (one row per state × pathogen) */
const PATHOGENS = ['COVID-19', 'Influenza A', 'RSV']

export const wastewaterSmallMultiplesSampleData = STATES_WITH_LEVELS.flatMap(
  ([State, activity_level_label], i) =>
    PATHOGENS.map(pathogen => ({
      State,
      activity_level_label,
      num_sites: i + 1,
      hatch: '',
      pathogen
    }))
)
