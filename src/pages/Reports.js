import React from 'react';
import { Link } from 'react-router-dom';
// Dashboard components
import Sidebar from '../components/sidebar/sidebar';
import Navbar from '../components/navbar/navbar';

const Reports = (props) => (
    <div className="wrapper">
    <Sidebar/>
        <div className="main">

            <Navbar/>
        </div>
   {/*<Dashboard/>*/}
</div>
  );


export default Reports;
