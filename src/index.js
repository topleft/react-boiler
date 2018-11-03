import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect, NavLink } from "react-router-dom";
import SearchBar from './components/SearchBar';
import Sidebar from './components/Sidebar';
import './styles/main.scss';

const Conversations = () => <h1>Conversations</h1>;

const Dashboard = () => <h1>Dashboard</h1>;

const Files = () => <h1>Files</h1>;

const Events = () => <h1>Events</h1>;

const Sessions = () => <h1>Sessions</h1>;

const Settings = () => <h1>Settings</h1>;

const NotFound = () => <h1>404 Not Found</h1>;


const App = () => (
  <BrowserRouter>
    <div>
      <div className='main-content'>
        <SearchBar/>
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
