//set.keys
let set1 = new Set();

set1.add(50);
set1.add(30);
set1.add(40);
set1.add("India");
set1.add("Shine");

let getValues = set1.values();

console.log(getValues);

let getKeys = set1.keys();

console.log(getKeys);

//union
Set.prototype.union = function(otherSet)
{
    let unionSet = new Set();

    for(let elem of this)
        {
            union.Set.add(elem);
        }

    for(let elem of OtherSet)
        union.Set.add(elem);

    return unionSet;
}

let set3 = new Set([10, 20, 30, 40, 50]);
let set2 = new Set([40, 50, 60, 70, 80]); 

let unionSet = set3.union(set2);

console.log(unionSet.values());

//elements ordering
let sample = new Set();
sample.add("Hello");
sample.add("Bro");
sample.add("How");
sample.add("Are");
sample.add("You")

let getit = sample[Symbol.iterator]();
console.log(getit.next());
console.log(getit.next());
console.log(getit.next());
console.log(getit.next());
console.log(getit.next());


//Iterate set
function iterateSet() {
    const mySet = new Set();
    mySet.add("Delhi");
    mySet.add("Bangalore");
    mySet.add("Dharwad");

    [...mySet].forEach(value => {
        console.log(value);
    });
}

iterateSet();

//Sort a set
let myset = new Set()

myset.add(3);
myset.add(2);
myset.add(9);
myset.add(6);

console.log(myset);

const sortedArray = [...myset].sort();
const newSet = new Set(sortedArray);
console.log(newSet);

//Set reference
const mySet = new Set(); 

mySet.add("California"); 
mySet.add("India"); 
mySet.add("California"); 
mySet.add(10); 
mySet.add(10); 

const myObject = { a: 1, a: 5 }; 

mySet.add(myObject); 

console.log(mySet); 

