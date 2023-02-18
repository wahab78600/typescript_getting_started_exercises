let username:string[]=["Wahab","masud","saud","admin","hassan","jawad"]

 let end:number = username.length
for(let i:number=0;i<end;i++){

    username.pop()
}
if(username.length == 0){
    console.log("We need to find some users!")
}

