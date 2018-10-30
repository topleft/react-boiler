import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect, NavLink } from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './styles/main.scss';


function Wow() {
  return <h1>Wow</h1>;
}

function Home() {
  return <h1>Home</h1>;
}

function NotFound() {
  return <h1>404 Not Found</h1>;
}

const App = () => (
  <BrowserRouter>
    <div>
      <div className='main-content'>
        <Sidebar/>
        <Switch>
          <Route path='/home' component={Home}></Route>
          <Route path='/wow' component={Wow}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
