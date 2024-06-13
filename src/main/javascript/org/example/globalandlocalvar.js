let petName; 

// Global variable

function myFunction() {
    let petName = 'Rocky'
    fruit = 'apple'; 
    console.log(typeof petName +
        '- ' +
        'My pet name is ' +
        petName)
}

console.log(
    typeof petName +
    '- ' +
    'My pet name is ' +
    petName +
    'Fruit name is ' +
    fruit)

 //Local variable
 
myfunction();
anotherFunc();
function myfunction() {
    let petName = "Sizzer"; // local variable
    console.log(petName);
}
function anotherFunc() {
    let petName = "Tom"; // local variable
    console.log(petName);
}
console.log(petName);