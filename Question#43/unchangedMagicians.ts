let magiciansnames:string[]=["masud","haseeb","saud"]

function showmagicians(magiciansnames:string[]){
    for (let n of magiciansnames){
console.log(n)
}
}
showmagicians(magiciansnames)

function makegreat(phrase:string[]):string[]{
    let arr:string[]=[]

    for(let i:number=0; i<phrase.length; i++){
        arr[i]="Great"+phrase[i]
    }

    return arr

}
let arr2:string[]=makegreat(magiciansnames)

showmagicians(arr2)

console.log("...............ORIGINAL ARRAY..................")
showmagicians(magiciansnames)
console.log("...............CHANGED ARRAY...................")
showmagicians(arr2)