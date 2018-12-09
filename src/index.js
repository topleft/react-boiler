import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import './styles/main.scss';

const Home = () => <h1>Home</h1>;
const PageOne = () => <h1>PageOne</h1>;
const PageTwo = () => <h1>PageTwo</h1>;

const links = [
  {to: '/home', children: 'Home', component: Home},
  {to: '/page-one', children: 'Page One', component: PageOne},
  {to: '/page-two', children: 'Page Two', component: PageTwo}
];

const App = () => (
  <BrowserRouter>
    <div>
      <Header>
        <NavBar links={links}/>
      </Header>
      <div style={{marginLeft: '7.5rem'}}>
        <Switch>
          { links.map(({to, component}, i) => <Route key={i} path={to} component={component}/>)}
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
