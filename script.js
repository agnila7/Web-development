// js(programming language) implements dynamic effects like click events, load external data, changepage content, play video, animate charts etc
// transfomrs normal static webpage to fully-fledged web application


const initialFacts = [
    {
        id: 1,
        text: "A Java developer, M.Sc. Graduate from Electrical & Computer Engineering Department of the University of Windsor. ",
        source:
          "https://www.linkedin.com/in/agnila-barua/",
        sourceName: "LinekdIn",
        category: "Introduction",
        votesInteresting: 11,
        votesMindblowing: 2,
        votesFalse: 0,
        createdIn: 2019,
      },
      {
        id: 2,
        text: "Graduated with honors in a thesis-based Master of Applied Science program from the University of Windsor",
        source:
          "https://www.linkedin.com/in/agnila-barua/",
        sourceName: "Git",
        category: "About",
        votesInteresting: 11,
        votesMindblowing: 2,
        votesFalse: 0,
        createdIn: 2019,
      },
      {
        id: 3,
        text: "I recently came across an amazing book named The Almanack of Namav Ravikant",
        source:
          "https://nav.al/",
        sourceName: "Naval Ravikant",
        category: "Almanack",
        votesInteresting: 11,
        votesMindblowing: 2,
        votesFalse: 0,
        createdIn: 2019,
      },
      {
        id: 4,
        text: "Toronto Registered Recreations Program helps to find affordable programs",
        source:
          "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
        sourceName: "Toronto e-fun",
          category: "Toronto Recreation Programs",
        votesInteresting: 11,
        votesMindblowing: 2,
        votesFalse: 0,
        createdIn: 2019,
      },
  ];


  const CATEGORIES = [
    { name: "Introduction", color: "#3b82f6" },
    { name: "About", color: "#16a34a" },
    { name: "Almanack", color: "#ef4444" },
    { name: "Toronto Recreation Program", color: "#eab308" },
//     { name: "entertainment", color: "#db2777" },
//     { name: "health", color: "#14b8a6" },
//     { name: "history", color: "#f97316" },
//     { name: "news", color: "#8b5cf6" },
  ];

// console.log(CATEGORIES.find((cat) => cat.name ==="Introduction").color);

console.log("Hello world") // go to console in the webpage to see this printed output

//selecting DOM elements
// user click event initiation: like css, select some elements first
const btn = document.querySelector(".btn-open"); // it will return button open
const form = document.querySelector(".recommendation");
const factsList = document.querySelector(".facts-list");

// console.dir(btn);   // with querry selector, we fetch the html elements. according to Document Object model (DOM);
// all the html elements are js objects. so btn and form in js also object. so we can print it in console


//clear the elements by using js rather than removing from html
factsList.innerHTML ="";
/*
//creating DOM elements
factsList.insertAdjacentHTML("afterbegin", "<li>Saarah</li>");   //insertAdjacentHTML(position, HTML as a string)
factsList.insertAdjacentHTML("afterbegin", "<li>asif</li>"); 
*/

/*
// to pass initialfacts as argumeent in createFactList method, we can call it beforeand
createFactList(initialFacts);
//thius is done, so we can call database Api in the dataArray to avoi hardcoding
// createFactList([{text: "Jonas"}]);  //calling an array from the object
*/


//load data from supabase

loadFacts();    //call the function

//fetch in js is used to create a request from Api 
//to load data we use async funvtion

async function loadFacts(){
    const res= await fetch("https://zifbpsczjfpnhunqcrgj.supabase.co/rest/v1/information", {
        headers:{
            apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppZmJwc2N6amZwbmh1bnFjcmdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI5MDc1NjQsImV4cCI6MjAwODQ4MzU2NH0.qjXvLY0DU5mPn3G58PnMzArJCfPWMuC354J-IV4_Zdo",
            authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppZmJwc2N6amZwbmh1bnFjcmdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI5MDc1NjQsImV4cCI6MjAwODQ4MzU2NH0.qjXvLY0DU5mPn3G58PnMzArJCfPWMuC354J-IV4_Zdo"

        },
    }); //fetch(url string, pass object)

    console.log(res);   //see trhe response
    //Dom objects needs to be converted to json format
    const data= await res.json();
    console.log(data);
    
    //add filter array to the fact
    // const filteredData =data.filter((fact) => fact.category === "Introduction");

    createFactList(data);
}


