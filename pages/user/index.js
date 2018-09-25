// pages/user/index.js
const app = getApp()
import {
  wxRequest
} from '../../utils/promise.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab_bottom_id: 4,
    gender: 2,
    is_gender_selected: 1,
    is_seletpopup_show: true,
    genderThemeArr: [],
    genderTheme: {},
    userInfo: {
      avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1788562038,3472846301&fm=26&gp=0.jpg',
      nickname: '战斗吧歌姬'
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(app.globalData.is_gender_selected)
    this.setData({
      gender: app.globalData.gender,
      is_gender_selected: app.globalData.is_gender_selected,
      genderThemeArr: app.globalData.genderTheme,
      genderTheme: app.globalData.genderTheme[app.globalData.gender - 1]
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: this.data.genderTheme.main,
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
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
  turnToMyFollow: function() {
    wx.navigateTo({
      url: '/pages/userFollow/index',
    })
  },
  turnToMyContribution:function(){
    wx.navigateTo({
      url: '/pages/userContribution/index',
    })
  },
  turnToMyCollection:function(){
    wx.navigateTo({
      url: '/pages/userCollection/index',
    })
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
  // 性别皮肤选择
  selectTheme: function(e) {
    this.setData({
      gender: parseInt(e.currentTarget.dataset.id)
    })
    if (this.data.gender == 1) {
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: this.data.genderThemeArr[0].sub,
        animation: {
          duration: 400,
          timingFunc: 'easeIn'
        }
      })
    }
    if (this.data.gender == 2) {
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: this.data.genderThemeArr[1].sub,
        animation: {
          duration: 400,
          timingFunc: 'easeIn'
        }
      })
    }
  },
  confirmGender: function(e) {
    app.globalData.gender = this.data.gender
    app.globalData.is_gender_selected = 1
    this.setData({
      is_seletpopup_show: false,
      gender: app.globalData.gender,
      genderTheme: app.globalData.genderTheme[this.data.gender - 1],
    })
  },

  turnToEditInfo: function() {
    wx.navigateTo({
      url: '/pages/editUserInfo/index?is_first_edit=2',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})