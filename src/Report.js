import React, { Component } from 'react';
import { testNameToKey } from 'jest-snapshot/build/utils';
import { homedir } from 'os';

// import { Container } from './styles';

export default class Report extends Component {

  state = {
    succeeded: 0,
    failed: 0,
    total: this.succeeded + this.failed,
  };

  async componentDidMount() {
    this.sumFailure();
    this.sumSucceeded();
  }

  sumFailure = () => {
    var sumFailure = this.props.data.reduce(function (tot, arr) {
      return tot + arr.failure;
    }, 0);
    this.setState({ failed: sumFailure })
  }

  sumSucceeded = () => {
    var sumSuccess = this.props.data.reduce(function (tot, arr) {
      return tot + arr.success;
    }, 0);
    this.setState({ succeeded: sumSuccess })
  }

  render() {

    const report = this.props.data.map((entry, i) => (
      <div key={i} >
        <div>
          <b>{entry.name}</b> Passou: {entry.success} - Falhou: {entry.failure}
        </div>
      </div>
    ))

    const allReport = this.props.data.map((entry, i) => (
      <div key={i} >
        <h3>{entry.name}</h3>
        <h4>Passou: {entry.success}</h4>
        <h4>Falhou: {entry.failure}</h4>


        {entry.testCase.map(test => <div>{test.name} - {test.status.toString()}</div>)}

      </div>
    ))


    return (
      <div>
        <h1>Relatório</h1>
        <h2>Total</h2>
        <h3>Passou: {this.state.succeeded}</h3>
        <h3>Reprovou: {this.state.failed}</h3>

        {report}
        {allReport}
      </div>
    );
  }
}
