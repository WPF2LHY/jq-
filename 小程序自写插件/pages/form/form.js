const app = getApp();
var times = 5;//验证码时间
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['美国', '中国', '巴西', '日本'],
    index:0,
    date: '2016-09-01',
    time: '12:01',
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',
    yan:true,
    yanTime:5
  },
  //普通选择
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  // 日期选择
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
// 时间选择
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
// 地址选择
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  // 按钮
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  time60:function(){
   var that = this;
      var daji = setInterval(function(){
        times--;
        if (times > 0) {
          that.setData({
            yanTime: times
          })
        } else {
          clearInterval(daji);
          times = 5;
          that.setData({
            yan: true,
            yanTime:5
          });
        }
      },1000);
  },
  //获取验证码
  getYan: function () {
    this.setData({
      yan: false,
    });
    this.time60();

    // if (!this.data.tel){
    //   wx.showToast({
    //     title: '请先输入您的手机号',
    //     icon: 'none',
    //     duration: 1000
    //   });
    // }else{
    // wx.request({
    //   url: app.globalData.URL + 'sendMessage.client',
    //   data: { mobile: this.data.tel,type:0},
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded' 
    //   },
    //   method: 'post',
    //   success: res => {
    //     console.log(res.data)
    //     wx.showToast({
    //       title: res.data.msg,
    //       icon: 'none',
    //       duration: 1000
    //     });
    //     if (res.data.success) {
    //       this.setData({
    //         code: res.data.code,
    //         sendId: res.data.sendId,
    //         flag: false,
    //       });
    //       this.time60();
    //     }
    //   }
    // });
    // }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})