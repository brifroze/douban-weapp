//index.js
//获取应用实例
var app = getApp()
var basic = 'https://api.douban.com'
Page({
  data: {
    movieList: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this
    wx.request({
        url: `${basic}/v2/movie/in_theaters`,
        method: "GET",
        header: {
            'content-type': 'json'
        },
        success(res) {
            // console.log(res)
            if (res.statusCode == 200) {
                that.setData({
                    movieList: res.data.subjects
                })
            }
        }
    })
  }
})
