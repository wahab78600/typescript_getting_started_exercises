let ordinalnumbers:string[]=["1st","2nd","3rd","4th","5th","6th","7th","8th","9th"]
for (let n of ordinalnumbers){
    console.log(n)
}
let ordinalnumber:string[]=["1","2","3","4","5","6","7","8","9"]


console.log("BY LOOP")
for(let k of ordinalnumber){
    if(k=="1"){
        console.log(k+"st")
    }
    else if(k=="2"){
        console.log(k+"nd")
    }
    else if(k=="3"){
        console.log(k+"rd")
    }
    else {
        console.log(k+"th")
    }
       
}