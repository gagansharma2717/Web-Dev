// object => group of key,value pair
// In Java it is HashMap

// key : value -> property
// key : function -> method
let cap = {
    name: "Steve",
    lastName: "Rogers",
    address: {
        city: "Manhatten",
        state: "New York"
    }
    ,
    age: 35,
    isAvenger: true,
    movies: ["First Avenger", "Winter Soldier", "Civil War"],
    sayHi: function ()
    {
        console.log("Hello");
    }
    

}

// console.log(cap.name);
// console.log(cap.age);
// console.log(cap.movies[1]);
// cap.sayHi();

//SET/UPDATE
// //console.log(cap);
// cap.age = 36;
// cap.isAvenger = false;
// cap.friends = ["Tony", "Bruce", "Peter"];
// console.log("............................................");
// console.log(cap);

//Delete/Remove
// console.log("............................................");

// delete cap.address
// console.log(cap);

for (let key in cap)
{
    console.log(key, ": ", cap[key]);
}

let propKey = "age";
console.log(cap[propKey]);
//Actually ho kya rha h
console.log(cap["age"]);
// Same as
console.log(cap.age);
//Difference is 1st vala variable ki value ke basis pr search krta h 
//and Second vala directly key ki property ko search krta h