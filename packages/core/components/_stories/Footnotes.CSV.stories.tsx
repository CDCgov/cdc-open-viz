import { Meta, StoryObj } from '@storybook/react-vite'
import FootnotesStandAlone from '../Footnotes/FootnotesStandAlone'
import FootnotesConfig from '../../types/Footnotes'

const meta: Meta<typeof FootnotesStandAlone> = {
  title: 'Components/Organisms/Footnotes/CSV Features',
  component: FootnotesStandAlone,
  parameters: {
    docs: {
      description: {
        component: 'Demonstrates CSV parsing fixes: newlines and commas in quoted fields are preserved, and HTML tags render correctly.'
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof FootnotesStandAlone>

const csvDataWithNewlines = [
  {
    symbol: '*',
    text: 'This footnote has a newline\nbetween these two lines',
    order: 1
  },
  {
    symbol: '†',
    text: 'This footnote has multiple\nnewlines\ncreating three lines',
    order: 2
  },
  {
    symbol: '**',
    text: 'This footnote has a newline\nand continues on the next line',
    order: 3
  }
]

const csvDataWithCommas = [
  {
    symbol: '*',
    text: 'This footnote contains commas, which should be preserved, in the text',
    order: 1
  },
  {
    symbol: '†',
    text: 'Price: $1,234.56, which includes, all commas',
    order: 2
  },
  {
    symbol: '**',
    text: 'Multiple, commas, in, one, sentence',
    order: 3
  }
]

const csvDataWithBoth = [
  {
    symbol: '*',
    text: 'Line 1, with comma\nLine 2, also with comma',
    order: 1
  },
  {
    symbol: '†',
    text: 'First line, comma here\nSecond line, another comma\nThird line, final comma',
    order: 2
  },
  {
    symbol: '**',
    text: 'Start, comma\nMiddle, comma\nEnd, comma',
    order: 3
  }
]

const csvDataWithHTML = [
  {
    symbol: '*',
    text: 'This footnote has a <br> tag for line break',
    order: 1
  },
  {
    symbol: '†',
    text: 'This has <strong>bold text</strong> and <em>italic text</em>',
    order: 2
  },
  {
    symbol: '**',
    text: 'Multiple tags: <strong>bold</strong>, <em>italic</em>, and <br>line break',
    order: 3
  }
]

const csvDataWithNewlinesAndHTML = [
  {
    symbol: '*',
    text: 'Line 1, with comma\nLine 2 with <strong>bold</strong> text',
    order: 1
  },
  {
    symbol: '†',
    text: 'First line\nSecond line with <em>italic</em>\nThird line with <br>HTML tag',
    order: 2
  },
  {
    symbol: '**',
    text: 'Start, comma\nMiddle with <strong>bold, comma</strong>\nEnd',
    order: 3
  }
]

const csvDataComplex = [
  {
    symbol: '*',
    text: 'Complex footnote:\n- Line 1, with comma\n- Line 2 with <strong>bold</strong>\n- Line 3, final',
    order: 1
  },
  {
    symbol: '†',
    text: 'This demonstrates:\n1. Newlines (\\n) from CSV\n2. Commas, preserved\n3. HTML tags like <br> work\n4. All together, in one footnote',
    order: 2
  }
]

export const WithNewlines: Story = {
  args: {
    config: {
      dataKey: 'footnote-data-newlines',
      data: csvDataWithNewlines,
      dynamicFootnotes: {
        symbolColumn: 'symbol',
        textColumn: 'text',
        orderColumn: 'order'
      }
    }
  }
}

export const WithCommas: Story = {
  args: {
    config: {
      dataKey: 'footnote-data-commas',
      data: csvDataWithCommas,
      dynamicFootnotes: {
        symbolColumn: 'symbol',
        textColumn: 'text',
        orderColumn: 'order'
      }
    }
  }
}

export const WithNewlinesAndCommas: Story = {
  args: {
    config: {
      dataKey: 'footnote-data-both',
      data: csvDataWithBoth,
      dynamicFootnotes: {
        symbolColumn: 'symbol',
        textColumn: 'text',
        orderColumn: 'order'
      }
    }
  }
}

export const WithHTMLTags: Story = {
  args: {
    config: {
      dataKey: 'footnote-data-html',
      data: csvDataWithHTML,
      dynamicFootnotes: {
        symbolColumn: 'symbol',
        textColumn: 'text',
        orderColumn: 'order'
      }
    }
  }
}

export const WithNewlinesCommasAndHTML: Story = {
  args: {
    config: {
      dataKey: 'footnote-data-complex',
      data: csvDataWithNewlinesAndHTML,
      dynamicFootnotes: {
        symbolColumn: 'symbol',
        textColumn: 'text',
        orderColumn: 'order'
      }
    }
  }
}

export const ComplexExample: Story = {
  args: {
    config: {
      dataKey: 'footnote-data-complex-example',
      data: csvDataComplex,
      dynamicFootnotes: {
        symbolColumn: 'symbol',
        textColumn: 'text',
        orderColumn: 'order'
      }
    }
  }
}

export const StaticFootnotesWithHTML: Story = {
  args: {
    config: {
      staticFootnotes: [
        {
          symbol: '*',
          text: 'Static footnote with newline\nand HTML <strong>bold</strong> text'
        },
        {
          symbol: '†',
          text: 'Another static footnote with <em>italic</em> and <br>line break'
        },
        {
          text: 'Static footnote without symbol, with comma, and newline\nSecond line'
        }
      ]
    }
  }
}

export const MixedDynamicAndStatic: Story = {
  args: {
    config: {
      dataKey: 'footnote-data-mixed',
      data: csvDataWithNewlines.slice(0, 2),
      dynamicFootnotes: {
        symbolColumn: 'symbol',
        textColumn: 'text',
        orderColumn: 'order'
      },
      staticFootnotes: [
        {
          symbol: '**',
          text: 'Static footnote with <strong>HTML</strong> and newline\nSecond line'
        }
      ]
    }
  }
}

