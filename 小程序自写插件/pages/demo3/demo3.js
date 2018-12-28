
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[{
      id: 1,
      num: 1562,
      name: "a"
    },
      {
        id: 2,
        num: 2,
        name: "a"
      }, {
        id: 3,
        num: 92,
        name: "a"
      }, {
        id: 4,
        num: 502,
        name: "a"
      }, {
        id: 5,
        num: 152,
        name: "a"
      },
    ]
   
  },
  //升序
  upList:function(){
    var list = this.data.list;
    console.log(list)
     list = this.bubbleSort(list,1);
    console.log(list);
    this.setData({
      list:list
    })
  },
  //降序
  downList: function () {
    var list = this.data.list;
    console.log(list)
    list = this.bubbleSort(list,2);
    console.log(list);
    this.setData({
      list: list
    })
  },
  //冒泡排序
  bubbleSort: function (array,a) {
    //参数：数组，升降标示
    var i = 0,
      len = array.length,
      j, d;
      if(a==1){
        //升序
        for (; i < len; i++) {
          for (j = 0; j < len; j++) {
            if (array[i].num < array[j].num) {
              d = array[j];
              array[j] = array[i];
              array[i] = d;
            }
          }
        }
      }else{
        //降序
        for (; i < len; i++) {
          for (j = 0; j < len; j++) {
            if (array[i].num > array[j].num) {
              d = array[j];
              array[j] = array[i];
              array[i] = d;
            }
          }
        }
      }
    return array;
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