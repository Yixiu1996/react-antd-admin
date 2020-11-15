/*
 * @Author: your name
 * @Date: 2020-06-01 19:56:19
 * @LastEditTime: 2020-06-21 22:34:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-app-web\src\components\Header\index.js
 */
import React, { Component } from "react";
import { Row, Col } from "antd";
import Util from "../../utils/utils";
import "./index.less";
// import Axios from '../../axios'
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "外面有雨",
      isLogin: false,
    };
    this.toLogin = this.toLogin.bind(this);
  }
  componentDidMount() {
    setInterval(() => {
      let sysTime = Util.formatTime(new Date());
      this.setState({
        sysTime,
      });
    }, 1000);
    this.getWeatherApiData();
  }
  getWeatherApiData() {
    // Axios.jsonp({});
  }
  toLogin() {
    // alert(this.state.isLogin);
    // this.props.history.push("/login");
    // 如果是未登录状态 直接去登录页面登录  如果是退出  则给个confirm提示
  }
  render() {
    return (
      <div className="header">
        <div className="header_top">
          <span>你好，{this.state.userName}</span>
          <span className="exitBtn" onClick={this.toLogin}>
            {this.state.isLogin ? "退出" : "去登录"}
          </span>
        </div>
        <Row className="header_bottom">
          <Col className="breadcrumb" span="8">
            首页
          </Col>
          <Col className="weather" span="16">
            <div className="weather_item">{this.state.sysTime}</div>
            <div>晴天</div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
