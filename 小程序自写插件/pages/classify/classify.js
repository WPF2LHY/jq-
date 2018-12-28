var urls = "https://www.kongtiaoguanjia.com/air/";
var index1 = 0;//记录价格点击次数
var index2 = 0;//记录销量点击次数
var page = 0;//页数
var app = getApp();
Page({
  data: {
    numNav:1,
    Nav:[],
    num: 0,
    index:1,
    jImg: "../../images/icon_sx2@2x.png",
    jImg1: "../../images/icon_sx2@2x.png",
    //品牌循环数据
    brandList: [
      { "brand": "美的", "id": "1" }, { "brand": "格力", "id": "2" }, { "brand": "大金", "id": "3" }, { "brand": "奥克斯", "id": "4" }
    ],
    //空调种类循环数据
    typeList: [
      { "type": "家用分体式", "id": "1" }, { "type": "家用中央式", "id": "2" }, { "type": "商用中央式", "id": "3" }
    ],
    //分类循环数据
    classifyList: [
      { "type": "挂机", "id": "1" }, { "type": "柜机", "id": "2" }, { "type": "天井机", "id": "3" }
    ],
    //频率循环数据
    frequencyList: [
      { "type": "定频", "id": "1" }, { "type": "变频", "id": "2" }
    ],
    //功率循环数据
    powerList: [
      { "type": "1匹", "id": "1" }, { "type": "小于1.5匹", "id": "2" }, { "type": "1.5匹", "id": "3" }, { "type": "2匹", "id": "4" }, { "type": "2.5匹", "id": "5" }, { "type": "3匹", "id": "6" }, { "type": "4匹及以上", "id": "7" }
    ],
    isChecked: false,
    showView: false
  },
  //全部
  all:function(e){
    console.log(e)
    this.setData({
      numNav: e.currentTarget.dataset.num
    })
  },
  //拼团
  pintuan:function(e){
    this.setData({
      numNav: e.currentTarget.dataset.num
    })
  },
  // 价格
  tbImg: function (e) {
    this.setData({
      numNav: e.currentTarget.dataset.num
    });
    ++index1;
    if (index1 % 2 == 0) {
      this.setData({
        jImg: "../../images/topImg.png",
        mark:1
      });
    } else {
      this.setData({
        jImg: "../../images/downImg.png",
        mark:2
      })
    }

    //调用数据
    //点击切换
    var that = this;
    // 数据列表
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 1000
    });

  },
  //销量
  xlImg: function (e) {
    this.setData({
      numNav: e.currentTarget.dataset.num
    });
    ++index2;
    if (index2 % 2 == 0) {
      this.setData({
        jImg1: "../../images/topImg.png",
        mark:3
      });
    } else {
      this.setData({
        jImg1: "../../images/downImg.png",
        mark:4
      })
    }
    //点击切换
    var that = this;
    // 数据列表
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 1000
    });
    // wx.request({
    //   //
    //   url: app.globalData.URL + 'lClassifyController/selectHotCommodity.do',
    //   data: {
    //     use_type: that.data.index,
    //     mark: that.data.mark
    //   },
    //   header: {
    //     "Content-Type": "application/x-www-form-urlencoded"
    //   },
    //   method: "GET",
    //   dataType: 'JSON',
    //   success: function (res) {
    //     wx.hideToast();
    //     var resMsg = JSON.parse(res.data);
    //     console.log(resMsg);
    //     for (var i = 0; i < resMsg.commodity.length; i++) {
    //       var cps = resMsg.commodity[i].cover_picture.split(",");
    //       if (cps[0]) {
    //         resMsg.commodity[i].cover_picture = app.globalData.picturePath + cps[0];
    //       } else {
    //         resMsg.commodity[i].cover_picture = app.globalData.picturePath + cps[1];
    //       }
    //     }
    //     that.setData({
    //       goods: resMsg.commodity,
    //       Nav: resMsg.airTypeList
    //     })
    //   },
    //   fail: function (res1) {
    //     console.log('0')
    //   }
    // })










  },
  leftBtn: function (e) {
    console.log(e.currentTarget.dataset.num);
    this.setData({
      num: e.currentTarget.dataset.num,
      index: e.currentTarget.dataset.id
    });
    //点击切换
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 1000
    });
    var that = this;
    // 数据列表
    wx.request({
      //
      url: app.globalData.URL + 'lClassifyController/selectHotCommodity.do',
      data: {
        use_type: e.currentTarget.dataset.id
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "GET",
      dataType: 'JSON',
      success: function (res) {
        wx.hideToast();
        var resMsg = JSON.parse(res.data);
        console.log(resMsg);
        for (var i = 0; i < resMsg.commodity.length; i++) {
          var cps = resMsg.commodity[i].cover_picture.split(",");
          if (cps[0]) {
            resMsg.commodity[i].cover_picture = app.globalData.picturePath + cps[0];
          } else {
            resMsg.commodity[i].cover_picture = app.globalData.picturePath + cps[1];
          }
        }
        that.setData({
          goods: resMsg.commodity,
          Nav: resMsg.airTypeList
        })
      },
      fail: function (res1) {
        console.log('0')
      }
    })



  },
  //品牌点击切换样式
  brandSelection(options) {
    var that = this
    var id = options.currentTarget.dataset.id;
    var brand = options.currentTarget.dataset.brand;
    //设置当前样式
    that.setData({
      'currentItem': id,
      'brand': brand,
    })
  },
  //空调种类点击切换样式
  typeSelection(options) {
    var that = this
    var id = options.currentTarget.dataset.id;
    var type = options.currentTarget.dataset.type;
    //设置当前样式
    that.setData({
      'typeItem': id,
      'use_type':type
    })
  },
  //分类点击切换样式
  classifySelection(options) {
    var that = this
    var id = options.currentTarget.dataset.id;
    var type = options.currentTarget.dataset.type;
    //设置当前样式
    that.setData({
      'classifyItem': id,
      'type': type
    })
  },
  //频率点击切换样式
  frequencySelection(options) {
    var that = this
    var id = options.currentTarget.dataset.id;
    var frequency = options.currentTarget.dataset.frequency;
    //设置当前样式
    that.setData({
      'frequencyItem': id,
      frequency: frequency
    })
  },
  //功率点击切换样式
  powerSelection(options) {
    var that = this
    var id = options.currentTarget.dataset.id;
    var level = options.currentTarget.dataset.level;
    //设置当前样式
    that.setData({
      'powerItem': id,
      'level': level
    })
  },
  // 点击筛选显示弹框
  clickAppear: function (options) {
    var that = this
    that.setData({
      'showView': true
    })
  },
  // 点击灰色部分隐藏弹框
  clickHide: function () {
    var that = this
    that.setData({
      'showView': false
    })
    var that = this;
    // 数据列表
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 1000
    });
    //  level: that.data.level,
    // frequency: that.data.frequency,
    //   type: that.data.type,
    //     use_type: that.data.use_type,
    //       brand: that.data.brand,
    wx.request({
      //
      url: app.globalData.URL + 'Lcommodity/chooseCommodityByParameter.do',
      data: {
        level: 13,
        frequency: 11,
        type: 8,
        use_type: 6,
        brand: 1,
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      dataType: 'JSON',
      success: function (res) {
        wx.hideToast();
        var resMsg = JSON.parse(res.data);
        console.log(resMsg);
        for (var i = 0; i < resMsg.commodity.length; i++) {
          var cps = resMsg.commodity[i].cover_picture.split(",");
          if (cps[0]) {
            resMsg.commodity[i].cover_picture = app.globalData.picturePath + cps[0];
          } else {
            resMsg.commodity[i].cover_picture = app.globalData.picturePath + cps[1];
          }
        }
        that.setData({
          goods: resMsg.commodity,
        });
      },
      fail: function (res1) {
        console.log('0')
      }
    })
  },
  // 搜索页面跳转
  toast: function (e) {
    const dataset = e.currentTarget.dataset.id;
    console.log(dataset);
    wx.navigateTo({
      url: '../detail/detail?id=' + dataset
    })
  },
  onShow: function () {
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    // this.setData({
    //   typeId:options.id
    // })
    // wx.setNavigationBarTitle({
    //   title: options.word,
    // });

    //商品列表
    wx.request({
      url: app.globalData.URL + 'api/baby/product/' + page+ "/" + options.id,
      data: {},
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'GET',
      success: res => {
        console.log(res.data);
        this.setData({
          list2: res.data
        })
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
    wx.showNavigationBarLoading() //在标题栏中显示加载
    page++;
    wx.request({
      url: app.globalData.URL + 'api/baby/product/' + this.data.typeId + "/" + page,
      data: {},
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'GET',
      success: res => {
        wx.hideNavigationBarLoading() //完成停止加载
        console.log(res.data);
        if (res.data.length > 0) {
          for (let nickname of res.data) {
            // nickname.dec1 = JSON.parse(nickname.dec1)
            // nickname.dec2 = JSON.parse(nickname.dec2);
            console.log(nickname)
            this.data.list2.push(nickname);
          }
          this.setData({
            list2: this.data.list2
          });
        } else {
          wx.showToast({
            title: '没有更多内容了',
            icon: 'none',
            duration: 1000
          });
        }
      }
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})