/*
 * @Author: your name
 * @Date: 2020-06-04 21:05:27
 * @LastEditTime: 2020-06-08 19:49:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-app-web\src\router.js
 */

//           <Route path="/login" component={Login}></Route>
//           <Route
//             path="/pandect"
//             render={() => <Pandect>{/* <Route path="/panduct/1-1"></Route>   */}</Pandect>}
//           ></Route>
//           <Route path="/order/detail" component={Login}></Route>
//         </App>
import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import App from "./App";
import Admin from "./pages/Admin";
import Login from "./pages/login";
import Pandect from "./pages/pandect";
import SysSet from "./pages/sysSet";
import Weather from "./pages/map/weather";
import Track from "./pages/map/track";
import WebPoint from "./pages/map/webPoint";
import NotFound from "./pages/notFound";
class router extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/admin"></Redirect>}></Route>
            <Route path="/login" component={Login}></Route>
            {/* 管理首页 */}
            <Route
              path="/admin"
              render={() => (
                <Admin>
                  <Route path="/admin/indexPage" component={Pandect}></Route>
                  <Route path="/admin/sysSet" component={SysSet}></Route>
                  {/* map部分 */}
                  <Route path="/admin/map/weather" component={Weather}></Route>
                  <Route path="/admin/map/track" component={Track}></Route>
                  <Route path="/admin/map/webPoint" component={WebPoint}></Route>
                </Admin>
              )}
            ></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </App>
      </HashRouter>
    );
  }
}

export default router;
