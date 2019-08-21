import React, { Component } from 'react';

import Chart from 'react-google-charts'

// import { Container } from './styles';

export default class MyChart extends Component {
  state = {
    succeeded: 0,
    failed: 0,
    title: '',
    size: {
      width: 1000,
      height: 600
    }
  }

  componentDidMount = () => {
    this.setState({
      succeeded: this.props.data.succeeded,
      failed: this.props.data.failed,
      title: this.props.data.title
    })

    if (this.props.data.title != 'Geral') {
      this.setState({
        size: {
          width: 250,
          height: 150
        }
      });
    }
  }
  render() {
    return (
      <Chart
        width={this.state.size.width+'px'}
        height={this.state.size.height+'px'}
        chartType="PieChart"
        loader={<div>Carregando gráfico</div>}
        data={[
          ['Status', 'Testes'],
          ['Passou', this.state.succeeded],
          ['Falhou', this.state.failed],
        ]}
        options={{
          title: this.state.title,
          legend: 'none',
          pieSliceText: 'percentage',
          pieStartAngle: (360 * this.state.failed) / (this.state.succeeded + this.state.failed),
          backgroundColor: 'none',
          slices: {
            0: { color: 'green' },
            1: { color: 'red' },
          },
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    );
  }
}