function createFactList(dataArray){
    // we wont know how many DOM elements in db, once the data come from api, we wont know
// so loop over all the array objects and foe each object create html and join all the html , place the entire array in html
const htmlArr = dataArray.map((fact) => 
`<li class="information">
    <p>
         ${fact.text}
        <a  0000class="hyperlinks"
            href="${fact.source}"
            target="_blank"> (${fact.sourceName})
        </a>
    </p>
    <span class="tag" style="background-color: ${CATEGORIES.find((cat) => cat.name === fact.category).color}">
    ${fact.category}
        </span>
</li>`);
// console.log(htmlArr);
//join
const html = htmlArr.join("");
factsList.insertAdjacentHTML("afterbegin",html);

}


//using event handler like addEventListner to react to the click event
//toggle from visibility
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

//filter and find method for finding the right color for the category
// filter array also loop around the array but the difference is : it will return the value in aray only if it is true, so only apply condition in  ternary
// returns an array
console.log([7, 64, 6, -23, 11].filter((arg) => arg>10 ));

// find method return the frst true element of that array. only return a value
console.log([7, 64, 6, -23, 11].find((arg) => arg>10 ));


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

/*

//creating own function
function calcRecommendTime(year)//inout when recommendation were given
    {
        const currentYear = new Date().getFullYear(); //2023; this built in function calls direct year by js
        //2023-2019
        const age = currentYear - year;
        //now we want the output of the function
        
        // this ef else statement is made if recommendation time is greater
        if(age >=0) return age; // one line code , doesnt need curly braces
        else return `Impossible year. years need to be less than or equal ${currentYear}`;

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

 
 
    //Arrow functions
//goal: to write short functions all in one line & without using return keyword
// calling arrow function, we actually define it as a variable. then give(input) => return value function
// const calcRecommendTime2 = (year) => new Date().getFullYear() - year;

// but how we can incorporate if function for future or impossible date? using ternary operator in here
// variavle = (input) => condition ? true return value : else return value;

const calcRecommendTime2 = (year) => year >= new Date().getFullYear() ? new Date().getFullYear() - year : `Impossible year as it is not equal or less than ${new Date().getFullYear()}`;
console.log(calcRecommendTime2(2015));
console.log(calcRecommendTime2(2037));
 

    /*

let votesInteresting = 5;
let votesMindblowing = 4;
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
// falsy values: 0, '' , null and undefined.
// truthy value; everything else. if is not false, it will run the code
if(votesMindblowing){
    console.log("Minblowing fact")
} else{
    console.log("Not so special...")
}



// ternary operator: alternative of if else statement
// this is very useful when the condition awys expect a value

let votesFalse = 7;
const totalUpvotes = votesInteresting + votesMindblowing;

const message = totalUpvotes > votesFalse ? "The fact is useful in life and interesting" : "Not so useful inormation";
// ternary operation :    condition ? if retun value : else return value
// always remember ternary operation always return something
// here we can store the return value in a variable very useful. for if else we cant do that as
// as const message = if (totalUpvotes > votesFalse ) "A" else "B" ; is not possible

// alert(message);



// working with srings
const text = "I am Agnila";
const upperText = text.toUpperCase(); 
//we can call the function on the string. A method
console.log(upperText);

//TEMPLATE STRING
// template string (aka template literal) is that we create a template and introduce value into it
//  use backtick `` for template literal; this allow to place values in string. You can simply put value or variable. or Join  the strings together of text and string of str.
//u cant call the variables of a inside function here. like i could not call currentYear here.
const str = `Hi, ${text}. My toddler is 3. The toronto swimming registration was created ${calcRecommendTime(2023)}year back. it was problably ${totalUpvotes> votesFalse ? "usefull." : "not very usefull."}`;
console.log(str);

*/

