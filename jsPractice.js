// let str = "   Hello Angular World   ";



// console.log(str.length);

// console.log(str.toUpperCase());

// console.log(str.toLowerCase());

// console.log(str.trim());

// console.log(str.includes("Angular"));

// console.log(str.trim().endsWith("angular"));

// console.log(str.trim().split('n'));

// console.log((str.replace('Angular','js')));

// let text = "JavaScript";

// console.log(text.substring(0, 4));



// const arr = [
//   ["name", "Anil"],
//   ["age", 25]
// ];

// const obj = Object.fromEntries(arr);

// console.log(obj);

// const users = [
//   { name: "Anil", skills: ["JS", "Angular"] },
//   { name: "Rahul", skills: ["Node", "Mongo"] }
// ];

// let skills=users.flatMap(item=>item.skills)
// console.log(skills);


// let skills1=users.map(item=>item.skills)
// console.log(skills1);


// let arr=[1,2[34,23[34,32]],32,35]

// let newArr=arr.flatMap(2)
// console.log(newArr);







// const user = { name: "Anil", age: 25 };

// const result = Object.entries(user);

// console.log(result);








// let arr=[1,2,3,4,5,6,7,8,9];
// let arr1=[97,5,64]
// let merge=arr.concat(arr1)
// console.log(merge);




//  arr.slice(3,5)
// arr.splice(1,3)
// arr.splice(1,2,78)
// console.log(arr);


// arr.push(10)
// console.log(arr);
// arr.pop(9)
// console.log(arr.pop());




// const newArr=arr.map(item=> item*item)
// console.log(newArr);


// let newArr=arr.filter(item=>item %2==0)
// console.log(newArr);

// let newArr=arr.reduce(num,dem=> num+dem)
// console.log(newArr);

// let newarr1=arr.forEach((num)=>{
//   console.log(num*4);

// })
// console.log(newarr1)


// const users = [
//    {id:1, name:"Anil"},
//    {id:2, name:"Rahul"}
// ];

// const user = users.find(u => u.id === 2);

// console.log(user);


// const nums = [1,2,3,4,2,3,2]
// let hasEven=nums.some(item=>item%2===0);

// console.log(hasEven);


// const nums = [2,3,6];

// const allEven = nums.every(n => n % 2 === 0);

// console.log(allEven);



const user = [
  { name: "Anil", age: 25 , branch:'cse'},
  { name: "yogesh", age: 22 , branch:'cse'},
  { name: "girag", age: 23,branch:'ece' },
  { name: "rag", age: 12 ,branch:'ece'}
];



const youngest=user.reduce((acc,cur)=>{
  if(!acc[cur.branch] || cur.age<acc[cur.branch].age){
    acc[cur.branch]=cur
  }
  return acc
},{})
console.log(youngest);


const avgAge=Object.entries(
  user.reduce((acc,cur)=>{
    if(!acc[cur.branch]){
      acc[cur.branch]={total:0,count:0}
    }
    acc[cur.branch].total +=cur.age;
    acc[cur.branch].count++;
    return acc;

  },{})
).reduce((final,[branch,data])=>{
    final[branch]=data.total/data.count;
    return final
},{})

console.log(avgAge)







// const grouped=user.reduce((acc,cur)=>{
//   if(!acc[cur.branch]){
//     acc[cur.branch]=[]
//   }
//   acc[cur.branch].push(cur)

//   return acc
// },{})
// console.log(grouped);



// let  filUser=user.filter((item)=>{
//   console.log(item.name=='yogesh')

// })

// let newUser=user.sort((a,b)=> a.age-b.age)
// console.log(newUser);

// let newUser1=user.sort((a,b)=> b.age-a.age)
// console.log(newUser1);



// for(let i=0;i<user.length;i++){
//     console.log(Object.keys(user[i]));
// }

// for(let i=0;i<user.length;i++){
//     console.log(Object.values(user[i]));
// }


// for(let i=0;i<user.length;i++){
//     console.log(Object.entries(user[i]));
// }




// const names=user.map(item=>item.name)
// console.log(names);

// console.log(Object.values(user));

// for(let i=0;i<user.length;i++){
//   console.log(Object.values(user[i]));
// }

// for(let i=0;i<user.length;i++){
//   console.log(Object.entries(user[i]));
// }






// const user = [
//   { name: "Anil", age: 25 },
//   { name: "yogesh", age: 22 },
//   { name: "girag", age: 23 },
//   { name: "rag", age: 12 }
// ];

// const user1=[{
//   name:'yogesh',
//   age:22
// }]


// let copyUser=Object.assign({},user,user1)
// console.log(copyUser);


















// map,
// filter,
// reduce,
// find,
// some,
// every,
// foreach,
// sort



// keys,
// values,
// entries,
// fromentries,
// assign
// freeze,
// seal,



// push,
// pop,
// shift,
// unshift,
// splice,
// slice,
// concat,
// includes,
// indexof
// length,
// toUpperCase,
// toLowerCase,
// trim,includes,
// startsWith,
// endsWith,
// split,
// replace,
// substring

// setTimeout
// setInterval
// clearInterval
// clearTimeout

// Hi Sir , these are methods I covered upto now
