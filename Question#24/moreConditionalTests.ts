let str1:string="wahab"
let str2:string="masud"
if(str1=="wahab"){
console.log(true)
}
else{
    console.log(false)
}
if(str1==str2){
console.log(true)
}
else{
    console.log(false)
}
if(str1==str1.toLowerCase()){
    console.log(true)
}
else{
    console.log(false)
}

if(2==2){
    console.log(true)
}
else if(2!=2){
    console.log(true)
}
else if(2>2){
    console.log(true)
}
else if(2<2){
    console.log(true)
}
else if(2>=2){
    console.log(true)
}
else if(2<=2){
    console.log(true)
}
if (true || true){
    console.log(true)
}
if (true || false){
    console.log(true)
}
if (false || false){
    console.log(false)
}
if (true && true){
    console.log(true)
}
if (true && false){
    console.log(true)
}
if (false && false){
    console.log(false)
}
let arr1: String[]=["wahab","saud","masud"]
for(let n of arr1){
if(n == "wahab"){
    console.log("elemen is in array")
    break;
    
}
}
