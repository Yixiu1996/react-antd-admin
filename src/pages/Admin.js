/*
 * @Author: your name
 * @Date: 2020-06-01 19:56:19
 * @LastEditTime: 2020-06-08 19:40:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-app-web\src\pages\App.js
 */
/*eslint-disable*/
import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LeftNav from "../components/LeftNav";
import { Row, Col } from "antd";
import "./Admin.less";
class App extends Component {
  render() {
    return (
      <Row className="box">
        {/* 响应式布局  左侧导航栏 右侧header 内容区 footer */}
        <Col className="nav" sm={2} md={3}>
          <LeftNav />
        </Col>
        <Col className="main" sm={22} md={21}>
          <Header />
          {this.props.children}
          <Footer />
        </Col>
      </Row>
    );
  }
}

export default App;
