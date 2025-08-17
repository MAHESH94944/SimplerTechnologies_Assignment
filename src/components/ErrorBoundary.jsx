import React from "react";

// ErrorBoundary component to catch JS errors in the UI
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log error info here
    // console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-2">
            Something went wrong.
          </h1>
          <p className="text-gray-700">
            Please refresh the page or try again later.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
