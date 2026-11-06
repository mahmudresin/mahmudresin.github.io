import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Runtime Exception:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            background: "#050505",
            color: "#ffffff",
            minHeight: "100vh",
            padding: "48px",
            fontFamily: "ui-monospace, monospace",
          }}
        >
          <h2 style={{ fontSize: "20px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px" }}>
            INITIALIZATION EXCEPTION
          </h2>
          <p style={{ color: "#a3a3a3", marginTop: "12px", fontSize: "14px" }}>
            An unexpected error occurred during execution:
          </p>
          <pre
            style={{
              color: "#ff6b6b",
              background: "#171717",
              padding: "16px",
              marginTop: "16px",
              borderRadius: "4px",
              overflowX: "auto",
              fontSize: "13px",
            }}
          >
            {this.state.error?.message || "Unknown error"}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: "24px",
              padding: "10px 24px",
              background: "#ffffff",
              color: "#000000",
              border: "none",
              fontWeight: "600",
              cursor: "pointer",
              letterSpacing: "1px",
              textTransform: "uppercase",
              fontSize: "12px",
            }}
          >
            Reload Application
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
