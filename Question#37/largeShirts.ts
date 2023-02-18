function makeshirt(size:string="large", text:string){
    if(size=="large"||size=="medium"){
        console.log("I LOve TypeScript")
    }
    if (size=="small"){
        console.log(`shirt size is ${size} and the text printed on it is ${text}`)
    }
}
makeshirt("large","I Love")

makeshirt("small","I make")