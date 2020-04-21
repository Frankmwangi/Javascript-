// rest parameter
/*onst double = (...nums) => {
console.log(nums);
return nums.map(num => num*2);
}
const result = double(1,2,3,4,5,6,7,8,);
console.log(result);
//spread syntax (arrays)

const people = ['shaun','ryu','crystal'];
const members = ['mario','chun-li',...people];
console.log(members);
//spread syntax
const person ={name: 'shaun',age: 30,job: 'net ninja'};
const personClone = {...person};
console.log(personClone);*/
/*const namesArray = ['ryu','chun-li','ryu','shaun'];
console.log(namesArray);

//const nameset = new Set(['ryu','chun-li','ryu','shaun']);
const nameset = new Set(namesArray);
console.log(nameset);
const uniqueNames = [...nameset];
console.log(uniqueNames);

const ages = new Set();
ages.add(20);
ages.add(25);
console.log(ages.has(20));*/
const symbolOne =  Symbol();
const symbolTwo = Symbol();
console.log(symbolOne , typeof symbolOne);