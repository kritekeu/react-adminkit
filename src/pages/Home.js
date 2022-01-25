import React from 'react';
import { Link } from 'react-router-dom';
// Dashboard components
import Sidebar from '../components/sidebar/sidebar';
import Dashboard from '../components/dashboard/dashboard';
const Home = (props) => (
    <div className="wrapper">
        <Sidebar/>
        <Dashboard/>
    </div>
);

export default Home;
