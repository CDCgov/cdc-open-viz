import { render, screen, waitForElementToBeRemoved, queryByText } from '@testing-library/react';
import CdcMap from './../CdcMap';

describe('United States Map', () => {
  it('Renders', async () => {
    render(<CdcMap configUrl="./../../examples/example-city-state.json" isEditor={false} />);
    const loadingText = screen.getByText("Content is loading.");

    await waitForElementToBeRemoved(() => queryByText(loadingText))

    expect(loadingText).toBeInTheDocument()

    screen.debug()
  });
});

describe('World Maps', () => {

  it('Renders', async () => {
    render(<CdcMap configUrl="./../../examples/example-city-state.json" isEditor={false} />);
    const loadingText = screen.getByText("Content is loading.");
    expect(loadingText).toBeInTheDocument()
  })
})

describe('County Maps', () => {
  it('Renders', async () => {
    render(<CdcMap configUrl="./../../examples/example-city-state.json" isEditor={false} />);
    const loadingText = screen.getByText("Content is loading.");
    expect(loadingText).toBeInTheDocument()
  })
})
