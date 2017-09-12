//app.js
App({
 
  showModel:function(){
     wx.showToast({
  title: '正在加载....',
  icon: 'loading',
  duration: 5000
})
  },
  globalData:{
    url:"https://anmoo.xin/api",
    curl: "https://anmoo.xin",
    userInfo:null,
    appId:"8262219382683318",
    appKey:"4VDh3kc8FAIEpDCoEIeZrGWRLUn6jl7M",
    aesKey:"QPRqUsJPNCGuW76S",
    ivKey:"9ndabdMey3myTPp3"
  }
})