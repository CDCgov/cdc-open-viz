import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error('ErrorBoundary caught an error:', error)
    console.error('Error info:', errorInfo)
    console.error('Error stack:', error.stack)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.component) {
        return <h1>Something went wrong with component {this.props.component}.</h1>
      }
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
