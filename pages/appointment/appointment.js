// pages/appointment/appointment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tel: "",
    password: "",
  },


  telinput: function (e) {
    this.setData({
      tel: e.detail.value
    })
  },
  passwordinput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  //点击登陆的时候触发的事件
  signin: function () {
    var that = this;
    //登陆的时候要传过来的参数
    var name = that.data.tel
    var pwd = that.data.password
    if (that.data.tel == "") {
      wx.showModal({
        title: "信息提示",
        content: "手机号不能为空!"
      })
    } else if (that.data.password == "") {
      wx.showModal({
        title: "信息提示",
        content: "请输入密码!"
      })
    } else { 
    //console.log("用户名：" + name + "密码：" + pwd)
    //发送ajax请求到服务器-登录
    wx.request({
      url: 'http://127.0.0.1:8080/admin/',
      data: {
        name: name,
        pwd: pwd,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' ,// 默认值
      },
      method: 'POST',
      dataType: 'json',
      success: function (res) {
        // console.log("成功")
        // console.log("返回的结果"+JSON.stringify(res.data.msg))
        // console.log("返回的结果" + JSON.stringify(res.data.status))
        var status = JSON.stringify(res.data.status)
        var msg = JSON.stringify(res.data.msg)
        //将返回信息存在缓存中
        wx.setStorage({
          key: 'auth',
          data: msg,
          success: function (res) {
            if(msg=="admin"){ 
              wx.navigateTo({
              url: '/pages/appointment/admin',
            })
            }else if(msg=="trainee")
            {
              wx.navigateTo({
                url: '/pages/appointment/trainee',
              })
            }
          }
        })
        //弹出提示
        wx.showModal({
          title: "信息提示",
          content: msg
        })
        if (status == 0) {
          // console.log(status)
          //跳转到index页面
          wx.switchTab({
            url: '../index/index',
          })
        }
      },
      fail: function (res) {
        wx.showToast({
          title: '服务器网络错误,请稍后重试',
          icon: 'loading',
          duration: 1500
        })
      },
      complete: function (res) {
      },
    })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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