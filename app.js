//app.js
App({
  //模拟测试数据
  appoint_list:[
    {
     appointId:1,
     time:"2019.6.15-2019.7.10",
     address:"跑马场",
     appoint: 45,
     already_appoint:40,
     already_appoint_label:1,
     traineeDetail:[
      {
        name:"张庆1",
        tel:131567843546
      },
       {
         name: "李毅1",
         tel: 131567841234
       },
       {
         name: "牛大1",
         tel: 1775678439876
       }
     ],
    },
    {
      appointId: 2,
      time: "2019.6.15-2019.7.10",
      address: "跑马地",
      appoint: 45,
      already_appoint: 40,
      already_appoint_label:0,
      traineeDetail: [
        {
          name: "张庆2",
          tel: 131567843546
        },
        {
          name: "李毅2",
          tel: 131567841234
        },
        {
          name: "牛大2",
          tel: 1775678439876
        }
      ],
    },
    {
      appointId: 3,
      time: "2019.6.15-2019.7.10",
      address: "九龙",
      appoint: 50,
      already_appoint: 41,
      already_appoint_label:1,
      traineeDetail: [
        {
          name: "张庆3",
          tel: 131567843546
        },
        {
          name: "李毅3",
          tel: 131567841234
        },
        {
          name: "牛大3",
          tel: 1775678439876
        }
      ],
    }
    ],

  execSetStorage: function () { //同步数据到缓存并跳转到结果页面
    wx.setStorage({
      key: 'appoint_list',
      data: this.appoint_list,
    })
  },

  onLaunch: function () {
    this.execSetStorage()
    
  },
  globalData: {
    userInfo: null
  }
})