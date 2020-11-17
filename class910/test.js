
// function Rajesh() {
//     return new Promise(function (resolve, reject) {
//         const error = false
//         if (!error) {
//             setTimeout(() => {
//                 console.log("I am Rajesh. Understood Promise")
//             }, 10000)
//             resolve()
//         }
//         else {
//             reject("Not understood Promise")
//         }
//     })
// }
//Way 1
// Rajesh().then(function () {
//     console.log("Good")
// }).catch(function (error) {
//     console.log("Bad " + error)
// })

//Way2
// async function abc(){
//     await Rajesh()
// }

// abc()

//Way 3
// (async () => {
//     await Rajesh()
// })()













// V8 Chrome

// let arr = [1,2,7]
// console.log(arr)
// VM136:2 (3) [1, 2, 7]0: 11: 22: 7length: 3__proto__: Array(0)concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}__proto__: Object
// undefined
// arr.__proto__
// [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}__proto__: Object
// Array.prototype
// [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
// arr.__proto__.__proto
// undefined
// arr.__proto__.__proto__
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
// Object.prototype
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
// arr.__proto__.__proto__.__proto__



// Function.prototype.mybind = function(){
//     console.log("this is my custom function")
// }

// function abc(){
//     console.log("abc")
// }

// abc.mybind()
// abc.mybind()




// let arr = ["Akshay", "Aditya"]

// console.log(arr.__proto__)

// let object = {
//     name: "Rajesh",
//     city: "Banglore",
//     getIntro: function () {
//         console.log(this.name + " from " + this.city)
//     }
// }

// let object2 = {
//     name:"Gaurav"
// }

// In real coding, avoid doing this.
// object2.__proto__ = object

// console.log(object2.name)
// console.log(object2.getIntro())