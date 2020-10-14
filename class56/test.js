// uncomment to execute the code-block.





// for loop for Object.entries()
// var user1 = {
//     name: "Rajesh",
//     age: 32,
//     location: "Banglore"
// }

// var user2 = {
//     name: "Radsdsddsjesh",
//     age: 311,
//     location: "wrer"
// }
// var user3 = {
//     name: "Rajdsdsdesh",
//     age: 3222,
//     location: "r"
// }

// for (const [key, value] of Object.entries(user)) {
//     console.log(key + " : " + value)
// }







// let john = { name: "John" };

// // for every user, let's store their visits count
// let visitsCountMap = new Map();

// // john is the key for the map
// visitsCountMap.set(john, 123);
// visitsCountMap = {
//     1: 123
// }


// console.log(visitsCountMap.get(john)); // 123










// Problem-Statment Solution

// function sum(txt) {
//     var s = 0
//     var reg = txt.match(/\d/g);
//     reg = reg.join("");
//     var sp = reg.split("")
//     for (var i = 0; i <= sp.length - 1; i++) {
//         s = s + parseInt(sp[i])
//     }
//     console.log(s)
// }

// sum("ewfdfefd322")





// var user = {
//     name: "Rajesh",
//     age: 32,
//     fullName: "Rajesh Bhaskar"
// }

// console.log(Object.getOwnPropertyNames(user))

// var arr = Object.values(user)
// console.log(Object.keys(user))
// console.log(Object.entries(user))


// function user(first, last, age, place) {
//     this.firstName = first,
//         this.lastName = last,
//         this.age = age,
//         this.place = place
// }

// var rajesh = new user("Rajesh", "Bhaskar", 32, "Banglore")
// var gaurav = new user("Gaurav", "Ochani", 32, "Pune")

// console.log(typeof gaurav, gaurav)


// var user = {
//     name: "Rajesh",
//     age: 32,
//     learner: function () {
//         console.log("JS value")
//     },
//     "full name": "Rajesh Bhaskar"
// }





// var user = {
//     name: "Rajesh",
//     age: 32,
//     learner: function () {
//         console.log("JS value")
//     },
//     "full name": "Rajesh Bhaskar"
// }

// for (let prop in user) {
//     console.log(prop)
// }








// Property value shorthand
// function makeUser(name, age) {
//     return {
//         name,
//         age
//     }

// }

// var val = makeUser("Rajesh", 32)

// console.log(val)










//Object with const can be changed
// const user = {}


// var user = {
//     name: "Rajesh",
//     age: 32,
//     learner: function () {
//         console.log("JS value")
//     },
//     "full name": "Rajesh Bhaskar"
// }

// user.place = "Banglore"

// delete user.place

//console.log(user["full name"]) //Only for multiname 
// // user.learner()






//Way 1
// var user = {} //Object literal

//Way 2
// var user = new Object()

// console.log(typeof user)
// uncomment to execute the code-block.
