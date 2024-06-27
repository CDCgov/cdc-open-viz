import { render, screen, fireEvent } from '@testing-library/react'
import CdcMap from '../CdcMap'
import usaConfig from '../../examples/example-city-state.json'

// Example: City State Map
describe('United States Map', () => {
  it.skip('loads', async () => {
    render(<CdcMap config={usaConfig} />)
    // screen.debug()
  })

  it.skip('accepts title changes', async () => {
    render(<CdcMap config={usaConfig} isEditor />)
    const titleInput = screen.getByTestId('title-input')
    expect(titleInput.value).toBe('Example Data Map with Cities')
    fireEvent.change(titleInput, { target: { value: 'My New Title' } })
    expect(titleInput.value).toBe('My New Title')
  })
})
