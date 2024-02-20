import { updateFieldFactory } from '../updateFieldFactory'

describe('updateFieldFactory', () => {
  it('should update the top level field when section and subsection are null', () => {
    const config = { filterColumn: 'oldValue', filterValue: 'oldValue' }
    let updatedConfig = {}
    const updateConfig = newConfig => {
      updatedConfig = newConfig
    }

    const updateField = updateFieldFactory(config, updateConfig)
    updateField(null, null, 'filterColumn', 'newValue')

    expect(updatedConfig).toEqual({ filterColumn: 'newValue', filterValue: '' })
  })

  it('should update the second level when section is not null and subsection is null', () => {
    const config = { section: { filterColumn: 'oldValue', filterValue: 'oldValue' } }
    let updatedConfig = {}
    const updateConfig = newConfig => {
      updatedConfig = newConfig
    }

    const updateField = updateFieldFactory(config, updateConfig)
    updateField('section', null, 'filterColumn', 'newValue')

    expect(updatedConfig).toEqual({ section: { filterColumn: 'newValue', filterValue: 'oldValue' } })
  })

  it('should add to the second level when section is an array and subsection is null', () => {
    const config = { section: ['oldValue'] }
    let updatedConfig = {}
    const updateConfig = newConfig => {
      updatedConfig = newConfig
    }

    const updateField = updateFieldFactory(config, updateConfig)
    updateField('section', null, 'thisParamDoesNotMatter', 'newValue')

    expect(updatedConfig).toEqual({ section: ['oldValue', 'newValue'] })
  })

  it('should update the third level when section and subsection are not null', () => {
    const config = { section: { subsection: { filterColumn: 'oldValue', filterValue: 'oldValue' } } }
    let updatedConfig = {}
    const updateConfig = newConfig => {
      updatedConfig = newConfig
    }

    const updateField = updateFieldFactory(config, updateConfig)
    updateField('section', 'subsection', 'filterColumn', 'newValue')

    expect(updatedConfig).toEqual({ section: { subsection: { filterColumn: 'newValue', filterValue: 'oldValue' } } })
  })

  it('should update the third level when section is an array', () => {
    const config = { section: [{ filterColumn: 'oldValue', filterValue: 'oldValue' }] }
    let updatedConfig = {}
    const updateConfig = newConfig => {
      updatedConfig = newConfig
    }

    const updateField = updateFieldFactory(config, updateConfig)
    updateField('section', 0, 'filterColumn', 'newValue')

    expect(updatedConfig).toEqual({ section: [{ filterColumn: 'newValue', filterValue: 'oldValue' }] })
  })

  it('should update the second level when newValue is a string and legacy is true', () => {
    // test for legacy use case
    // puts the newValue in two places for some reason
    const config = { section: { subsection: 'oldValue' } }
    let updatedConfig = {}
    const updateConfig = newConfig => {
      updatedConfig = newConfig
    }

    const updateField = updateFieldFactory(config, updateConfig, true)
    updateField('section', 'subsection', 'filterColumn', 'newValue')

    expect(updatedConfig).toEqual({ section: { subsection: 'newValue', filterColumn: 'newValue' } })

    updateField('section', null, 'filterColumn', 'newValue2')
    expect(updatedConfig).toEqual({ section: { subsection: 'oldValue', filterColumn: 'newValue2' } })

    updateField('section', 'subsection', null, 'newValue2')
    expect(updatedConfig).toEqual({ section: { subsection: 'newValue2', null: 'newValue2' } })
  })
})
