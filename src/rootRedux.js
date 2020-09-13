import { combineReducers } from 'redux';
// Redux 提供了一个combineReducers方法，用于 Reducer 的拆分。你只要定义各个子 Reducer 函数，然后用这个方法，将它们合成一个大的 Reducer。
//全局reducer
import isLogin from './indexRedux.js'
//子reducer
import NewsRedux from './page/news/NewsRedux.js'
import PageShowRedux from './page/pageshow/PageShowRedux.js'

//合并reducer
var rootRedux = combineReducers({
  isLogin,
  NewsRedux,
  PageShowRedux
})

export default rootRedux