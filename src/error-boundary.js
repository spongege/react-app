import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  static getDerivedStateFromError(error) {
    // return {
    //   hasError: true
    // };
  }
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({
      hasError: true
    });
  }
  render() {
    const { hasError } = this.state;
    if (hasError) return <div>error happened!!</div>;
    else return this.props.children;
  }
}

export default ErrorBoundary;
