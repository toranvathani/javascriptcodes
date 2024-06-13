function welcomeMsg(name) {
    return ("Hello " + name + " welcome to India");

}

let nameVal = "Admin";

console.log(welcomeMsg(nameVal));

//anonymous fun
let add = function (a, b) {
    return a + b;
}
console.log(add(5, 4));


// Objects declaration
let employee = {
    details: function (designation, experience) {
        return this.name
            + " "
            + this.id
            + designation
            + experience;
    }
}

let emp1 = {
    name: "A",
    id: "123",
}
let emp2 = {
    name: "B",
    id: "456",
}
let x = employee.details.call(emp2, " Manager ", "4 years");
console.log(x);

function welcomeMsg(name) { 
    console.log("Hello " + name  
        + " welcome to GeeksforGeeks"); 
} 

  
// calling fun complete ref 
welcomeMsg(nameVal);