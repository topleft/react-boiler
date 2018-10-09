import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import './styles/main.scss';


const App = () => (
  <div>
    <Header/>
  </div>
);

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
