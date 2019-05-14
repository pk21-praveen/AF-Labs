var obj = {
    name : 'praveen',
    age : 21,
    print : function () {
        console.log("Name : " + this.name + ", Age " + this.age);
    }
}

console.log("Name : " + obj.name);
console.log("Age : " + obj.age);

obj.print();

