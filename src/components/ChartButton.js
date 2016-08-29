import React, { Component } from 'react';

class ChartButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.modifier}>{this.props.label}</button>
      </div>
    )
  }
}

export default ChartButton;