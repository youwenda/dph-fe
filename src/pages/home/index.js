// index.js
// 获取应用实例
import wx from '../../utils/weex';

Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  onLoad() {
    // 调用应用实例的方法获取全局数据
    return wx.app.getUserInfo()
    .then((userInfo) => {
      console.log('getUserInfo Promise', userInfo);
      this.setData({
        userInfo
      });
    })
    .catch((reason) => {
      console.log(reason);
    });
  }
});
