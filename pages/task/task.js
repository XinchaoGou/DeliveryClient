//Bmob配置
var Bmob = require('../../utils/bmob.js');
//获取home配送信息
var Home = require('../home/home.js');
Page({
  data: {
    
    array: ['三杯鸡', '炒面', '肉饭', '海鲜饭'],
    index: 0,
    scaninfo: ['1000', '1001', '1003', '1004', '1005', '1006', '1007', '1008', '1009', '1010', '1011', '1012' ],//二维码返回的信息寄存在这里

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  submit: function(){

    //创建类和实例
    var Delivery = Bmob.Object.extend("delivery");
    var delivery = new Delivery();
    delivery.set("delivery_id", "hello");
    //添加数据，第一个入口参数是null
    delivery.save(null, {
      success: function (result) {
        // 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），你还可以在Bmob的Web管理后台看到对应的数据
        console.log("创建成功, objectId:" + result.id);
      },
      error: function (result, error) {
        // 添加失败
        console.log('创建失败');

      }
    });
  },
  //设定菜品信息
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  //设定待添加的饭盒识别码
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },

})