import { describe, expect, it } from 'vitest'
import { getMapLabels } from '../mapLabels'

describe('getMapLabels', () => {
  it('returns translated labels for Spanish locales', () => {
    expect(getMapLabels('es-MX')).toEqual({
      usTerritories: 'Territorios de los EE. UU.',
      freelyAssociatedStates: 'Estados libres asociados'
    })
  })

  it('falls back to English labels for unsupported or missing locales', () => {
    expect(getMapLabels('fr-FR')).toEqual({
      usTerritories: 'U.S. territories',
      freelyAssociatedStates: 'Freely associated states'
    })
    expect(getMapLabels()).toEqual({
      usTerritories: 'U.S. territories',
      freelyAssociatedStates: 'Freely associated states'
    })
  })
})
