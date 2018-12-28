Page({

  /**
   * 页面的初始数据
   */
  data: {
    img_l: ''
  },
  previewImage: function (e) {
    wx.previewImage({
      // 预览的图片http链接 把字符串转数组。
      urls: this.data.img_l.split(',')
    })
  },
  down_file: function () {
    var _this = this;
    const downloadTask = wx.downloadFile({
      url: 'https://mingpian.chuangyijiayuan.com/upload/153388351747464.jpeg', //仅为示例，并非真实的资源
      success: function (res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        console.log(res)
        if (res.statusCode === 200) {
          _this.setData({
            img_l: res.tempFilePath //将下载的图片临时路径赋值给img_l,用于预览图片
          });
          //保存图片到手机
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success: function (res) {
              console.log(res)
            },
            fail: function (res) {
              console.log(res)
              console.log('fail')
            }
          });
        }
      }
    })
    downloadTask.onProgressUpdate((res) => {
      console.log(res)
      _this.setData({
        num: res.progress
      })
      // console.log('下载进度', res.progress)
      // console.log('已经下载的数据长度', res.totalBytesWritten)
      // console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
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