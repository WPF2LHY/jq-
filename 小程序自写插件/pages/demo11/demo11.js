Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:false,
    shuArr: [{ num: 1, flagImg: true },{ num: 2, flagImg: true}],
    jieImg:true,
    money:129,
    hidden:false
  },
  toHome:function(){
    wx.switchTab({
        url: '../home/home',
      })
  },
  jiantap:function(e){
    // 减
      // console.log(e.target.dataset.index);
      var index = e.target.dataset.index;
      if (this.data.shuArr[index].num<=1) return;
      this.data.shuArr[index].num--;
      this.setData({
        shuArr:this.data.shuArr
      });
      this.endMoney();
  },
  jiatap: function (e) {
    // 加
    // console.log(e.target.dataset.index);
    var index = e.target.dataset.index;
    if (this.data.shuArr[index].num >= 10) return;
    this.data.shuArr[index].num++;
    this.setData({
      shuArr: this.data.shuArr
    });
    this.endMoney();
  },
  tianjia:function(e){
    // 选择状态，图片切换
    var index = e.currentTarget.dataset.index;
    // console.log(e);
    this.data.shuArr[index].flagImg = !this.data.shuArr[index].flagImg;
      this.setData({
        shuArr: this.data.shuArr
      });
      // 当取消选择时，取消全选；反之亦然
      var flag = true;//标记是否全部选中
      for (var i = 0; i < this.data.shuArr.length;i++){
        if (!this.data.shuArr[i].flagImg){
          flag = false;
        }
      }
      this.setData({
        jieImg:flag
      })
      console.log(this.data.shuArr[index].flagImg);
      this.endMoney();
  },
  jieShuan:function(){
    // 结算状态
    this.setData({
      jieImg: !this.data.jieImg      
    });
    // 当取消/选中全选时，改变图片的状态
    if(this.data.jieImg){
      // 选中状态
      for (var i = 0; i < this.data.shuArr.length; i++) {
        this.data.shuArr[i].flagImg = true;
      }
    }else{
      // 取消
      for (var i = 0; i < this.data.shuArr.length; i++) {
        this.data.shuArr[i].flagImg = false;
      }
    }
    this.setData({
      shuArr: this.data.shuArr
    });
    this.endMoney();
    console.log(this.data.jieImg)
  },
  endMoney:function(){
      // 结算出最后的金额
      var money = 0;
    for (var i = 0; i < this.data.shuArr.length;i++ ){
      if (this.data.shuArr[i].flagImg){
        money += this.data.shuArr[i].num*129
      }
    }
    this.setData({
      money: money
    })
  },
  changeTab:function(){
    // 显示切换删除按钮
    console.log(this.data.shuArr)
    this.setData({
      hidden:!this.data.hidden
    })
  },
  clear:function(){
      // 删除
    var  newArr = []; //保存数组中的保留项
      for(var i =0;i<this.data.shuArr.length;i++){
        if (!this.data.shuArr[i].flagImg){
          newArr.push(this.data.shuArr[i]);
        }
      }
      this.setData({
        shuArr: newArr
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
    this.endMoney();
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