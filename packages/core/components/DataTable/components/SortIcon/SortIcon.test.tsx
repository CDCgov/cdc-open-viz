import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { SortIcon } from '.'

describe('SortIcon', () => {
  it('is decorative because the column header owns the sort interaction', () => {
    const { container } = render(<SortIcon ascending />)

    const sortIcon = container.querySelector('.sort-icon')

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(sortIcon).not.toHaveAttribute('role')
    expect(sortIcon).toHaveAttribute('aria-hidden', 'true')
  })
})
