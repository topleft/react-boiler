import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import './styles/main.scss';


const Page = (props) => {
  return <h1 className='page__title'>{props.title}</h1>
};

Page.propTypes = {
  title: PropTypes.string,
}

const links = [
  {
    to: '/home',
    label: 'home',
    children: 'Home',
    render: (props) => <Page {...props} title={'Home'}/>
  },{
    to: '/page-one',
    label: 'page-one',
    children: 'Page One',
    render: (props) => <Page {...props} title={'PageOne'}/>
  },{
    to: '/page-two',
    label: 'page-two',
    children: 'Page Two',
    render: (props) => <Page {...props} title={'PageTwo'}/>
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

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
