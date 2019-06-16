// pages/appointment/appointment/admin/admin.js
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
  longPressDeleteAppoint: function (e) {
    var that = this;
    console.log(e.currentTarget.dataset.appointid);
    wx.showModal({
      title: '提醒',
      content: '确定后你将删除本预约！',
      success: function (res) {
        if (res.confirm) { //判断用户是否点击了确定

        }
      }
    })
  },
  //预约详情
  tapAppointDetail: function (e) {
    var that = this;
    var appointid = e.currentTarget.dataset.appointid
    console.log(e.currentTarget.dataset.appointid);
    wx.showModal({
      title: '提醒',
      content: '查看详情',
      success: function (res) {
        if (res.confirm) { //判断用户是否点击了确定
          wx.navigateTo({
            url: 'traineedetail/traineedetail?appointid='+appointid,
          })
        }
      }
    })
  },


  formSubmit: function (e) {
    console.log(e.detail.value.appointtime)
    console.log(e.detail.value.address)
    console.log(e.detail.value.appointnum)
    var that = this;
    var appointtime = e.detail.value.appointtime;
    var address = e.detail.value.address;
    var appoint = e.detail.value.appointnum;
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