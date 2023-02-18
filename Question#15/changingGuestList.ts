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
