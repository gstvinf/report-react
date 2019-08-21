import React, { Component } from 'react';

import Chart from 'react-google-charts'

// import { Container } from './styles';

export default class MyChart extends Component {
  render() {
    const passou = 200;
    const reprovou = 1;
    return (
        <Chart
          width={'500px'}
          height={'300px'}
          chartType="PieChart"
          loader={<div>Carregando gráfico</div>}
          data={[
            ['Status', 'Testes'],
            ['Passou', passou],
            ['Reprovou', reprovou],
          ]}
          options={{
            legend: 'none',
            pieSliceText: 'percent',
            pieStartAngle: (360*reprovou)/(passou+reprovou),
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