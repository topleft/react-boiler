import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect, NavLink } from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './styles/main.scss';

function Conversations() {
  return <h1>Conversations</h1>;
}
function Dashboard() {
  return <h1>Dashboard</h1>;
}
function Files() {
  return <h1>Files</h1>;
}
function Events() {
  return <h1>Events</h1>;
}
function Sessions() {
  return <h1>Sessions</h1>;
}
function Settings() {
  return <h1>Settings</h1>;
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
          <Route path='/dashboard' component={Dashboard}></Route>
          <Route path='/sessions' component={Sessions}></Route>
          <Route path='/events' component={Events}></Route>
          <Route path='/files' component={Files}></Route>
          <Route path='/conversations' component={Conversations}></Route>
          <Route path='/settings' component={Settings}></Route>
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
