// 初始化Bmob
require('utils/initial.js');
var Bmob = require('utils/bmob.js');
//app.js
App({
  onLaunch: function () {
    wx.login({
      success: function (res) {
        if (res.code) {
          //获取用户登录态成功！
          var code = res.code;
          wx.getUserInfo({
            success: function (userinfo) {
              //获取userinfo成功
              console.log(userinfo);
              var encryptedData = encodeURIComponent(userinfo.encryptedData);
              var iv = userinfo.iv;

              //发起网络请求
              Bmob.Cloud.run('onLogin', {
                code: res.code,
                encryptedData: encryptedData,
                iv: iv         }, {
                success: function (result) {
                  console.log("返回成功");
                  //只返回openid，不要返回session-key
                  console.log(result);
                },
                error: function (error) {
                  console.log(error);
                }
              });
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  }
})