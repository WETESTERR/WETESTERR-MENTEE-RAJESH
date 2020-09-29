// uncomment to execute the code-block.





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