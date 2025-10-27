import type { Meta, StoryObj } from '@storybook/react'
import HeaderThemeSelector from '../HeaderThemeSelector'

const meta: Meta<typeof HeaderThemeSelector> = {
    title: 'Components/Atoms/HeaderThemeSelector',
    component: HeaderThemeSelector,
    parameters: {
        docs: {
            description: {
                component: 'A reusable component for selecting header themes across different visualization types.'
            }
        }
    },
    argTypes: {
        onThemeSelect: { action: 'theme-selected' },
        selectedTheme: {
            control: 'select',
            options: [
                'theme-blue',
                'theme-purple',
                'theme-brown',
                'theme-teal',
                'theme-pink',
                'theme-orange',
                'theme-slate',
                'theme-indigo',
                'theme-cyan',
                'theme-green',
                'theme-amber'
            ]
        }
    }
} satisfies Meta<typeof HeaderThemeSelector>

export default meta
type Story = StoryObj<typeof meta>

const defaultHeaderColors = [
    'theme-blue',
    'theme-purple',
    'theme-brown',
    'theme-teal',
    'theme-pink',
    'theme-orange',
    'theme-slate',
    'theme-indigo',
    'theme-cyan',
    'theme-green',
    'theme-amber'
]

export const Default: Story = {
    args: {
        onThemeSelect: (theme: string) => console.log('Selected theme:', theme)
    }
}

export const WithSelectedTheme: Story = {
    args: {
        selectedTheme: 'theme-purple',
        onThemeSelect: (theme: string) => console.log('Selected theme:', theme)
    }
}

export const CustomLabel: Story = {
    args: {
        label: 'Choose Color Theme',
        selectedTheme: 'theme-teal',
        onThemeSelect: (theme: string) => console.log('Selected theme:', theme)
    }
}

export const CustomColors: Story = {
    args: {
        headerColors: ['theme-blue', 'theme-purple', 'theme-orange', 'theme-green'],
        selectedTheme: 'theme-blue',
        onThemeSelect: (theme: string) => console.log('Selected theme:', theme)
    }
}
