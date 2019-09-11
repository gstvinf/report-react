import React, { Component } from 'react';
import MyChart from './MyChart';
import Collapsible from 'react-collapsible';


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

  updateProps = () => {
    this.setState({
      props2:  {
        
     }
    })
    console.log(this.state.props2)
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
          <Collapsible trigger={entry.name}> 
          <br/>Passou: {entry.success} - Falhou: {entry.failure}
          <MyChart data={{
            succeeded: entry.success,
            failed: entry.failure,
            title: entry.name
          }}/>
          </Collapsible>
        </div>
      </div>
    ))

    const allReport = this.props.data.map((entry, i) => (
      <div key={i} >  
        <Collapsible trigger={entry.name}>
          <h4>Passou: {entry.success}</h4>
          <h4>Falhou: {entry.failure}</h4>
          {entry.testCase.map(test => <div>{test.name} - {test.status.toString()}</div>)}
        </Collapsible>
      </div>
    ))

    const chartProps = {
      succeeded: this.props.data.reduce(function (tot, arr) {
        return tot + arr.success;
      }, 0),
      failed: this.props.data.reduce(function (tot, arr) {
        return tot + arr.failure;
      }, 0),
      title: 'Geral' 
    }

    return (
      <div>

        <h1>Relatório</h1>
        <MyChart data={chartProps} />
        <h3>Passou: {this.state.succeeded}</h3>
        <h3>Reprovou: {this.state.failed}</h3>

        <b>Reports</b>
        <p>{report}</p>

        <b>Test list</b>
        <p>{allReport}</p>
      </div>
    );
  }
}
