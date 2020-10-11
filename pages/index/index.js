//index.js
Page({
  data: {
    number: 0
  },
  //事件处理函数
  bindViewTap: function () {
    this.setData({
      number: ++this.data.number
    })
  },
  onLoad: function () {},
})