let username:string[]=["Wahab","masud","saud","admin","hassan","jawad"]
for(let n of username){
    if(n=="admin"){
        console.log("Hello admin, would you like to see a status report?")
    }
    else{
        console.log(`Hello ${n} thank you for logging in again.`)
    }
}