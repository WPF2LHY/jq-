var raw = require('../../utils/city');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: [Object.keys(raw), raw[Object.keys(raw)[0]]],
    multiIndex: [0, 0],
    province: "",
    city: "",
    select:[0,0]
  },
  onRegionChange: function(e) {
    console.log(e.detail);
    this.setData({
      select: [e.detail.province, e.detail.city]
    })
  },
  bindColumnChange: function (e) {
    console.log(e);
    if (e.detail.column === 0) {
      var region = this.data.region;
      var province = region[0][e.detail.value];
      this.setData({
        region: [region[0], raw[province]]
      });
    }
  },
  bindChange: function (e) {
    if (!e.detail.value || e.detail.value.length < 2) return;
    var region = this.data.region;
    var pro_index = e.detail.value[0];
    var city_index = e.detail.value[1];
    this.setData({
      province: region[0][pro_index],
      city: region[1][city_index]
    });
    console.log(region[0][pro_index], region[1][city_index]);
    this.setData({
      select: [region[0][pro_index], region[1][city_index]]
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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

  }
})