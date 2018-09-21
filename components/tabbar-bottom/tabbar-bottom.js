// components/tabbar_bottom/tabbar_bottom.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
        tab_id: {
              type: 'number',
              value: 0
        },
        genderTheme:{
              type: 'Object',
              value: {}
        }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
        loadFont:function(){
              // 设置字体
              wx.loadFontFace({
                    family: 'FZLTHJT',
                    source: 'url("http://192.168.0.189/20180507/star_project/web/FZLTHJT.TTF")',
                    success: function (res) {
                          console.log(res.status) //  loaded
                    },
                    fail: function (res) {
                          console.log(res.status) //  error
                    },
                    complete: function (res) {
                          console.log(res.status);
                    }
              });
        }
  }
})
