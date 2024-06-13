//Date
let date = new Date();
let formattedDate = new Intl.DateTimeFormat('en-IN').format(date);
console.log(formattedDate);

//Promise
let promise = new Promise(function (resolve, reject) {
    reject('Promise Rejected')
})

promise
    .then(function (successMessage) {
        console.log(successMessage);
    })
    .catch(function (errorMessage) {
        console.log(errorMessage);
    }); 

//BigInt
let bigNum = BigInt(
    "123422222222222222222222222222222222222");
  console.log(bigNum);
  
  let bigHex = BigInt("0x1ffffffeeeeeeeeef");
  console.log(bigHex);
  
  let bigBin = BigInt(
    "0b1010101001010101001111111111111111");
  console.log(bigBin);


//Boolean
let e; 
console.log('Boolean(0) is ' + Boolean(0));

console.log('Boolean("") is ' + Boolean(""));

console.log('Boolean(e) undefined is '+ Boolean(e));

console.log('Boolean(-0) is ' + Boolean(-0));

console.log('Boolean(false) is ' + Boolean(false));

console.log('Boolean(NaN) is ' + Boolean(NaN));

console.log('Boolean(null) is ' + Boolean(null));

console.log('Boolean(1>2) is ' + Boolean(1 > 2));

//Proxy/Handler
const courseDetail = {
    name: "DSA",
    time: "6 months",
    status: "Ongoing",
}

const handler = {
    deleteProperty(target, prop) {
        if(prop in target) {
            delete target[prop];
            console.log(`Removed: ${prop}`);
        }
    }
};

const pro = new Proxy(courseDetail, handler);

console.log(pro.name);
delete pro.name
console.log(pro.name);

//WeakMap
function WeakMap() {
	let looseMap = new WeakMap();
	let Ram = {name};
	let Raj = {name};
	let Rahul = {name};
	looseMap.set(Ram, "Ram");
	looseMap.set(Raj, "Raj");
	looseMap.set(Rahul, "Rahul");
	console.log(looseMap);
	console.log(looseMap.has(Ram))
}
WeakMap();

//WeakSet
function WeakSet(){
    let weakSetObject = new WeakSet;
    let objectOne = {};

    weakSetObject.add(objectOne);
    console.log("objectOne added");

    console.log("WeakSet has objectOne : " +
        weakSetObject.has(objectOne));

}
WeakSet();

//Function Generator
let array = ['a', 'b', 'c'];
function* generator(arr) {
    let i = 0;
    while (i < arr.length) {
        yield arr[i++]
    }
}

const it = generator(array);

//JSON
let text = '{"model":[' +
'{"carName":"Baleno","brandName":"Maruti" },' +
'{"carName":"Aura","brandName":"Hyndai" },' +
'{"carName":"Nexon","brandName":"Tata" }]}';

const cars = JSON.parse(text);
console.log("The car name is: " + cars.model[2].carName + 
" of brand: " + cars.model[2].brandName);
