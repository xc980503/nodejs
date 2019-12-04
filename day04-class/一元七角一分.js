class Cash{
    //构造函数
    constructor(money){
        this.money = money;
    }
    add(a){
        //this.money==cash1.moeny ==105
        let num = this.money + a.money;
        let arr = num.toString().split(''); //arr=[1, 7, 1]
        return `${arr[0]}元${arr[1]}角${arr[2]}分`
    }
    static add(a, b){
        //a.money 105
        //b.money 66
        let num = a.money + b.money
        let arr = num.toString().split(''); //arr=[1, 7, 1]
        return `${arr[0]}元${arr[1]}角${arr[2]}分`
    }
    //算术运算
    valueOf(){
        return this.money
    }
    //强制类型转换
    toString(){
        let arr = this.money.toString().split('');
        return `${arr[0]}元${arr[1]}角${arr[2]}分`
    }
}

const cash1 = new Cash(105);
const cash2 = new Cash(66);
const cash3 = cash1.add(cash2);
const cash4 = Cash.add(cash1,cash2);
const cash5 = new Cash(cash1+cash2);
console.log(`${cash3}`, `${cash4}`, `${cash5}`)