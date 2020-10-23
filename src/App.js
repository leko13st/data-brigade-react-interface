import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Instruments from './Instruments/Instruments';
import Chart from './Chart/Chart';
import OutlinerContainer from './Outliner/OutlinerContainer';
import DateContainer from './Date/DateContainer';

const App = () => {
  return(
    <div className="app-wrapper">
      <Instruments />
      <DateContainer />
      <OutlinerContainer />
      <Chart />
    </div>
  )
}

export default App;