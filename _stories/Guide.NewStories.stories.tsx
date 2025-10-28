import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Guides/New Stories',
  parameters: {
    docs: {
      page: () => (
        <div style={{ padding: '20px' }}>
          <h1>Creating New Stories</h1>
          <p>This guide will help you create effective Storybook stories for your components.</p>

          <h2>Story Structure</h2>
          <p>Stories follow a standard structure:</p>
          <pre><code>{`import type { Meta, StoryObj } from '@storybook/react'
import { MyComponent } from './MyComponent'

const meta: Meta<typeof MyComponent> = {
  title: 'Components/MyComponent',
  component: MyComponent,
  parameters: {
    layout: 'centered'
  }
}

export default meta

type Story = StoryObj<typeof MyComponent>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button'
  }
}`}</code></pre>

          <h2>Story Categories</h2>
          <p>Organize your stories using these categories:</p>
          <ul>
            <li><strong>Components/Pages/</strong> - Full page components</li>
            <li><strong>Components/Templates/</strong> - Layout templates</li>
            <li><strong>Components/Organisms/</strong> - Complex UI components</li>
            <li><strong>Components/Molecules/</strong> - Simple composite components</li>
            <li><strong>Components/Atoms/</strong> - Basic UI elements</li>
          </ul>

          <h2>Interactive Stories</h2>
          <p>Add interactions to test user behavior:</p>
          <pre><code>{`export const Interactive: Story = {
  args: {
    primary: true,
    label: 'Button'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()

    const button = canvas.getByRole('button')
    await user.click(button)
  }
}`}</code></pre>

          <h2>Best Practices</h2>
          <ul>
            <li>Create stories for all component variants and states</li>
            <li>Use descriptive story names that explain the use case</li>
            <li>Include accessibility testing with @storybook/addon-a11y</li>
            <li>Document component props using JSDoc comments</li>
            <li>Test edge cases and error states</li>
            <li>Use controls to make stories interactive</li>
          </ul>

          <h2>Testing with Stories</h2>
          <p>Stories can be used for testing:</p>
          <ul>
            <li><strong>Visual testing</strong> - Compare screenshots for regressions</li>
            <li><strong>Interaction testing</strong> - Test user flows with play functions</li>
            <li><strong>Accessibility testing</strong> - Ensure components meet WCAG guidelines</li>
            <li><strong>Unit testing</strong> - Test individual component behavior</li>
          </ul>
        </div>
      )
    }
  }
}

export default meta

export const Guide = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <h1>Creating New Stories</h1>
      <p>This guide will help you create effective Storybook stories for your components.</p>

      <h2>Story Structure</h2>
      <p>Stories follow a standard structure:</p>
      <pre><code>{`import type { Meta, StoryObj } from '@storybook/react'
import { MyComponent } from './MyComponent'

const meta: Meta<typeof MyComponent> = {
  title: 'Components/MyComponent',
  component: MyComponent,
  parameters: {
    layout: 'centered'
  }
}

export default meta

type Story = StoryObj<typeof MyComponent>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button'
  }
}`}</code></pre>

      <h2>Story Categories</h2>
      <p>Organize your stories using these categories:</p>
      <ul>
        <li><strong>Components/Pages/</strong> - Full page components</li>
        <li><strong>Components/Templates/</strong> - Layout templates</li>
        <li><strong>Components/Organisms/</strong> - Complex UI components</li>
        <li><strong>Components/Molecules/</strong> - Simple composite components</li>
        <li><strong>Components/Atoms/</strong> - Basic UI elements</li>
      </ul>

      <h2>Interactive Stories</h2>
      <p>Add interactions to test user behavior:</p>
      <pre><code>{`export const Interactive: Story = {
  args: {
    primary: true,
    label: 'Button'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()

    const button = canvas.getByRole('button')
    await user.click(button)
  }
}`}</code></pre>

      <h2>Best Practices</h2>
      <ul>
        <li>Create stories for all component variants and states</li>
        <li>Use descriptive story names that explain the use case</li>
        <li>Include accessibility testing with @storybook/addon-a11y</li>
        <li>Document component props using JSDoc comments</li>
        <li>Test edge cases and error states</li>
        <li>Use controls to make stories interactive</li>
      </ul>

      <h2>Testing with Stories</h2>
      <p>Stories can be used for testing:</p>
      <ul>
        <li><strong>Visual testing</strong> - Compare screenshots for regressions</li>
        <li><strong>Interaction testing</strong> - Test user flows with play functions</li>
        <li><strong>Accessibility testing</strong> - Ensure components meet WCAG guidelines</li>
        <li><strong>Unit testing</strong> - Test individual component behavior</li>
      </ul>
    </div>
  )
}