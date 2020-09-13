import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import DiReactPage from '../../tpl/DiReactPage.js';
//=====组件=====

class PageShow extends Component {
  // 为什么在constructor用super？
  // 如果子类通过extends关键词继承了父类，那么子类constructor构造函数中必须优先调用super
  //  super是一个函数，它是父类构造器，子类的super就是调用父类的constructor
  constructor(props) {
    super(props);
  }

  render () {
    if (this.props.isLogin == false) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <h3>分页展示</h3>
        <ul style={{ display: this.props.allpage <= 0 ? "none" : "block" }}>
          {
            this.props.list.map(function (item, i) {
              return <li key={item.id}>
                <span>{item.text}</span>
              </li>
            })
          }
        </ul>
        <div style={{ display: this.props.allpage <= 0 ? "block" : "none" }}>没有数据了</div>
        <DiReactPage allpage={this.props.allpage} currentpage={this.props.currentpage} nextpage={this.props.nextpage} GETLIST={this.props.GETLIST} />
      </div>
    );
  }


  componentDidMount () {
    console.log("PageShow渲染完毕");
    this.props.GETLIST(1);
  }

}


export default PageShow