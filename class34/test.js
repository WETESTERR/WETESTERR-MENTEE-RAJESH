// uncomment to execute the code-block.

//Recursion

// function abc(){
//     console.log("hello")
//     abc()
// }

// function quickSort(origArray) {
//     if (origArray.length <= 1) {
//         return origArray
//     } else {
//         var left = []
//         var right = []
//         var newArray = []
//         var pivot = origArray.pop()
//         var length = origArray.length
//         for (var i = 0; i < length; i++) {
//             if (origArray[i] <= pivot) {
//                 left.push(origArray[i])
//             } else {
//                 right.push(origArray[i])
//             }
//         }
//         return newArray.concat(quickSort(left), pivot, quickSort(right))
//     }
// }
// var array = [3, 8, 7, 6, 5, 4, 3, 2, 1]
// console.log("original array: "+array)
// var sortedArray = quickSort(array)
// console.log("sorted array: "+ sortedArray)
















//Switch

// let a = "2"
// switch (a) {
//     case "2":
//         console.log("Entered 2")
//         break;

//     default:
//         console.log("default value")
//         break;
// }

// Write a program to convert digit to words:
// https://stackoverflow.com/questions/14766951/convert-digits-into-words-with-javascript
















//Branching
// var rajesh = "10";
// console.log(typeof rajesh)
// if ("rajesh" == rajesh) {
//     console.log("hello")
// } else {
//     console.log("No Hello")
// }

// if (true) {
//     if (false) {
//         console.log("No hello")
//     } else { console.log("Hello") }
// }























// var a = "Rajesh"
// var arr = a.split("")
// newArr = []
// arrLength = arr.length
// var i = arrLength
// while (i != 0) {
//     newArr.push(arr[i - 1])
//     i--
// }
// console.log(newArr.join(""))

// var arr = [2, 5, 7, 1]
// console.log(arr.unshift(7))

// var arr = []
// arr.push(2)
// arr.push(1)
// arr.push(5)
// arr.push(8)
// console.log(arr)
// console.log(arr.pop())


// var arr = []
// arr.push(2)
// arr.push(1)
// arr.push(5)
// arr.push(8)
// console.log(arr.length)

//ternary opeartor
// var a = 1
// var b = 2
// console.log(a > b ? a : b)


// var a = 10
// var b = "10"
// console.log(typeof a, typeof b)
// console.log(a === b)


// var a = 10
// var b = 10
// console.log(a == b)










//AND operator

// console.log(true && false && true)


// console.log(!true || false && true || true)

// console.log(!0)











//OR operator
// console.log(true||false)
// console.log(false || console.log("rajesh"))