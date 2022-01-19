import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap';
import Nav from 'react-bootstrap/Nav';
import Sidebar from './components/sidebar/sidebar';
import Dashboard from './components/dashboard/dashboard';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
        return errorInfo;
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;

        }

        return this.props.children;
    }
}

function App() {
  return (
      <div className="wrapper">
          <ErrorBoundary>
          <Sidebar/>

              <Dashboard/>
          </ErrorBoundary>

        {/*<Menu/>*/}
        {/*<Dashboard/>*/}
        {/*<Footer/>*/}
      </div>
  );
}

export default App;
