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

console.log("We can invite only two people for dinner")

for(let i:number = 0;i<=names.length;i++){
    console.log(`Sorry ${names.pop()} you are not invited in the party`)
}
console.log("..............................")

for(let n of names){
    console.log(`You are still invited : ${n}`)
}

for(let n of names){
    names.pop()
}
names.pop()

for(let n of names){
    console.log(n)
}
