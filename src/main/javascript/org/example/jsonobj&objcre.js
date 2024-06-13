//Json obj
const jsonString = '{"name": "John", "age": 30}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); 
console.log(jsonObject.age); 

// Object creation 
let student = { 
    name: "Martin", 
    class: "12th", 
    section: "A", 
  
    studentDetails: function () { 
        return this.name + " " + this.class 
            + " " + this.section + " "; 
    } 
}; 
 
console.log("STUDENT " + student.studentDetails());