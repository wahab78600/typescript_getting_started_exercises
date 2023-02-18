let names:string[]=["wahab","masud","saud"]
for(let n of names){
    console.log(`i would like to invite ${n}`)

}

console.log(`${names[1]} donot come to the party`)
names[1]="haseeb"
console.log(`new list is`)
for(let  invitedpeople of names){
    console.log(`i would like to invite ${invitedpeople}`)
}
console.log("found a bigger dinner table ......")

//adding last person
names.push("Junaid")

// adding first person
names.unshift("ali")
 //adding in middle
names.splice(2,0,"taha")

for(let n of names){
    console.log(`I would like to invite : ${n}`)
}