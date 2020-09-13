import React, { Component } from 'react';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';
import NavReactRedux from './NavReactRedux.js';
import LoginReactRedux from './pages/login/LoginReactRedux.js';
import HomeReactRedux from './pages/home/HomeReactRedux.js';
import AboutReactRedux from './pages/about/AboutReactRedux.js';
import NewsReactRedux from './pages/news/NewsReactRedux.js';
import PageShowReactRedux from './pages/pageshow/PageShowReactRedux.js';
import NotFind from './pages/notFind/NotFind.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        	<NavReactRedux />
			<div>
				<Switch>
					<Route exact path="/" component={LoginReactRedux}/>
					<Route exact path="/Home" component={HomeReactRedux}/>
					<Route path="/About" component={AboutReactRedux}/>
					<Route exact path="/News" component={NewsReactRedux}/>
					<Route exact path="/PageShow" component={PageShowReactRedux}/>				
					<Route component={NotFind}/>			
				</Switch> 
			</div>
      </div>
    );
  }
}

export default App;