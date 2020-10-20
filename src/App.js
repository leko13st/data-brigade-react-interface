import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Instruments from './Instruments/Instruments';
import Chart from './Chart/Chart';
import Date from './Date/Date';
import OutlinerContainer from './Outliner/OutlinerContainer';

const App = () => {
  return(
    <div className="app-wrapper">
      <Instruments />
      <Date />
      <OutlinerContainer />
      <Chart />
    </div>
  )
}

export default App;