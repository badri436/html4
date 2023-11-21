let name = "This is javascript class"
name=21
console.log("string to number",name)

let num = 45;
let array1 = [45, "jfjf", false, "gjgjjg"]
console.log(array1[3])
let obj = {
    name: "hfijfij",
    course:"fkfoei"
}
obj["batch"]="8am"

console.log(obj)

// Operators
// Arithmetic,Logical,Comparison,Ternary
console.log(num + 5)
console.log(num - 5)
console.log(num*5)
console.log(num / 5)
console.log(num % 5)

// <,<=,>,>=,==,!=
console.log(10 >= 5)
console.log((10 != 5 && 10 < 5) || 10 > 7)

// condition ? if true:if false;
10 > 11 ? num = num + 12 : num = 0;
console.log(num)

// Loops
for (let i = 0; i < array1.length; i++){
    console.log(array1[i]+" "+i)
  
}

let y = 0;
while (y < array1.length) {
    console.log(array1[y])
    y++
}

console.log("if loop started")

if (num != 0) {
    console.log(num)
    num = num + 5
    console.log(num)
} else if(10<4) {
    console.log("conditon failed1")
} else {
    console.log("conditon failed")
}
