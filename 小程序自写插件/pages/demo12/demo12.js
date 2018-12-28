//引用腾讯地图API
var QQMapWX = require('../../qqmap-wx-jssdk.js');
var qqmapsdk;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    address: "郑州市",
    src: ""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*判断是第一次加载还是从position页面返回
    如果从position页面返回，会传递用户选择的地点*/
    if (options.address != null && options.address != '') {
      //设置变量 address 的值
      this.setData({
        address: options.address
      });
    } else {
      console.log("aaaaaaaaaaaaaa")
      // 实例化API核心类
      qqmapsdk = new QQMapWX({
        //此key需要用户自己申请
        key: 'ZYABZ-4WDCW-EGURD-RQUH2-IQWNV-WEFVF'
      });
      var that = this;
      // 调用接口
      qqmapsdk.reverseGeocoder({
        poi_options: 'policy=2',
        success: function (res) {
          console.log(res)
          that.setData({
            address: res.result.address
          });
        },
        fail: function (res) {
          console.log(res);
        },
        complete: function (res) {
          console.log(res);
        }
      });
    }
  },
  onChangeAddress: function (e) {
    wx.navigateTo({
      url: "/pages/position/position"
    });
  },
  
   
})