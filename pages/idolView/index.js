// pages/idolView/index.js
const app = getApp()
import {
      wxRequest
} from '../../utils/promise.js'
Page({

      /**
       * 页面的初始数据
       */
      data: {
            tabArr: ['自我介绍', '动态', '后援会'],
            tabCurrent: 0,
            indicatorArr: ['直播', '动画', 'PV', 'MV', '短视频', '事件'],
            swiperCurrent:0,
            p_swiper: 2,

            idolTheme: [],
            idol_index: 0,
            idolInfo:[
                  {
                        hd_desc:'除了祖国的命令，只有游戏才能让她动起来的萝莉',
                        fans:100,
                        hot:400,
                        rank:1,
                        is_follow:1,
                        image:'../../images/idol1.png',
                        bg: 'http://192.168.0.189/20180507/star_project/web/star_img/idol-brief-inro_bg1.png',
                        country: '../../images/idol-country1.png',
                        name: '卡缇娅·乌拉诺娃',
                        short_name: '卡缇娅',
                        birthdaty: '6月6日',
                        age: '14',
                        flower: '晚香玉',
                        sub_desc:'外表激萌小女孩，内心痴汉偶像宅；平时三无没干劲，肝起游戏来不要命。'
                  },
                  {
                        hd_desc: '认真努力的摇滚少女',
                        fans: 100,
                        hot: 400,
                        rank: 1,
                        is_follow: 1,
                        image: '../../images/idol2.png',
                        bg: 'http://192.168.0.189/20180507/star_project/web/star_img/idol-brief-inro_bg2.png',
                        country: '../../images/idol-country2.png',
                        name: '罗兹·巴蕾特',
                        short_name: '罗兹',
                        birthdaty: '4月16日',
                        age: '16',
                        flower: '玫瑰',
                        sub_desc:'敢想敢做的摇滚女孩，正直的她总承担着吐槽团队中其他人奇怪行为的责任。'
                  },
                  {
                        hd_desc: '神秘优雅的大家闺秀',
                        fans: 100,
                        hot: 400,
                        rank: 1,
                        is_follow: 2,
                        image: '../../images/idol3.png',
                        bg: 'http://192.168.0.189/20180507/star_project/web/star_img/idol-brief-inro_bg3.png',
                        country:'../../images/idol-country3.png',
                        name: '李清歌',
                        short_name:'清歌',
                        birthdaty: '12月22日',
                        age: '15',
                        flower: '茉莉',
                        sub_desc:'端庄优雅的大家闺秀，平时总给人一种雾里看花的感觉，但到关键时刻却能以坚定的信念带领着大家前进。'
                  },
                  {
                        hd_desc: '青春活泼的超级乐天派',
                        fans: 100,
                        hot: 400,
                        rank: 1,
                        is_follow: 1,
                        image: '../../images/idol4.png',
                        bg: 'http://192.168.0.189/20180507/star_project/web/star_img/idol-brief-inro_bg4.png',
                        country: '../../images/idol-country4.png',
                        name: '伊莎贝拉·霍利',
                        short_name: '伊莎贝拉',
                        birthdaty:'7月17',
                        age: '16',
                        flower: '向日葵',
                        sub_desc: '活泼可爱的美国女孩，平时虽然大大咧咧，但却非常会照顾人，跟她在一起总有种安心的感觉。'
                  },
                  {
                        hd_desc: '自称妖狐转世的中二少女',
                        fans: 100,
                        hot: 400,
                        rank: 1,
                        is_follow: 1,
                        image: '../../images/idol5.png',
                        bg: 'http://192.168.0.189/20180507/star_project/web/star_img/idol-brief-inro_bg5.png',
                        country: '../../images/idol-country5.png',
                        name: '神宫司玉藻',
                        short_name: '玉藻',
                        birthdaty: '11月11日',
                        age: '15',
                        flower:'樱花',
                        sub_desc: '自称是狐神转世的妹子，外表看起来端庄乖巧，但不知道为啥一开口就让人有一种“这是中二病吧？”的感觉。'
                  }
            ]
      },

      /**
       * 生命周期函数--监听页面加载
       */
      onLoad: function(options) {
            console.log(options)
            this.setData({
                  idol_index: options.index,
                  idolTheme: app.globalData.idolTheme
            })
            wx.setNavigationBarTitle({
                  title: this.data.idolInfo[this.data.idol_index].name,
            })
            wx.setNavigationBarColor({
                  frontColor: '#ffffff',
                  backgroundColor: this.data.idolTheme[this.data.idol_index].main,
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
      _tapIndicator(e) {
            this.setData({
                  'tabCurrent': e.target.dataset.index
            });
            const data = this.data.tabCurrent
            this.triggerEvent('childEvent', data, {
                  bubbles: false
            });
      },
      catchChildSwiper: function (e) {
            this.setData({
                  tab_top_id: e.detail
            })
            console.log(this.data.tab_top_id)
            if (this.data.tab_top_id == 0) {
                  this.setData({
                        resultData: {
                              banners: ['../../images/banner.jpg',
                                    '../../images/banner.jpg',
                              ]
                        }
                  })
            }
            if (this.data.tab_top_id == 1) {
                  this.setData({
                        resultData: {
                              banners: ['../../mages/banner.jpg',
                                    '../../images/banner.jpg',
                              ]
                        }
                  })
            }

            if (this.data.tab_top_id == 6) {
                  const data = [{
                        poster: '../../images/video-poster-default.png',
                        title: '卡缇娅视频',
                        comment_count: 77,
                        date: 1537088018
                  }]
                  this.setData({
                        list: this.formatlist2(data)
                  })
                  console.log(this.data.list)
            }
      },

      /**
       * 用户点击右上角分享
       */
      onShareAppMessage: function() {

      }
})