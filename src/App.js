import React from 'react';
import logo from './logo.svg';
import './App.css';
import Collapsible from 'react-collapsible';


// import data from '../../central_de_configuracoes_automacao/junitReportFile.json';
import data from './data.json'
import Report from './Report';
import MyChart from './MyChart';

function App() {
  return (
    <div>
      <Collapsible trigger="TESTE">
        <p>This is the collapsible content. It can be any element or React component you like.</p>
        <p>It can even be another Collapsible component. Check out the next section!</p>
      </Collapsible>

      <div  className="">
      <header className="">
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
      

    </div>
  );
}

export default App;
