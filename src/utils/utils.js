/*
 * @Author: your name
 * @Date: 2020-06-02 19:30:35
 * @LastEditTime: 2020-06-02 19:47:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-app-web\src\utils\utils.js
 */
// import { formatTimeStr } from "antd/lib/statistic/utils";

export default {
  formatTime(time) {
    if (!time) return "";
    let timeStr =
      time.getFullYear() +
      "年" +
      (time.getMonth() + 1) +
      "月" +
      time.getDay() +
      "日 " +
      time.getHours() +
      ":" +
      time.getMinutes() +
      ":" +
      time.getSeconds();
    return timeStr;
  },
};
