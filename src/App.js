import React from 'react';
import logo from './logo.svg';
import './App.css';

// import data from '../../central_de_configuracoes_automacao/junitReportFile.json';
import data from './data.json'
import Report from './Report';
import MyChart from './MyChart';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      < Report data={data} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
