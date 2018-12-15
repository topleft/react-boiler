import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { hot } from 'react-hot-loader';
import NavBar from './components/NavBar';
import Header from './components/Header';
import './styles/main.scss';

const Page = (props) => {
  return <h1 className='page__title'>{props.title}</h1>;
};

Page.propTypes = {
  title: PropTypes.string,
};

const Home = (props) => <Page {...props} title={'Home'}/>;
const PageOne = (props) => <Page {...props} title={'PageOne'}/>;
const PageTwo = (props) => <Page {...props} title={'PageTwo'}/>;

const links = [
  {
    to: '/home',
    label: 'home',
    children: 'Home',
    render: Home
  },{
    to: '/page-one',
    label: 'page-one',
    children: 'Page One',
    render: PageOne
  },{
    to: '/page-two',
    label: 'page-two',
    children: 'Page Two',
    render: PageTwo
  }
];

const App = () => (
  <BrowserRouter>
    <div>
      <Header>
        <NavBar links={links}/>
      </Header>
      <div style={{marginLeft: '7.5rem'}}>
        <Switch>
          { links.map(({to, render}, i) => <Route key={i} path={to} render={render}/>)}
          <Redirect to={'/home'}/>
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

const HotApp = hot(module)(App);

ReactDOM.render(
  <HotApp/>,
  document.getElementById('app')
);
