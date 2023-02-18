let locations:string[]=["Pakistan", "China", "America", "England", "Australia"]
console.log("original order of array")
for(let n of locations){
    console.log(n)
}
let locationscopy:string[]=[]
for(let i:number=0;i<locations.length;i++){
    locationscopy[i]=locations[i]
}
console.log("..............................\narray in alphabetical order without modifying the actual list.")

locationscopy.sort()
for(let n of locationscopy){
    console.log(n)
}

console.log("....................\noriginalarray.")
for(let n of locations){
    console.log(n)
}

console.log("..............................\narray reverse alphabetical order..............")
locationscopy.reverse()
for(let n of locationscopy){
    console.log(n)
}
console.log("....................\noriginalarray.")
for(let n of locations){
    console.log(n)
}
//original array reverse order
console.log("............................\nreverse order")
locations.reverse()
for(let n of locations){
    console.log(n)
}
//again reverse order
console.log("............................\nagain reverse order")
locations.reverse()
for(let n of locations){
    console.log(n)
}
//sorting orginal array
console.log(".....................\nalphabetical order original array")
locations.sort()
for(let n of locations){
    console.log(n)
}
//again sorting orginal array
console.log(".....................\norder has been changed in original order")
locations.reverse()
for(let n of locations){
    console.log(n)
}
