let currentusers:string[]=["wahab21","masud12","haseeb21","saud302","sam22"]
let newusers:string[]=["mic21","sae12","wahab21","hs31","sam22"]

let ll:number = 0;
for(let n of newusers){
    
ll=0;
    for(let k of currentusers){

        if(n==k){
                 console.log("the person will need to enter a new username")
                 ll=1
                 break;
        }
        
    }
    if(ll==0){
        console.log(`${n} username is available`)
    }

}