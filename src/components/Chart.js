import React, { Component } from 'react';
import Highcharts from 'highcharts';

import highchartsDefaults from '../highchartsDefaults.js';

class Chart extends Component {
  renderChart(seriesData = this.props.seriesData) {
    Highcharts.chart(this._chartDiv, {...highchartsDefaults,
      series: [{
        data: seriesData
      }],
    })
  }
  setupRef(c) {
    this._chartDiv = c
  }
  componentDidMount() {
    this.renderChart()
  }
  shouldComponentUpdate(nextProps) {
    this.renderChart(nextProps.seriesData)
    return false;
  }
  render() {
    return <div ref={this.setupRef.bind(this)}></div>
  }
}

export default Chart;
