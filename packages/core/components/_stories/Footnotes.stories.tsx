import { Meta, StoryObj } from '@storybook/react-vite'
import Footnotes from '../Footnotes'

const meta: Meta<typeof Footnotes> = {
  title: 'Components/Organisms/Footnotes',
  component: Footnotes,
  parameters: {
    docs: {
      description: {
        component: 'Renders footnotes with support for symbols, HTML tags, and newlines. See "CSV Features" stories for dynamic footnotes from CSV data.'
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof Footnotes>

export const Primary: Story = {
  args: {
    footnotes: [{ symbol: '*', text: 'This is a footnote' }, { symbol: '†', text: 'This is another footnote' }, { text: 'This is a third footnote' }]
  }
}

export const WithHTMLTags: Story = {
  args: {
    footnotes: [
      { symbol: '*', text: 'This footnote has a <br> tag for line break' },
      { symbol: '†', text: 'This has <strong>bold text</strong> and <em>italic text</em>' },
      { symbol: '**', text: 'Multiple tags: <strong>bold</strong>, <em>italic</em>, and <br>line break' }
    ]
  }
}

export const WithNewlines: Story = {
  args: {
    footnotes: [
      { symbol: '*', text: 'This footnote has a newline\nbetween these two lines' },
      { symbol: '†', text: 'This footnote has multiple\nnewlines\ncreating three lines' },
      { symbol: '**', text: 'This footnote has a newline\nand continues on the next line' }
    ]
  }
}

export const WithNewlinesAndHTML: Story = {
  args: {
    footnotes: [
      { symbol: '*', text: 'Line 1\nLine 2 with <strong>bold</strong> text' },
      { symbol: '†', text: 'First line\nSecond line with <em>italic</em>\nThird line with <br>HTML tag' },
      { symbol: '**', text: 'Start\nMiddle with <strong>bold</strong>\nEnd' }
    ]
  }
}
