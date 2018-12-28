//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  gotoPage: function(e) {
    var page = e.currentTarget.dataset.page;
    wx.navigateTo({
      url: '../' + page + '/' + page
    });
    //console.log(e.currentTarget.dataset.page)
  },
  loginSuccess: function(e) {
    console.log(e.detail.code) // wx.login 的 code
    console.log(e.detail.userInfo) // wx.getUserInfo 的 userInfo
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    // 腾讯地图获取当前位置
    wx.request({
      url: 'https://apis.map.qq.com/ws/geocoder/v1/?location=37.750825881958015,55.63233260657568&key=ZYABZ-4WDCW-EGURD-RQUH2-IQWNV-WEFVF',
      success: res => {
        console.log(res);
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    wx.request({
      url: 'https://apis.map.qq.com/ws/geocoder/v1/?location=37.750825881958015,55.63233260657568&key=ZYABZ-4WDCW-EGURD-RQUH2-IQWNV-WEFVF',
      success: res => {
        console.log(res);
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  /**
   * 监听页面滑动
   */
  onPageScroll: function(res) {
    // console.log(res.scrollTop);
  }
})