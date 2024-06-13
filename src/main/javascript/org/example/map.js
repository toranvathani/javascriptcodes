let map1 = new Map();

map1.set("first name", "sumit");
map1.set("last name", "ghosh");
map1.set("website", "India")
    .set("friend 1","gourav")
    .set("friend 2","sourav");

console.log(map1);
    
console.log("map1 has website ? "+ 
                    map1.has("website"));

console.log("map1 has friend 3 ? " + 
                    map1.has("friend 3"));

console.log("get value for key website "+
                    map1.get("website"));

console.log("get value for key friend 3 "+
                    map1.get("friend 3"));
console.log("delete element with key website " 
                    + map1.delete("website"));
    
console.log("map1 has website ? "+ 
                    map1.has("website"));

console.log("delete element with key website " +
                    map1.delete("friend 3"));

map1.clear();

console.log(map1);

//Iterable
const company = new Map([
	["name", "GFG"],
	["no_of_employee", 200],
	["category", "education"]
]);
function print(key, values) {
	console.log(values + "=>" + key);
}
company.forEach(print);

//Map.set
const setMap = new Map();

setMap.set('name', 'John');
setMap.set('age', 25);
setMap.set('city', 'New York');

console.log(setMap.get('name'));
console.log(setMap.get('age'));
console.log(setMap.get('city'));


