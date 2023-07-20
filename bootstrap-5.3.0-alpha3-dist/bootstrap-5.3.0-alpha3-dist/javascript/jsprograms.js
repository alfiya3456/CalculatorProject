// var num = 7
// var isprime = true

// for(let i = 2; i<num; i++){
//     if (num%i==0){
//         isprime=false


//     }
// }
// console.log(isprime)


// even Number:

// var num = 8
// var iseven = false

// for (let i = 2; i<num; i++){
//     if (i%2==0){
//         iseven=true
//     }
// }
// console.log(iseven)

// const number = prompt("enter the number");
// if(number %2==0){
//     console.log("the num is even")
// }
// else{
//     console.log("the num is odd")
// }

var name = 'Heythere'
var type = 'social media'

console.log('${name} is a ${type}platform');

let A = [5,2,4,3,7,8]
let even = []
let odd = []
for (i=0; i<A.length; i++){
    if (A[i]%2==0){
        even.push(A[i])

    }
    else{
        odd.push(A[i])
    }
}
console.log('even num:',even)
console.log('odd num:',odd)

// class Person{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
//     printPerson(){
//         console.log(this.name, this.age);
//     }
// }

// class Model extends Person{
//     constructor(name,age){
//         console.log('Model class');
//         super(name,age);
//     }
// }
// var p1 = new Person('Jin',8)
// p1.printPerson() 