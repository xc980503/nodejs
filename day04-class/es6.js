//创建一个类
//父类(超类)
class Animals{
    //构造函数(默认创建一个空的构造函数)
    constructor(name,sex){
        this.name = name
        this.sex = sex
    }

    //普通方法(实例对象可直接调用)
    eat(){
        console.log(this.name + '吃东西')
    }

    //静态方法(不能通过类的实例对象来调用，只能通过类名来调用)
    static eat(){
        console.log(this.name + '喜欢大骨头')
    }
}

// let a = new Animals('狗', '雄')
// console.log(a);
// a.eat()
// Animals.eat()

class flyAnimals{
    constructor(name, sex, walk){
        this.name = name;
        this.sex = sex;
        this.walk = walk;
    }
    eat(){
        console.log(this.name + '吃东西')
    }
    walkk(){
        console.log(this.name + '会飞')
    }
}

// let f = new flyAnimals("鹦鹉", '雌', '飞')
// f.eat();
// f.walkk();

//子类
class moveAnimals extends Animals{
    constructor(name, age, say){
        //继承父类的属性
        super(name, age);
        this.say = say;
        this.eat();
        this.sayy();
    }
    sayy(){
        console.log(this.name + '会打鸣')
    }
    eat(){
        console.log('子类上的eat')
    }
}
let m = new moveAnimals('火鸡', '公')
// m.eat();
// m.sayy();
moveAnimals.eat()