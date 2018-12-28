const app = getApp();
var index1 = 0;//记录价格点击次数
var index2 = 0;//记录销量点击次数
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:1,
    img1:'../../images/icon_sx2@2x.png',
    img2:'../../images/icon_sx2@2x.png',
    index1:0,
  },
  //nav筛选
  navBtn:function(e){
    console.log(e)
    this.setData({
      num: e.currentTarget.dataset.num,
      img1: '../../images/icon_sx2@2x.png',
      img2: '../../images/icon_sx2@2x.png',
    });

  },
  // 销量
  xlImg: function (e) {
    this.setData({
      num: e.currentTarget.dataset.num,
      img2: '../../images/icon_sx2@2x.png',
    });
    ++index2;
    if (index2 % 2 == 0) {
      this.setData({
        img1: "../../images/topImg.png",
      });
    } else {
      this.setData({
        img1: "../../images/downImg.png",
      })
    }
  },
  // 价格
  tbImg: function (e) {
    this.setData({
      num: e.currentTarget.dataset.num,
      img1: '../../images/icon_sx2@2x.png',
    });
    ++index1;
    if (index1 % 2 == 0) {
      this.setData({
        img2: "../../images/topImg.png",
      });
    } else {
      this.setData({
        img2: "../../images/downImg.png",
      })
    }
  },
  
  //左侧标题切换
   //nav筛选
  leftlist:function(e){
    console.log(e)
    this.setData({
      index1: e.currentTarget.dataset.index,
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