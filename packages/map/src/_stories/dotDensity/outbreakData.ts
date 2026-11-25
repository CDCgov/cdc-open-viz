/** Invented counts for one shared simulated reporting period. Not surveillance data. */
export const diseaseSeries = [
  { id: 'measles', label: 'Measles', color: '#0072B2' },
  { id: 'salmonellosis', label: 'Salmonellosis', color: '#D55E00' },
  { id: 'pertussis', label: 'Pertussis', color: '#8B4789' }
] as const

// County FIPS -> [measles, salmonellosis, pertussis]. Deliberately different spatial patterns.
export const outbreakCounts: Record<string, readonly [number, number, number]> = {
  '04001': [30, 10, 15],
  '04003': [0, 125, 40],
  '04005': [85, 15, 35],
  '04007': [8, 20, 25],
  '04009': [0, 35, 10],
  '04011': [0, 10, 0],
  '04012': [0, 65, 5],
  '04013': [145, 185, 480],
  '04015': [32, 25, 20],
  '04017': [110, 5, 30],
  '04019': [15, 240, 220],
  '04021': [25, 95, 175],
  '04023': [0, 110, 15],
  '04025': [60, 20, 45],
  '04027': [0, 190, 30]
}
