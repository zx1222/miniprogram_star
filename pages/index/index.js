//index.js
//获取应用实例
const app = getApp()
import * as http from '../../utils/promise.js'
import getSystemInfo from '../../utils/getSystemInfo.js'
import {
      formatDate1,formatDate2
} from '../../utils/formatDate.js'


Page({
      data: {
            resultData: {},
            tab_id: 0,
            list: [{
                        poster: '../../../../images/video-poster-default.png',
                        title: '卡缇娅视频',
                        tag: '直播',
                        date: 1537088018
                  },
                  {
                        poster: '../../../../images/video-poster-default.png',
                        title: '卡缇娅视频',
                        tag: '直播',
                        date: 1537088018
                  },
                  {
                        poster: '../../../../images/video-poster-default.png',
                        title: '卡缇娅视频',
                        tag: '直播',
                        date: 1537088018
                  },
                  {
                        poster: '../../../../images/video-poster-default.png',
                        title: '卡缇娅视频',
                        tag: '直播',
                        date: 1537088018
                  },
                  {
                        poster: '../../../../images/video-poster-default.png',
                        title: '卡缇娅视频',
                        tag: '直播',
                        date: 1537088018
                  },
                  {
                        poster: '../../../../images/video-poster-default.png',
                        title: '卡缇娅视频',
                        tag: '直播',
                        date: 1537088018
                  }
            ],
            // list 分页
            loading: true,
            noData: false,
            currentPage: 1,
            pageSize: 10,
      },
      //事件处理函数
      bindViewTap: function() {
            wx.navigateTo({
                  url: '../logs/logs'
            })
      },
      onLoad: function(options) {
            this.getData();
            this.setData({
                  list: this.formatlist1(this.data.list)
            })
      },
      onShow: function() {
            // 查询用户是否授权
            wx.getSetting({
                  success: (res) => {
                        if (res.authSetting['scope.userInfo']) {
                              this.setData({
                                    is_open: false
                              })
                        } else {
                              this.setData({
                                    is_open: true
                              })
                        }
                  }
            })
      },
      catchChildSwiper: function(e) {
            this.setData({
                  tab_id: e.detail
            })
            if (this.data.tab_id == 0) {
                  this.setData({
                        resultData: {
                              banners: ['../../../../images/banner.jpg',
                                    '../../../../images/banner.jpg',
                                    '../../../../images/banner.jpg',
                              ]
                        }
                  })
            }
            if (this.data.tab_id == 1) {
                  this.setData({
                        resultData: {
                              banners: ['../../../../images/banner.jpg',
                                    '../../../../images/banner.jpg',
                                    '../../../../images/banner.jpg',
                              ]
                        }
                  })
            }

            if (this.data.tab_id == 6) {
                  const data = [{
                        poster: '../../../../images/video-poster-default.png',
                        title: '卡缇娅视频',
                        comment_count: 77,
                        date: 1537088018
                  }]
                  this.setData({
                        list: this.formatlist2(data)
                  })
            }
      },
      getData: function() {
            if (this.data.tab_id == 0) {
                  this.setData({
                        resultData: {
                              banners: ['../../../../images/banner.jpg',
                                    '../../../../images/banner.jpg',
                                    '../../../../images/banner.jpg',
                              ]
                        }
                  })
            }
      },

      // 获取用户信息
      onGotUserInfo: function(e) {
            const url = `${app.globalData.baseUrl}/person/user-info`
            const data = Object.assign(e.detail, {
                  appid: 'wxdc41a6ac2e1bcd06'
            })
            if (data.errMsg == 'getUserInfo:ok') {
                  wx.setStorageSync('getUserInfo', true);
                  this.setData({
                        is_open: !this.data.is_open
                  })
                  http.request(url, data, 'POST').then((res) => {
                        if (res.data.id) {
                              wx.showToast({
                                    title: '授权成功',
                                    icon: 'success',
                                    duration: 1400
                              })
                        }
                  })
            }
      },
      formatlist1: function(list) {
            const data = list
            data.forEach((item) => {
                  item.date = formatDate1(item.date)
            })
            return data
      },
      formatlist2: function(list) {
            const data = list
            data.forEach((item) => {
                  item.date = formatDate2(item.date)
            })
            return data
      },

      onReachBottom: function() {
            let voteList = this.data.voteList;
            let newVoteList = []
            let data = {
                  limits: this.data.pageSize,
                  page: this.data.currentPage + 1,
                  id: 1,
            }
            if (!this.data.noData) {
                  this.setData({
                        loading: true
                  })
                  const resData = [{
                              poster: '../../../../images/video-poster-default.png',
                              title: '卡缇娅视频',
                              tag: '直播',
                              date: 1537088018
                        },
                        {
                              poster: '../../../../images/video-poster-default.png',
                              title: '卡缇娅视频',
                              tag: '直播',
                              date: 1537088018
                        },
                  ]

                  newVoteList = this.formatlist1(resData)
                  this.setData({
                        list: this.data.list.concat(newVoteList),
                        loading: false
                  })
                  // http.request(url, data).then((res) => {

                  //       if (newVoteList.length < this.data.pageSize) {
                  //             _this.setData({
                  //                   loadmore_end: true,
                  //                   noData: true
                  //             })
                  //       }
                  //       setTimeout(function () {
                  //             _this.setData({
                  //                   currentPage: _this.data.currentPage + 1,
                  //                   voteList: voteList.concat(newVoteList),
                  //                   loading_more: false
                  //             })
                  //       }, 300)
                  // });
            }
      },

      onShareAppMessage: function(res) {
            if (res.from === 'button') {

            }
            return {
                  title: 'COSRUN幻装跑',
                  path: '/pages/home/index',
                  imageUrl: '../../assets/images/share-cover.jpg'
            }
      },
})