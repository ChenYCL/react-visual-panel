class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props);
    this.state = {error: null, errorInfo: null, hasError: false};
  }

  componentDidCatch (error, info) {
    // Display fallback UI
    this.setState({error: error, errorInfo: info, hasError: true});

  }

  render () {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (<h1>Something went wrong.</h1>);
    }
    return this.props.children;
  }
}