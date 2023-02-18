function sandwitchitem(items:string[]){

    for(let i=0;i<items.length;i++){

        console.log("The SandWitch Contains %s. ",items[i])
    }
console.log("\n")


}

let arr1:string[] = ["Chicken","Mayo","Vagetables","Ketchup"]
let arr2:string[] = ["Olives","Mayo","Vagetables","Ketchup","Salad"]
let arr3:string[] = ["Mushrooms","Olives","Vagetables","Ketchup"]

console.log(".............. First .............\n")
sandwitchitem(arr1)

console.log(".............. Second .............\n")
sandwitchitem(arr2)

console.log(".............. Third  .............\n")
sandwitchitem(arr3)