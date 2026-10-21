import React, { Component, ReactNode, Suspense } from 'react';

interface ErrorBoundaryProps {
  fallbackTitle: string;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class RemoteErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('[ModuleFederation Error]: Remote failed to render', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '24px', border: '1px solid #f85149', borderRadius: '8px', background: '#161b22', color: '#c9d1d9' }}>
          <h4 style={{ color: '#f85149', margin: '0 0 8px 0' }}>⚠️ Remote Module Unavailable: {this.props.fallbackTitle}</h4>
          <p style={{ fontSize: '13px', margin: '0 0 12px 0' }}>The federated remote could not be reached. Local host fallback initiated.</p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{ padding: '6px 14px', background: '#21262d', border: '1px solid #30363d', color: '#58a6ff', borderRadius: '6px', cursor: 'pointer' }}
          >
            Retry Connection
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
