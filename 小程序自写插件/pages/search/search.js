
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    clear:true,//控制取消按钮的显隐
    wValue:'',//input的值
  },
  //获取输入框的值
  wSearch:function(e){
    console.log(e.detail.value);
    if (e.detail.value){
      this.setData({//有值时显示
        clear:false
      })
    }else{
      this.setData({//无值时隐藏
        clear: true
      })
    }
  },
  //点击使input置空
  wClose:function(){
    this.setData({
      wValue:'',
      clear:true
    });
  },
  //点击返回上一页
  wCloseout:function(){
    wx.navigateBack({
      delta:1
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