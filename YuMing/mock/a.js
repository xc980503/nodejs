const Mock = require('mockjs');
const fs = require('fs')

let data = Mock.mock({
    "list|5":[
        {
            "ym": "@domain",
            "flag|1": true,
            "lastTime": "@date"
        }
    ]
})

fs.writeFileSync('./data.json', JSON.stringify(data))
