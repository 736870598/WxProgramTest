Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    // proList : null
    proList: [
      {
        headIcon: '/image/recommend_avatar_1.png',
        nickName: 'recommend_avatar_1',
        userName: 'sasdadasdasdasdasd'
      },
      {
        headIcon: '/image/recommend_avatar_2.png',
        nickName: 'recommend_avatar_2',
        userName: 'sasdadasdasdasdasd'
      }, {
        headIcon: '/image/recommend_avatar_3.png',
        nickName: 'recommend_avatar_3',
        userName: 'sasdadasdasdasdasd'
      }, {
        headIcon: '/image/recommend_avatar_4.png',
        nickName: 'recommend_avatar_4',
        userName: 'sasdadasdasdasdasd'
      }, {
        headIcon: '/image/recommend_avatar_5.png',
        nickName: 'recommend_avatar_5',
        userName: 'sasdadasdasdasdasd'
      },
      ]
  },

  toDetail: function(e){
    console.log(e);
    var index = e.currentTarget.dataset.index;
    console.log(index);
  },
  onLoad: function(){

    this.getProList();
  },

  getProList: function(){
    var self = this;
    wx.request({
      url: 'http://host.gisoft.top:8889/api/Account/SerchUser',
      method: 'POST',
      data: {
        otherId: "司令",
        data: "563adf6d-c88f-4a93-abf8-a2ea2f803f58"
      },
      success: function(res){
        console.log(res)
        // self.setData({
        //   proList: res.data.data
        // })
      },
      fail: function(res){
        console.log(res)
      }
    })
  },

  toImage: function(e){
    // var index = ;
    wx.previewImage({
      urls: [e.currentTarget.dataset.src],
    })

  }





})