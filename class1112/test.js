var test = function () {

    this.myNameIsTest = function () {
        console.log("test")
    }

}
module.exports = new test();












// //************************ */
// // class abc {
// //     constructor() {
// //         this.abc = abc
// //     }
// // }

// // is same as 

// // function abc(){
// //     this.abc = abc
// // }
// //************************* */



// class Employee {
//     constructor(name, salary, dept) {
//         this.name = name
//         this.salary = salary
//         this.dept = dept
//     }

//     increaseSalary() {
//         console.log(this.name)
//         return "Increased salary"
//     }

//     static abc(){
//         return "hello"
//     }
// }

// // gaurav = new Employee("gaurav", "10000", "SE")
// // rajesh = new Employee("rajesh","100000","SE")

// // console.log(gaurav)
// // console.log(gaurav.increaseSalary())
// // console.log(Employee.abc())

// //Inheritance
// class HR extends Employee {
//     xyz(){
//         console.log("XYZ")
//     }

//     increaseSalary() {
//         console.log("I am from HR")
        
//     }

// }

// test = new HR("gaurav", "10000", "SE")

// test.increaseSalary()
// // test.xyz()



