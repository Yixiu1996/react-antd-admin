/*
 * @Author: your name
 * @Date: 2020-06-03 19:48:46
 * @LastEditTime: 2020-06-08 19:46:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-app-web\src\api\leftNav.js
 */
export default {
  navList: [
    {
      label: "首页总览",
      name: "/admin/indexPage",
    },
    {
      label: "高德地图",
      name: "map",
      children: [
        {
          label: "天气预报",
          name: "/admin/map/weather",
        },
        {
          label: "行驶轨迹",
          name: "/admin/map/track",
        },
        {
          label: "网点管理",
          name: "/admin/map/webPoint",
        },
      ],
    },
    {
      label: "在线商城",
      name: "mall",
      children: [
        {
          label: "2-1",
          name: "2-1",
        },
        {
          label: "2-2",
          name: "2-2",
        },
        {
          label: "2-3",
          name: "2-3",
        },
      ],
    },
    {
      label: "可视图表",
      name: "chart",
      children: [
        {
          label: "3-1",
          name: "3-1",
        },
        {
          label: "3-2",
          name: "3-2",
        },
        {
          label: "3-3",
          name: "3-3",
        },
      ],
    },
    {
      label: "系统设置",
      name: "/admin/sysSet",
    },
  ],
};
