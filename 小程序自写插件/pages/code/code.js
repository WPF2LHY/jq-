Page({

  /**
   * 页面的初始数据
   */
  data: {
    //用户输入明文、暗文
    showType: 'password', //如果是密码换成'password';数字为：number
    isFocus: false,
    //默认四位，手动copy两个json，正常密码框是6位
    dataSource: [{
      initValue: ''
    }, {
      initValue: ''
    }, {
      initValue: ''
    }, {
      initValue: ''
    }, {
      initValue: ''
    }, {
      initValue: ''
    }]
  },
  /**
   * 用户tap假的Input,focus到隐藏的input
   */
  onTapFocus: function() {
    this.setData({
      isFocus: true
    });
  },
  /**
   * 移动端键入
   * 注意:在pc端无法显示键盘，移动端下编译、预览正常
   */
  mobileInput: function(e) {
    let dataSource = this.data.dataSource;
    let curInpArr = e.detail.value.split('');
    let curInpArrLength = curInpArr.length;
    if (curInpArr.length != this.data.dataSource.length)
      for (let i = 0; i < dataSource.length - curInpArrLength; i++)
        curInpArr.push('');
    for (let i = 0; i < this.data.dataSource.length; i++) {
      let initValue = 'dataSource[' + i + '].initValue';
      this.setData({
        [initValue]: curInpArr[i]
      });
    }
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