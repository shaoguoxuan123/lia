let Mock = require('mockjs')

let data=Mock.mock({
    "list|10":[{
        'name':'@name',
        'img':'@image(100x100,@color)',
        'title':'@ctitle(5,10)',
        'id':'@id'
    }]
})
module.exports=data.list