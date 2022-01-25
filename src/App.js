import React, {useState}from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Dashboard components
import Sidebar from './components/sidebar/sidebar';
import Dashboard from './components/dashboard/dashboard';
// pages
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Login from './components/login/login';
import  useToken from './components/auth/auth';

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

    const { token, setToken } = useToken();


if(!token) {     // protected pages
  return <Login setToken={setToken} />
}

  return (
<ErrorBoundary>
      <BrowserRouter >
          <Routes>
              <Route  path='/' element={<Home/>}/>
              <Route  path='/reports' element={<Reports/>}/>
          </Routes>
      </BrowserRouter>
</ErrorBoundary>
  );
}

export default App;
