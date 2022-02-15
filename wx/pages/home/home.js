// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  goSchoolPage: function () {
    wx.navigateTo({
      url: '../schoolWeb/schoolWeb',
      success: function () {}, //成功后的回调；
    })
  },

  goCode:function() {
    wx.switchTab({
      url: '../home/code'
    })
  },

  goFeedback: function () {
    wx.navigateTo({
      url: '../other/feedback',
      success: function () {}, //成功后的回调；
    })
  },

  goApply: function () {
    wx.navigateTo({
      url: '../apply/myapply',
      success: function () {}, //成功后的回调；
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
    if(!wx.getStorageSync("username")){
      wx.navigateTo({
        url: '../login/login'
      })
    }
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