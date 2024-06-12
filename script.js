// js(programming language) implements dynamic effects like click events, load external data, changepage content, play video, animate charts etc
// transfomrs normal static webpage to fully-fledged web application


console.log("Hello world") // go to console in the webpage to see this printed output

// user click event initiation: like css, select some elements first
const btn = document.querySelector(".btn-open"); // it will return button open
const form = document.querySelector(".recommendation");

//using event handler like addEventListner to react to the click event
btn.addEventListener("click", function() {
    // console.log("CLICK");
    //use js to add and remove the hidden class. needs a condition to know if the recommendation is hidden or not. so 
   // we also need to select the form

    if(form.classList.contains("hidden")) // if the list of the class from the form contains hidden class , then we wanna do sth
    {  
        form.classList.remove("hidden");// we want to remove that class. no dot before hidden as dot use for class, here we want only the element
        btn.textContent = "Close"; // change the text from recommendation to close
    }
    // we decide through js. if it is not hidden. then , clicking it, it will go to hidden
    else{
        form.classList.add("hidden");
        btn.textContent = "Recommendation"; // so that when we close, the text changes back to recommendation from close
    }
})

/*
// All of them are Value, even btn-open or document.querySelector(".btn-open") are value. so we use varriables. instead selecting that big query-btn element again % again, we can simply declare btn and use that in EventListener function
//  2 varriables. cont and let. let variables can be updated later
// 7 different data types. string, number, boolean, null and undefined are most imp ones. in other pl, we need to define which data tyoe for each varriable. but here let can carry number or string.

let votesInteresting = 5;
let votesMindblowing = 2;
const text = "I am Agnila"; // assigning text constatnt variable to I am Agnila value

// operator
votesInteresting = votesInteresting + 1;
votesInteresting++; //same thing as previous line
console.log(votesInteresting); // we need to see output from console as we did not manipulate the page yet

let totalUpvotes = votesInteresting + votesMindblowing;
console.log("Upvotes:", totalUpvotes); //passing multiple values in console at once by comma

//logical operator
let votesFalse = 1;
const isCorrect = votesFalse < totalUpvotes; // eqaul can be checked by using ===
console.log(isCorrect);
// more operators can be found in mdn javascript operators. (operator precedence)

//functions: takes raw material in one side as input and processes it into ready to use product as output in other side
console.log(parseInt("24.53362cccggg")) //intakes string and find a number from the string
//whatever i s in the 1st parenthesis of function , is called argument of the function
*/


//creating own function
function calcRecommendTime(year)//inout when recommendation were given
    {
        const currentyear = new Date().getFullYear(); //2023; this built in function calls direct year by js
        //2023-2019
        const age = currentyear - year;
        //now we want the output of the function
        
        // this ef else statement is made if recommendation time is greater
        if(age >=0) return age; // one line code , doesnt need curly braces
        else return "Impossible year";

        return age;
    }

    //this age1 is the input from client
const age1 = calcRecommendTime(2019);
console.log(age1);

    //resuing the function. this is the purpose of creating a function.
console.log(calcRecommendTime(2022));
    //not all function need to accept input data or return dadta. we can do only some other computing in function

console.log(calcRecommendTime(2037))
    // fact generated in 2037, it gives -13 value when fact generated time > . so we use if else

let votesInteresting = 5;
let votesMindblowing = 0;
//console.log(votesInteresting === votesMindblowing);

if (votesInteresting === votesMindblowing) { //if condition is giving a boolean output
    // another function alert. when condition gets true, it pops a new small window. we passed our string there and cant load the window
    alert("this function is equally interesting and mindblowing")
}
else if(votesInteresting > votesMindblowing){
    console.log("good skills and recommendation");
} else if(votesInteresting < votesMindblowing) {
    console.log("trustworthy skills");
}

// important fundamental
//truthy values and falsy values: ifalsy values will converted to false when there is boolean condition like in if functions.
// falsy values: 0, null and undefined.
// truthy value; everything else. if is not false, it will run the code
if(votesMindblowing){
    console.log("Minblowing fact")
} else{
    console.log("Not so special...")
}



// ternary operator: alternative of if else statement
