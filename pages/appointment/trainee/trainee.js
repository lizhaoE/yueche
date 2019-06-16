// pages/appointment/appointment/trainee/trainee.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },

  execGetStorageAndRender: function () {  //从缓存获取数据并渲染页面
    var _this = this;
    wx.getStorage({
      key: 'appoint_list',
      success: function (res) {
        //console.log(res)
        _this.setData({                  //从缓存获取成功执行渲染
          appoint_list: res.data,
        })
      },
      fail: function (res) {             //从缓存获取失败或未查询到时执行渲染

      },
    })

  },

  //长按取消预约
  longPressCancleAppoint: function (e) {
    var that = this;
    console.log(e.currentTarget.dataset.appointid);
    wx.showModal({
      title: '提醒',
      content: '确定后你将退出本次预约！',
      success: function (res) {
        if (res.confirm) { //判断用户是否点击了确定
          // wx.request({
      //   method: "POST",
      //   url: "",
      //   data: {
      //     'time': appointtime,
      //     'address': address,
      //     'appointnum': appointnum
      //   },
      //   header: {
      //     'content-type': 'application/json'
      //   },
      //   success: function (res) {
      //     wx.showToast({
      //       title: '保存成功',
      //       duration: 2000
      //     })
      //   }
      // })
        }
      }
    })
  },
  //长按预约
  longPressAppoint: function (e) {
    var that = this;
    console.log(e.currentTarget.dataset.appointid);
    wx.showModal({
      title: '提醒',
      content: '确定后你将预约本次驾驶！',
      success: function (res) {
        if (res.confirm) { //判断用户是否点击了确定
           // wx.request({
      //   method: "POST",
      //   url: "",
      //   data: {
      //     'time': appointtime,
      //     'address': address,
      //     'appointnum': appointnum
      //   },
      //   header: {
      //     'content-type': 'application/json'
      //   },
      //   success: function (res) {
      //     wx.showToast({
      //       title: '保存成功',
      //       duration: 2000
      //     })
      //   }
      // })
        }
      }
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.execGetStorageAndRender()
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