/*
//Arrays
// it is a type o value which aggregavate other data types.
const fact =["I am Agnila", 1996, false];
console.log(fact);
console.log(fact[0]);   // index starts with 0
console.log(fact.length); // counts from 1
console.log(fact[fact.length - 1]);    // index can be generated by writing


//create variable from array. creating multiple variables
// destructing, very imp
const [text, born, isCorrect]= fact;
console.log(born);


//can take only one variable for one of the array
const [text,born] = fact;
// console.log(born);

//creating new array
const newFact =[...fact, "I live i Toronto"];
console.log(newFact);
//spreading: copy all the elements of original array (nmb of dot should be equal to length of the array) to the new array. we can do this operation inside of array


//object
//for all object elements, we have designation rather than array. elemets are placed simply one after another in array
// object has methods which array doesnt have
const factObj = {
    text2: "I am Agnila",
    category: "About",
    born: 1996,
    isCorrect: false,
    //this property will create a method. in the funtction will return a string
    createSummary: function(){
        return `the summary ${this.text} is from the category "${this.category.toUpperCase()}"`;
    }
}

console.log(factObj.born);
console.log(factObj["born"]);   //this different: string with the name of the property

//object destructuring
const{text2,isCorrect} = factObj;
console.log(isCorrect);
//call the method
console.log(factObj.createSummary());


//Looping over an array: map method and forEach method
// it means to perform a certain action for Each of the array elements.
[2,4,6,8].forEach(function(arg){
    console.log(arg);
}); // this is not popular, very basic function

//extremely imp : map function
// usually we wanna create new arrays based on an array.retun value witha a new array
const mapTimes10= [2,4,6,8].map(function(arg){
    return arg*10;
});
console.log(mapTimes10);

//using arrow function
const mapTimes10arrow = [2,4,6,8].map((arg) => arg *10);
console.log(mapTimes10arrow);

//in js arrays with multiple object is common
const CATEGORIES = [
    { name: "Introduction", color: "#3b82f6" },
    { name: "About", color: "#16a34a" },
    { name: "Almanack", color: "#ef4444" },
    { name: "Toronto Recreation Program", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
  ];

  const allCategories= CATEGORIES.map((arg) => arg.name);
  console.log(allCategories);

  const initialFacts = [
    {
        id: 1,
        text: "A Java developer, M.Sc. Graduate from Electrical & Computer Engineering Department of the University of Windsor. ",
        source:
          "https://www.linkedin.com/in/agnila-barua/",
        category: "Introduction",
        votesInteresting: 11,
        votesMindblowing: 2,
        votesFalse: 0,
        createdIn: 2019,
      },
      {
        id: 2,
        text: "Graduated with honors in a thesis-based Master of Applied Science program from the University of Windsor",
        source:
          "https://www.linkedin.com/in/agnila-barua/",
        category: "About",
        votesInteresting: 11,
        votesMindblowing: 2,
        votesFalse: 0,
        createdIn: 2019,
      },
      {
        id: 3,
        text: "I recently came across an amazing book named The Almanack of Namav Ravikant",
        source:
          "https://nav.al/",
        category: "Almanack",
        votesInteresting: 11,
        votesMindblowing: 2,
        votesFalse: 0,
        createdIn: 2019,
      },
      {
        id: 4,
        text: "Toronto Registered Recreations Program helps to find affordable programs",
        source:
          "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
        category: "Toronto Recreation Programs",
        votesInteresting: 11,
        votesMindblowing: 2,
        votesFalse: 0,
        createdIn: 2019,
      },
    // {
    //   id: 5,
    //   text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    //   source:
    //     "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    //   category: "entertainment",
    //   votesInteresting: 11,
    //   votesMindblowing: 2,
    //   votesFalse: 0,
    //   createdIn: 2019,
    // },
    // {
    //     id: 6,
    //     text: "Toronto Registered Recreations Program have a variety of programs from swimming to skating, drawing, dancing, etc. ",
    //     source:
    //       "https://efun.toronto.ca/torontofun/Activities/ActivitiesAdvSearch.asp?SectionId=219&BasicSearch=True",
    //     category: "health",
    //     votesInteresting: 11,
    //     votesMindblowing: 2,
    //     votesFalse: 0,
    //     createdIn: 2019,
    //   },
    // {
    //   id: 7,
    //   text: "Lisbon is the capital of Portugal",
    //   source: "https://en.wikipedia.org/wiki/Lisbon",
    //   category: "history",
    //   votesInteresting: 8,
    //   votesMindblowing: 3,
    //   votesFalse: 1,
    //   createdIn: 2015,
    // },
    // {
    //     id: 8,
    //     text: "React is being developed by Meta (formerly facebook)",
    //     source: "https://opensource.fb.com/",
    //     category: "news",
    //     votesInteresting: 24,
    //     votesMindblowing: 9,
    //     votesFalse: 4,
    //     createdIn: 2021,
    //   },
  ];
  
  const factAges= initialFacts.map((arg) => calcRecommendTime(arg.createdIn));
  console.log(factAges);
  console.log(factAges.join(" & "));

  */