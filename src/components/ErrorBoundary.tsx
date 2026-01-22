import { Component, ErrorInfo, ReactNode } from "react";
import { Home, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (import.meta.env.DEV) {
      console.error("Error Boundary caught an error:", error, errorInfo);
    }

    // In production, you would log this to an error reporting service
    // Example: Sentry.captureException(error, { extra: errorInfo });

    this.setState({
      error,
      errorInfo,
    });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-background-light px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl w-full text-center"
          >
            <div className="bg-background border border-border rounded-xl p-8 shadow-card">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">⚠️</span>
              </div>

              <h1 className="heading-section text-foreground mb-4">
                عذرًا، حدث خطأ غير متوقع
              </h1>

              <p className="text-body text-muted-foreground mb-8">
                نعتذر عن هذا الإزعاج. حدث خطأ أثناء معالجة الصفحة. يرجى المحاولة مرة
                أخرى أو العودة إلى الصفحة الرئيسية.
              </p>

              {/* Show error details in development */}
              {import.meta.env.DEV && this.state.error && (
                <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-right">
                  <p className="text-sm font-semibold text-red-800 mb-2">
                    Error Details (Development Only):
                  </p>
                  <p className="text-xs text-red-700 font-mono break-words">
                    {this.state.error.toString()}
                  </p>
                  {this.state.errorInfo && (
                    <details className="mt-2">
                      <summary className="text-xs text-red-600 cursor-pointer hover:text-red-800">
                        Stack Trace
                      </summary>
                      <pre className="text-xs text-red-600 mt-2 overflow-auto max-h-48 text-left">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </details>
                  )}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={this.handleReset}
                  className="btn-outline inline-flex items-center justify-center gap-2"
                >
                  <RefreshCw size={20} />
                  إعادة المحاولة
                </button>

                <a
                  href="/"
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  <Home size={20} />
                  العودة للرئيسية
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
