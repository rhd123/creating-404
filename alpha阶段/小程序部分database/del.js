const db =wx.cloud.database(); 
del: function(event){
  console.log(event)
  db.collection('solder').doc('this.data.id').remove({
    success: function(res) {
      console.log(res)
    },
    fail: err => {
      console.log(err)
    }
  })
}