function People(name, age, sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
}

People.prototype.say = ()=>{
    console.log('aaaa')
}

var zzj = new People('zzj', 19, '男');
zzj.say()