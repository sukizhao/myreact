// import 'core-js/es6/map';
// import 'core-js/es6/set';

import React from 'react';//创建组建、虚拟dom元素，生命周期
import ReactDOM from 'react-dom';//把创建好的组建和虚拟dom放在页面上展示
import { HashRouter as Router } from 'react-router-dom';

//redux 和react-redux（关联react和redux）
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//reducers 状态树state和逻辑操作
import rootRedux from './rootRedux.js'

import App from './App.js';

//创建状态树和设置

//生成状态树对象
const store = createStore(rootRedux);

//start 状态树应用到全局 通过Provider
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));

