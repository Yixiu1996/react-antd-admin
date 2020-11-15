/*
 * @Author: your name
 * @Date: 2020-06-04 20:53:38
 * @LastEditTime: 2020-06-08 20:21:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-app-web\src\App.js
 */
/*eslint-disable*/
// 放置首页 登录页 报错页面的组件
import React, { Component } from "react";

class App extends Component {
  render() {
    console.log(this.props);
    return <div className="appBox">{this.props.children}</div>;
  }
}

export default App;
