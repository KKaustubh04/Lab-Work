
//Create 2 seperate arrays and concat both of them
let colorSet1=["Red","Blue","White","Black"]                                //declaring array 1
let colorSet2=["Yellow", "Green"]                                           //declaring array 2

console.log("This is color set 1: ", colorSet1)                             //printing array 1 on console
console.log("This is color set 2: ", colorSet2)                             //printing array 2 on console
let colorSet3=colorSet1.concat(colorSet2)                                   //concating array 1 and array 2
console.log("This is color set 3 combination of 1 and 2: ", colorSet3)      //printing concated arrays


//Push one or more elements to the array
colorSet3.push("Aqua")                                                         //pushing one element to array 3
colorSet3.push("Gray")                                                         //pushing another element to array 3
console.log("This is color set 3 after pushing 2 elements: ", colorSet3)       //printing array after pushing elements