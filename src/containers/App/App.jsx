import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Home from '../Home';
import PageOne from '../PageOne';
import PageTwo from '../PageTwo';
import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import '../../styles/main.scss';

const links = [
  {
    to: '/home',
    className: 'home',
    label: 'Home',
    render: Home
  },{
    to: '/page-one',
    className: 'page-one',
    label: 'Page One',
    render: PageOne
  },{
    to: '/page-two',
    className: 'page-two',
    label: 'Page Two',
    render: PageTwo
  }
];

const App = () => (
  <Router>
    <Fragment>
      <Header>
        <NavBar links={links}/>
      </Header>
      <div style={{marginLeft: '7.5rem'}}>
        <Switch>
          { links.map(({to, render}, i) => <Route key={i} path={to} render={render}/>)}
          <Redirect to={'/home'}/>
        </Switch>
      </div>
    </Fragment>
  </Router>
);

export default hot(module)(App);


