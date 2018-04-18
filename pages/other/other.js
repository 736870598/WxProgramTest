// pages/other/other.js
Page({

  clickMe: function () {
    this.setData({ msg : "hellohello " })
    wx.request({
      url: 'https://tcc.taobao.com/cc/json/mobile_tel_segment.htm',
      header: {
        'content-type': 'application/json', // 默认值
        'Accept': 'application/json',
      },
      data: {
        'tel':'15982297495'
      },
      success: function (res) {
        msg : "222111111111122222222"
        // setData({ msg: "hellohello2222222222 " })
        console.log("success: " + res.data)
      },
      fail: function (res) {
        console.log("fail: " + res.data)
      },
      complete: function (res) {
        console.log("complete: " + res.data)
      }
    })
  },














  /**
   * 页面的初始数据
   */
  data: {
    msg: "2222"
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