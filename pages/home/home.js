//Bmob配置
var Bmob = require('../../utils/bmob.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    mtitleInfo : [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var dish = Bmob.Object.extend("dish");
    var query = new Bmob.Query(dish);
    // 查询所有数据
    query.find({
      success: function (results) {
        console.log("共查询到 " + results.length + " 条记录");
        var mTitle = [];
        // 循环处理查询到的数据
        for (var i = 0; i < results.length; i++) {
          mTitle[i] = results[i].get('dish_name');
        }
        //赋值到本地titleInfo
        that.setData({
          mtitleInfo: mTitle
        })

      },
      error: function (error) {
        console.log("查询失败: " + error.code + " " + error.message);
      }
    });



  },

  //以下为自定义点击事件
  menuTap: function (event) {
    //event(系统给的一个框架)、currentTarget(当前鼠标点击的一个组件)、dataset(所有自定义数据的集合)、  .（变量名）
    var postId = event.currentTarget.dataset.postid;
    console.log("点击的postid " + postId);
    // wx.navigateTo({
    //   url: '../Buy/Buy?id=' + postId
    // })
  },
})

module.exports = {
  getTitleInfo: function(){
    var title = '123';

    return title;
  }, //二维码返回的信息寄存在这里
}