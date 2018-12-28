Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrImg:""
  },
  previewImage: function (e) {
    wx.previewImage({
      // 预览的图片http链接 把字符串转数组。
      urls: this.data.arrImg.split(',')
    })
  },
  chuanImg1: function () {
    var self = this;
    wx.chooseImage({
      count: 1, //最多可以选择的图片总数
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'],
      success: res => {
        console.log(res.tempFilePaths)
        var tempFilePaths = res.tempFilePaths;
        this.setData({
          arrImg: tempFilePaths[0],
        });
        // 上传图片到服务器
        wx.uploadFile({
          url: 'https://mingpian.chuangyijiayuan.com/api/v1/imgupdata/upload',
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {},
          header: { "Content-Type": "multipart/form-data" },
          success: res => {
            console.log(res.data)
            var str = JSON.parse(res.data);
            console.log("res", str);
            var imgurl = str.address
            this.setData({
              // arrImg: app.globalData.URL + imgurl,
              txt: imgurl
            });
          },fail:res=>{
            console.log(res);
          }
        });
        console.log(tempFilePaths);
        this.setData({
          src: tempFilePaths
        });
      },
    })
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