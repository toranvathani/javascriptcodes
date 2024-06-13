//Constant
const person = {
    first_name: "Pankaj",
    last_name: "Singh",
    Age: 20,
    About: "Web Developer and Competitive Programmer"
};

console.log(person);

person.first_name = "Aryan";
person.last_name = "Yadav";
person.Age = 22;
person.About = "Commerce undergraduate";

console.log(person);

//Variable
var test = 12;
function foo(){
    var test = 100;
    console.log(test);
}
foo();
console.log(test);
