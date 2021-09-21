var obj = new Object();
var obj1 = {};

obj = {
    name: "simon",
    age: '20',
    email: "23dddsd",
    contact: {
        phone: "123-123-34",
        telephone: "213"
    }
}
obj.contact.wechat = "chenzq";
console.log(obj)

var a = new Array();
a[0] = "dog";
a[1] = "cat";
console.log(a[1])

for (let i in a) {
    console.log(a[i]);
}

a.push("chenzq")

let ab = 0;
function add() {
    ab++;
}
add();
console.log(ab);


// 闭包
function maker(a) {
    return function (b) {
        return a + b;
    };
}

var x = maker(12);
var sum = x(123);
console.log(sum);
