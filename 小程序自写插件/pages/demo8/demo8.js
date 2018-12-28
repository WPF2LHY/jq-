const app = getApp();
var imgurl = "";
Page({

  /**
   * 页面的初始数据
   */
  data: {

    list: [],
    txt: "",
    list1: [],
    txt1: "",
    // src: "http://tmp/wx3f79fed32fe262d5.o6zAJs70s_xFz_ObiOA_siKfaTR0.d1e4baefda5aed288ae651979871c36a.jpg",
    arrImg: []
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    console.log(app.globalData.imgUrls);
    console.log(imgurl);
    e.detail.value.logo_link = imgurl;
    e.detail.value.img_links = app.globalData.imgUrls;
    e.detail.value.openid = wx.getStorageSync('openid');
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    if (!imgurl) {
      wx.showToast({
        title: "logo不能为空",
        icon: 'success',
        image: "../../images/cuo.png",
        duration: 2000
      });
    } else if (!e.detail.value.name) {
      wx.showToast({
        title: "商家名称不能为空",
        icon: 'success',
        image: "../../images/cuo.png",
        duration: 2000
      });
    } else if (!e.detail.value.address) {
      wx.showToast({
        title: "商家地址不能为空",
        icon: 'success',
        image: "../../images/cuo.png",
        duration: 2000
      });
    } else if (!e.detail.value.lianxiren) {
      wx.showToast({
        title: "联系人不能为空",
        icon: 'success',
        image: "../../images/cuo.png",
        duration: 2000
      });
    } else if (!e.detail.value.phone) {
      wx.showToast({
        title: "电话不能为空",
        icon: 'success',
        image: "../../images/cuo.png",
        duration: 2000
      });
    } else if (!checkMobile(e.detail.value.phone)) {
      wx.showToast({
        title: "电话不正确",
        icon: 'success',
        image: "../../images/cuo.png",
        duration: 2000
      });
    } else if (!e.detail.value.img_links) {
      wx.showToast({
        title: "商家图片不能为空",
        icon: 'success',
        image: "../../images/cuo.png",
        duration: 2000
      });
    } else if (!e.detail.value.jianjie) {
      wx.showToast({
        title: "商家介绍不能为空",
        icon: 'success',
        image: "../../images/cuo.png",
        duration: 2000
      });
    } else {
      wx.request({
        url: app.globalData.URL + 'post/zttj',
        data: e.detail.value,
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: res => {
          console.log(res.data)
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 2000
          });
          setTimeout(function () {
            // 返回
            wx.navigateBack({
              delta: 1
            });
          }, 2000)

        }
      })
    }
  },
  // 上传图片
  chuanImg: function () {
    wx.chooseImage({
      count: 1,  //最多可以选择的图片总数
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'],
      success: res => {
        console.log(res)
        var tempFilePaths = res.tempFilePaths;
        // 上传图片到服务器
        wx.uploadFile({
          url: app.globalData.URL + 'post/getimgurl1',
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'logo_link': '0'
          },
          success: res => {
            console.log(res.data)
            var str = JSON.parse(res.data)
            console.log("res", str)
            imgurl = str.url
            //do somethin
            this.setData({
              src: imgurl
            });
          }
        });
        console.log(tempFilePaths);
        this.setData({
          src: tempFilePaths
        });
      },
    })
  },
  // 上传商家图片
  arrImgs: function () {
    wx.chooseImage({
      count: 9,  //最多可以选择的图片总数
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'],
      success: res => {
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths);
        this.setData({
          arrImg: tempFilePaths
        });
        // 上传多种图片
        app.uploadimg({
          url: app.globalData.URL + 'post/getimgurl1',
          path: tempFilePaths//这里是选取的图片的地址数组
        });
      },
    });
  },
  //得到Input的内容
  setInput: function (e) {
    this.setData({
      txt: e.detail.value
    });
  },
  setInput1: function (e) {
    this.setData({
      txt1: e.detail.value
    });
  },
  //添加标签
  InputAdd: function () {
    var arr = this.data.list
    if (this.data.txt) {
      arr.push(this.data.txt);
      this.setData({
        list: arr,
        txt: "",
      });
    }
  },
  InputAdd1: function () {
    var arr = this.data.list1
    if (this.data.txt1) {
      arr.push(this.data.txt1);
      this.setData({
        list1: arr,
        txt1: "",
      });
    }
  },
  //删除标签
  clearArr: function (e) {
    console.log(e.currentTarget.dataset.id);
    var index = e.currentTarget.dataset.id;
    var arr = this.data.list;
    arr.splice(index, 1);
    this.setData({
      list: arr
    });
  },
  clearArr1: function (e) {
    console.log(e.currentTarget.dataset.id);
    var index = e.currentTarget.dataset.id;
    var arr = this.data.list1;
    arr.splice(index, 1);
    this.setData({
      list1: arr
    });
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