//1
let school = { 
    name : "Vivekanada", 
    location : "Delhi", 
    established : 1971,
    20 : 1000, 
    displayinfo : function() { 
        console.log(`${school.name} was established 
        in ${school.established} at ${school.location}`); 
    } 

} 
console.log(school.name); 

console.log(school.established); 

//2
const coder = {
    isStudying : false,
    printIntroduction : function(){
        console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
    }
};
const me = Object.create(coder);
me.name = 'Mukul';
me.isStudying = true;
me.printIntroduction();
