const Mock = require('mockjs');
const fs = require('fs')

let data = Mock.mock({
    "list|20":[
        {
            "id|+1":1,
            "name": "@cname",
            "城市": "@county(true)",
            "string|1-10": "★"
        }
    ]
})

fs.writeFileSync('./data2.json', JSON.stringify(data))
