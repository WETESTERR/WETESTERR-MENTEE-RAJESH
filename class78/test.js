// uncomment to execute the code-block.

// To see in html
// let f = () => {
//     let i = 1
//     return () => {
//         console.log(i)
//     }
// }
// console.dir(f())


// var add = (function () {
//     var counter = 0
//     return function () {
//         counter = counter + 1
//         return counter
//     }
// })()

// add()
// add()
// console.dir(add())


// function add() {
//     var counter = 0
//     function plus() {
//         counter = counter + 1
//     }
//     plus()
//     return counter
// }

// console.log(add())

// var counter = 0

// function add() {
//     var counter = 0
//     counter = counter + 1
//     console.log(counter)
// }
// add()
// add()
// add()
// console.log(counter)






// let f
// if (true) {
//     let i = 1
//     f = () => {
//         console.log(i)
//     }
// }


// f()









//this

// function bike() {
//     var name = "Ninja"
//     this.maker = "Kawasaki"
//     console.log(this.name + " " + maker)
// }

// var name = "Pulsar"
// var maker = "Bajaj"

// var obj = new bike()
// console.log(obj.maker)




// function abc() {
//         this.def = function () {
//             console.log("hello");
//         };
//     }

// var a = new abc()
// a.def()






// var obj1 = {
//     name:"rajesh",
//     age: function(){
//         console.log(this.name)
//     }
// }

// var obj2 = {
//     name:"gaurav",
//     age: obj1.age
// }

// var name = "Kiran"
// var age = obj1.age

// age()
// obj1.age()
// obj2.age()




//Global variable
// var a = 10

// function abc() {
//     a = 20
//     console.log(a)
// }
// abc()

