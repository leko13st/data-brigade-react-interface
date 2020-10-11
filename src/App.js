import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Instruments from './Instruments/Instruments';
import Outliner from './Outliner/Outliner';
import Chart from './Chart/Chart';
import Date from './Date/Date';

const App = () => {
  return(
    <div className="app-wrapper">
      <Instruments />
      <Date />
      <Outliner />
      <Chart />
    </div>
  )
}

export default App;