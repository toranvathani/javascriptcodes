//Arithmetic
let f = -(4 ** 2) 
let g = 2 ** 5 
let s = 3 ** 3
let t = 3 ** 2.5 
let c = 10 ** -2 
let d = 2 ** 3 ** 2 
let e = NaN ** 2

console.log(f)
console.log(g)
console.log(s)
console.log(t)
console.log(c)
console.log(d)
console.log(e)

//Assignment
let x = 12;
let y = null;

let z = 13;

x ??= z;
 
y ??= z;

console.log(x)  
console.log(y) 

//Comparison
let val1 = 5;
let val2 = "5";

console.log(val1 <= 15);
console.log(val2 <= "0");        
console.log(val1 <= "0");
console.log(val2 <= 15);

//Logical
let i = 0;
console.log((!i));
console.log(!!i);

//Bitwise
let a = 6;
let b = 1;

console.log("A & B = " + (a & b));

console.log("A | B = " + (a | b));

console.log("~A = " + (~a));

console.log("A >> B = " + (a >> b));

console.log("A >>> B = " + (a >>> b));

console.log("A << B = " + (a << b)); 