import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import Alert from './Alert'

vi.mock('../../ui/Icon', () => ({
  default: () => null
}))

describe('Alert', () => {
  it('continues to sanitize string messages', () => {
    const { container } = render(
      <Alert message={'Safe text<script>alert("unsafe")</script>'} showCloseButton={false} />
    )

    expect(screen.getByText(/Safe text/)).toBeInTheDocument()
    expect(container.querySelector('script')).toBeNull()
  })

  it('renders interactive React content', () => {
    const onClick = vi.fn()

    render(
      <Alert
        message={
          <span>
            Missing field. <button onClick={onClick}>More information</button>
          </span>
        }
        showCloseButton={false}
      />
    )

    screen.getByRole('button', { name: 'More information' }).click()

    expect(onClick).toHaveBeenCalledOnce()
  })
})
