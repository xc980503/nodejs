const deepCopy = (origin) => {
    let res;
    if (typeof origin === 'object') {
        // 是引用
        if (Array.isArray(origin)) {
            // 是数组
            res = origin.map(item => {
                return deepCopy(item)
            })
        } 
        // else if (origin.test) {
        //     // 是正则
        //     res = origin
        // }
        else if (origin === null) {
            res = null;
        }
        else {
            res = {};
            // 是对象
            for (let k in origin) {
                res[k] = deepCopy(origin[k]);
            }
        }
    } else {
        // 是基本类型
        res = origin
    }
    return res;
}

// let obj = {
//     a: 1,
//     b: [1, 2, 3],
//     c: {},
//     d: /\d{1,}/
// };

// let copyOne = deepCopy(obj);
// let copyTwo = obj
// obj.d = /\d{3,}/

// let obj = [1,3,5];

// let copyOne = deepCopy(obj);
// let copyTwo = obj
// obj[1] = 55

let obj = 6;

let copyOne = deepCopy(obj);
let copyTwo = obj
obj = 55

console.log(copyOne, copyTwo)