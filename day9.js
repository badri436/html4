let array1 = [45, "jfjf", false, "gjgjjg"]
array1[6] = "javascript"
console.log(array1)
switch ("friday") {
    case "monday":
        console.log("option monday is selected")
        break;
    case "tuesday":
        console.log("option tuesday is selected")
        break;
    default:
        console.log("no valid option is selected")
        break;
}
let y = 0;
console.log("do while loop started")
do {
    console.log(array1[y])
    y++
    
} while (y > array1.length)

console.log("do while loop ended")

for (let element of array1) {
    console.log(element)
}

let obj = {
    name: "hfijfij",
    course:"fkfoei"
}

for (let o in obj) {
    console.log(o)
    console.log(obj[o])
}

console.log("21"===21)
let str = "This is javascript class"
// String Methods
let strToArray=str.split(" ")
console.log(strToArray)
console.log(str.length)
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.charAt(3))
console.log(str.includes("java1"))
console.log(str.slice(-5, -1))
console.log(str.substring(3, 7))
console.log(str.substr(7, 2))


let str1 = "hele"
console.log(str1.padStart(6, "he"))

let str2 = "  hel"
console.log(str2==str1)
console.log(str2.trim() == str1)
console.log(str1.concat("lo"))
console.log(str1 + "lo")
console.log(str1.repeat(2))
console.log(str1.startsWith("he"))

// String search Methods
console.log(str1.indexOf("e",2))
console.log(str1.lastIndexOf("e"))