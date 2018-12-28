const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
 
  sao:function(){
    // o1V205G7wLuZhOLtaPAYIINGNWLU
    //调用支付页面接口
    wx.request({
      url: 'https://guangzhou.chuangyijiayuan.cn/index.php/Home/Index/payOrders',
      data: {
        openid: wx.getStorageSync("openid"),
        order_no: 'HD1534320950',
        youhui_id: '',
        jianjie: 1
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'post',
      success: res => {
        console.log(res)
        console.log(res.data.order_no);
        //app.globalData.zhifuDD = res.data.data.order_no;//从新更新order

        //console.log(app.globalData.zhifuDD);
        if (res.data.status != 200) {
          wx.showModal({
            title: '提示',
            content: res.data.reg,
            showCancel: false,
          })
        } else {
          var data = res.data.data;
          var obj = JSON.parse(data);
          console.log(obj);
          var tid = obj.package.substring(10);
          console.log(tid, app.globalData.access);
          var times = timeFormat();
          app.globalData.times = times;
          console.log(times, app.globalData.times);

          wx.requestPayment({
            'timeStamp': obj.timeStamp,
            'nonceStr': obj.nonceStr,
            'package': obj.package,
            'signType': 'MD5',
            'paySign': obj.paySign,
            'success': function (res) {
              console.log(res);

              console.log("支付成功");
              //调用支付回调接口
              wx.request({
                url: app.globalData.URL + 'Home/Index/payResultshoudong',
                data: {
                  order_no: app.globalData.zhifuDD
                },
                header: {
                  'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                method: 'post',
                success: res => {
                  console.log(res.data);
                  if (res.data.reg != 300) {
                    wx.showToast({
                      title: res.data.reg,
                      image: '../../images/cuo.png',
                      duration: 2000,
                      mask: true
                    });
                  }

                  //调用短信接口
                  wx.request({
                    url: app.globalData.URL + 'Home/Erweima/send_msg',
                    data: {
                      truename: app.globalData.BDname,
                      mobile: app.globalData.BDnum,
                    },
                    header: {
                      'content-type': 'application/x-www-form-urlencoded' // 默认值
                    },
                    method: 'post',
                    success: res => {
                      //调用模板接口
                      send(tid, app.globalData.access);
                    }
                  });
                  wx.showToast({
                    title: '支付成功',
                    icon: 'succes',
                    duration: 5000,
                    mask: false
                  }),
                    setTimeout(function () {
                      wx.redirectTo({
                        // url: '../mypay1/mypay1?id=2',
                        url: '../myBao/myBao?baoming=1',
                      })

                    }, 2000),
                    wx.showToast({
                      title: '请完善信息',
                      icon: 'succes',
                      duration: 5000,
                      mask: false
                    })
                }
              })
              //调用支付回调接口end
            },
            'fail': function (res) {
            }
          });
        }
      }
    });
    //调用支付页面接口end
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