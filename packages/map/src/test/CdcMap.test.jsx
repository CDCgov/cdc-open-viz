import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import CdcMap from './../CdcMap';

/**
 * @jest-environment jsdom
 */
describe('United States Map', () => {
  it('Renders', () => {
    render(<CdcMap configUrl="./../../examples/example-city-state.json" isEditor={false} />);


    waitForElementToBeRemoved()
    screen.debug()

  });

});
