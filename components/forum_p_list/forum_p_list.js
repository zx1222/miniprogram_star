// components/commentPList/commentPList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
        forum_list: {
              type: 'Array',
              value: []
        },
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
    turnToView:function(){
      wx.navigateTo({
        url: '/pages/forumView/index',
      })
    }
  }
})
