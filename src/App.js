import React, { Component } from 'react';

import Chart from './components/Chart.js';
import ChartButton from './components/ChartButton.js';

import { getRandomDataPoint } from './helpers'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     chartData: [1, 3, 2, 4]
    }
  }
  addToData() {
    this.setState({
      chartData: this.state.chartData.concat(getRandomDataPoint())
    })
  }
  removeFromData() {
    this.setState({
      chartData: this.state.chartData.slice(0, this.state.chartData.length - 1)
    })
  }
  render() {
    return (
      <div>
        <Chart seriesData={this.state.chartData} />
        <ChartButton modifier={this.addToData.bind(this)} label="add" />
        <ChartButton modifier={this.removeFromData.bind(this)} label="remove" />
      </div>
    );
  }
}

export default App;
