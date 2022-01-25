import React from 'react';
import { Link } from 'react-router-dom';
// Dashboard components
import Sidebar from '../components/sidebar/sidebar';
import Navbar from '../components/navbar/navbar';

import LineChart from '../components/charts/chart';
// import '../adminkit/src/js/app';

const Reports = (props) => (
    <div className="wrapper">
    <Sidebar/>
        <div className="main">

            <Navbar/>
            <LineChart />
        </div>
   {/*<Dashboard/>*/}
</div>
  );


export default Reports;
