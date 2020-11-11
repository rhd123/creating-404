const db = wx.cloud.database();
//返回所有数据,最多返回20条
db.collection("book").get(
    {
      success:res => {
        this.setData({
          booklist : res.data
        });
        
        },
        fail: err => {
            console.log(err)
        }
    }
)
//返回前8条数据，一页大约显示8本书
db.collection("book").limit(8).get(
    {
      success:res => {
        this.setData({
          booklist : res.data
        });
        
        },
        fail: err => {
            console.log(err)
        }
    }
)
// 返回类别为数计的书籍
db.collection('book').where({
    class: '数计'
  })
  .get({
    success: function(res) {
     
      console.log(res.data)
    },
    fail: err => {
        console.log(err)
    }
  })