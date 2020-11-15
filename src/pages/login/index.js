/*
 * @Author: your name
 * @Date: 2020-06-04 20:56:04
 * @LastEditTime: 2020-06-08 20:35:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-app-web\src\pages\login\login.js
 */
import React, { Component } from "react";
import "./index.less";
import { Form, Input, Button, Checkbox } from "antd";
export default class Login extends Component {
  render() {
    const layout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    const tailLayout = {
      wrapperCol: { offset: 6, span: 18 },
    };
    const onFinish = (values) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    return (
      <div className="loginBox">
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item label="用户名" name="username" rules={[{ required: true, message: "请输入用户名！！！" }]}>
            <Input />
          </Form.Item>

          <Form.Item label="密码" name="password" rules={[{ required: true, message: "请输入密码！！！" }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>记住密码</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
