// pages/scancode/scancode.js
const app = getApp()
const db=wx.cloud.database()
let qq=''
let tel=''
let name=''

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookdata :{},
    scandata:[{
      namevalue: '',
      TELvalue:'',
      QQvalue:'',
    }],

  },
  
 namechange(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
  },
  QQchange(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
  },
  TELchange(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
  },
  handleName(event){
    name=event.detail.value;
  },
  handleQQ(event){
  qq=parseInt(event.detail.value);
  },
  handleTel(event){
  tel=parseInt(event.detail.value);
  },
  
  handleAddClient(){
  db.collection("client").add({
    data:{
      name:name,
      qq:qq,
      tel:tel,
    },
    success(res){
      console.log("成功添加")
    },
    fail(res){
      console.log("添加失败")
    }
  })
  db.collection("upload").add({
    data:{
      name:name,
      tel:tel,
      qq:qq
      
    },
    success(res){
      console.log("成功添加")
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000
      })
    },
    fail(res){
      console.log("添加失败")
    }
  })
  },
  getopenid:function(){
   console.log(app.globalData.openid)v 
  },
  
})