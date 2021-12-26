// Non-Primitve => Arrays, Objects, Functions

//Functions

//Defination
function sayHi(param)
{
   // console.log("Hello from sayHi");
    console.log("Param received", param);
    //return "returned from function";
    let rVal = Math.random() > 0.5 ? true : "less then 0.5";
    return rVal;
}

// sayHi(10);
// sayHi(10.5);
// sayHi("Hello");


let rVal = sayHi([10, 20, 30, 40, 50]);
console.log("Retuned value is :", rVal);

// In js you do not need parameter type and do not need to define return type 
