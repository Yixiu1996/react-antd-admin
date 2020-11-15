/*
 * @Author: your name
 * @Date: 2020-06-01 19:56:19
 * @LastEditTime: 2020-06-08 19:33:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-app-web\src\components\LeftNav\index.js
 */
import React, { Component } from "react";
import { Menu } from "antd";
import "./index.less";
import Nav from "../../api/leftNav";
import { NavLink } from "react-router-dom";
const { SubMenu } = Menu;
function handleClick(e) {
  console.log("click", e);
}
class LeftNav extends Component {
  constructor(props) {
    super(props);
    //
    this.state = {
      navList: Nav.navList,
    };
  }
  componentDidMount() {
    // 生成nav节点 (以下两种方式都ok)
    const menuNode = this.renderMenu(Nav.navList);
    // const menuNode = this.renderMenu(this.state.navList);
    this.setState({
      menuNode,
    });
  }
  renderMenu(data) {
    // 递归循环创建节点
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.label} key={item.name}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.label} key={item.name}>
          <NavLink to={item.name}>{item.label}</NavLink>
        </Menu.Item>
      );
    });
  }
  render() {
    // console.log(Nav.navList);
    return (
      <div className="leftNav">
        <div className="nav_logo">XF</div>
        <Menu onClick={handleClick} theme="dark" mode="vertical">
          {this.state.menuNode}
        </Menu>
      </div>
    );
  }
}

export default LeftNav;
