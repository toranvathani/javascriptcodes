let x = 21
console.log(x.toString());
console.log(x.toExponential());
console.log(x.toPrecision(4));
console.log(Number.isInteger(x));
console.log(x.toLocaleString("bn-BD"));

//associativity
let a = 0.1;
let b = 0.2;
let c = 0.3
console.log((x+y)+z);
console.log(x+(y+z));

//Number ref
function func() {  
	let a = true; 
	
	let value = Number(a); 
	console.log(value); 
} 
func();
