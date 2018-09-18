import * as Login from './utils/login'

App({
      isReady: wx.getSystemInfoSync('isReady'),
      readyCallback: null,
      globalData: {
            // 1 男 2 女
            gender: 2,
            genderTheme: [{
                        main: '#8d9acd',
                        sub: '#c5d7ee'
                  },
                  {
                        main: '#e95471',
                        sub: '#f4a9b8'
                  },
            ],

            // 歌姬颜色列表
            // 1 卡缇娅 2 罗兹 3 清歌 4 伊莎贝拉 5 玉藻
            idolTheme: [{
                        main: '#9b86bd',
                        sub: '#f0d3e4'
                  },
                  {
                        main: '#ef878c',
                        sub: '#f8caab'
                  },
                  {
                        main: '#8d9acd',
                        sub: '#c5d7ee'
                  },
                  {
                        main: '#f5ad75',
                        sub: '#fad6a8'
                  },
                  {
                        main: '#e169a4',
                        sub: '#f7c4ce'
                  }
            ],




            // 跑步开始时间
            run_activity_start: '',
            is_first: wx.getStorageSync('is_first'),
            user_sign_count: 0,
            // 当前活动在存储中的index
            activity_index: 0,
            // 判断苹果手机型号
            activity_id: '',
            activity_name: '',
            iphone_type: '',
            userInfo: null,
            access_token: '',
            // baseUrl:'http://192.168.0.189/20180507/cn_acg-plus_cosrun/web/v1',
            baseUrl: 'https://cosrun.sindcorp.net/v1',
            netWorkData: null,
            rules: [],
            is_activity_start: false,
            activity_is_comico: 1,
            activity_is_perform: 1,
            activity_is_run: 1,
            run_number_limit: 2,
            // 是否开始报名 1是 2否
            is_sign_up: 2,
            // 是否结束报名 1是 2否
            is_sign_end: 1,
            // 活动是否开始
            is_activity_start: 2,
            // 1 不存在未审核 2存在未审核
            // is_examine: 1,

            banners: [],

            // 当前活动是否返现 1返现 2不返现
            is_cash: '2',
            // 有待支付订单 1存在 2不存在
            is_unpay_order: 2
      },
      onLaunch: function() {
            let info = wx.getSystemInfoSync();
            if (info.SDKVersion < '1.6.3') {
                  wx.showModal({
                        title: '提示',
                        content: '您的基础库版本过低，无法正常使用本小程序。请升级您的微信。',
                        success: function(res) {
                              if (res.confirm) {

                              } else if (res.cancel) {}
                        }
                  })
            }
            // 展示本地存储能力
            var logs = wx.getStorageSync('logs') || []
            logs.unshift(Date.now())
            wx.setStorageSync('logs', logs)

            var sysinfo = wx.getSystemInfoSync();
            if (sysinfo) {
                  this.globalData.sysinfo = sysinfo;
                  var width = sysinfo.windowWidth;
                  this.globalData.px2rpx = 750 / width;
                  this.globalData.rpx2px = width / 750;
            }
            Login.checkSession()
                  .then((res) => {

                  })
                  .catch(() => {
                        wx.setStorageSync('isReady', false)
                        wx.removeStorageSync('access_token')
                        // Login.login()
                        //       .then(() => {
                        //             wx.setStorageSync('isReady', true)
                        //             if (this.readyCallback) {
                        //                   this.readyCallback();
                        //             }
                        //       });
                  })

            // 获取用户信息
            wx.getSetting({
                  success: res => {
                        if (res.authSetting['scope.userInfo']) {}
                  }
            })

            // 设置字体
            wx.loadFontFace({
                  family: 'FZLTHJT',
                  source: 'url("http://192.168.0.189/20180507/star_project/web/star_img/FZLTHJT.ttf")',
                  success: function(res) {
                        console.log(res)
                        console.log(res.status) //  loaded
                  },
                  fail: function(res) {
                        console.log(res.status) //  error
                  },
                  complete: function(res) {
                        console.log(res.status);
                  }
            });
            wx.loadFontFace({
                  family: 'FZZCHJT',
                  source: 'url("http://192.168.0.189/20180507/star_project/web/star_img/FZZCHJT.ttf")',
                  success: function(res) {
                        console.log(res)
                        console.log(res.status) //  loaded
                  },
                  fail: function(res) {
                        console.log(res.status) //  error
                  },
                  complete: function(res) {
                        console.log(res.status);
                  }
            });
            wx.loadFontFace({
                  family: 'FZLTCHJT',
                  source: 'url("http://192.168.0.189/20180507/star_project/web/star_img/FZLTCHJT.ttf")',
                  success: function(res) {
                        console.log(res)
                        console.log(res.status) //  loaded
                  },
                  fail: function(res) {
                        console.log(res.status) //  error
                  },
                  complete: function(res) {
                        console.log(res.status);
                  }
            });
      }
})