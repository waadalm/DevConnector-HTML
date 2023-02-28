//jason object : javascript object notation
//it is of key value pair format
// 'key' : 'value'
//{"name":"jason","age":20, "location":"chennai"}

//---------------------------------------EXAMPLE 1--------------------------------------------------

// let personObj= {
//     name:"Waad",
//     age:23,
//     gender: "female",
//     location:"AD"
// };
// console.log(person0bj);

// person0bj.contactNumber = 1234567890; // add contact number to the list.
// console.log(personObj);

// // it will print only the name.
// console.log(personObj.name);

// //extracting the keys only.
// let key = Object.keys(personObj);
// console.log(key);

// //extracting the value only.
// let values = Object.values(personObj);
// console.log(values);

// for (const key in personObj) {
    
//     const value = personObj[key];
//     console.log ("key : " + key + " value : " + value);    

// }

//---------------------------------------EXAMPLE 2--------------------------------------------------
let personObj = [
    {
    name:"Waad",
    age:23,
    gender: "female",
    location:"AD"},
//array of json objects

{
    name:"nouf",
    age:25,
    gender: "female",
    location:"AD",
    sistername:"shahad",
    broname:"saeed",
    fathername: "Muneef"
}
];

// for (const key in personObj) {
    
//     const value = personObj[key];
//     // console.log ("key : " + key + " value : " + JSON.stringify(value));    
    
//     //extracte the info from the json object
//     for (const ikey in value ) {

//         const element = value[ikey];
//         // console.log("ikey " + ikey + " value " + element);
//         ;
//     }

// }

//---------------------------------------EXAMPLE 2--------------------------------------------------
// print only the names.
// for (const key in personObj) {
    
//     const value = personObj[key];
//     console.log ("key : " + key + " value : " + JSON.stringify(value));    

//     for (const ikey in value) {
//       if (ikey === "name") {

        
//         const element = value[ikey];
//         console.log("ikey " + ikey + " value " + element);
//     }
// }}

personObj.forEach((e) => console.log(e));
let result = personObj.map((e) => e.name);
console.log(result);
