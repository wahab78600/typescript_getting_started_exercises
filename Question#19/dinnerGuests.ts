let names:string[]=["wahab","masud","saud"]
for(let n of names){
    }

names[1]="haseeb"

for(let  invitedpeople of names){
}


//adding last person
names.push("Junaid")

// adding first person
names.unshift("ali")
 //adding in middle
names.splice(2,0,"taha")

for(let n of names){
}
console.log(`i would like to invite ${names.length} people`)
