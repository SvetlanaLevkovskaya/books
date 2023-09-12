import React, { Component, type ErrorInfo, type ReactNode } from 'react'
import { PageError } from 'widgets/page-error'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: undefined
  }

  public static getDerivedStateFromError (error: Error): State {
    return {
      hasError: true,
      error
    }
  }

  public componentDidCatch (error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render () {
    if (this.state.hasError) {
      return <PageError error={this.state.error?.message ?? ''}/>
    }

    return this.props.children
  }
}
