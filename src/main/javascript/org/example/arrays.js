//Array Constructor
let names = new Array();
console.log(names);

let courses = new Array("HTML", "CSS", "Javascript", "React");
console.log(courses);

let arr = new Array(3);
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
console.log(arr);

//Delete
let emp = {
    firstName: "Raj",
    lastName: "Kumar",
    salary: 40000
}

console.log(delete emp.salary);
console.log(emp);

//Array filter
function isPositive(value) {
    return value > 0;
}
 
function func() {
    let filtered = [112, 52, 0, -1, 944]
    .filter(isPositive);
    console.log(filtered);
}
 
func();

//Shift
let array = ["Hello", "India", "JavaScript"];
let firstElement = array.shift();
console.log(firstElement);
console.log(array);
