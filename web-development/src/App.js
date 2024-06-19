import { useState } from "react";
import "./style.css";

// susally while building react from scratch, we start from app.js and the go to index.html
// Component name starts with Uppercase

const initialFacts = [
  {
      id: 1,
      text: "A Java developer, M.Sc. Graduate from Electrical & Computer Engineering Department of the University of Windsor. ",
      source:
        "https://www.linkedin.com/in/agnila-barua/",
      sourceName: "LinekdIn",
      category: "Introduction",
      votesInteresting: 5,
      votesMindblowing: 2,
      votesFalse: 0,
      createdIn: 2019,
    },
    {
      id: 2,
      text: "Graduated with honors in a thesis-based Master of Applied Science program from the University of Windsor",
      source:
        "https://github.com/agnila7",
      sourceName: "Git",
      category: "About",
      votesInteresting: 1,
      votesMindblowing:9,
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
        "https://efun.toronto.ca/torontofun/Activities/ActivitiesAdvSearch.asp?SectionId=219&BasicSearch=True",
      sourceName: "Toronto e-fun",
        category: "Toronto Recreation Programs",
      votesInteresting: 15,
      votesMindblowing: 1,
      votesFalse: 0,
      createdIn: 2019,
    },
];

const CATEGORIES = [
  { name: "Introduction", color: "#3b82f6" },
  { name: "About", color: "#16a34a" },
  { name: "Almanack", color: "#ef4444" },
  { name: "Toronto Recreation Programs", color: "#eab308" },
];

//  detour to create counter for learning state
function Counter(){

const [count, setCount] = useState(0);  // this is an array, so destructure; (2) [0, f]


  // when click the btn, counter will increase
  return (
    <div>
        <span style={{fontSize: '40px'}}>
            {count}
        </span>
        {/* Regenerated JSX */}
        <button className="btn btn-large" onClick={() => setCount((c)=> c+1)}>
        {/* <button className="btn btn-large" onClick={() => console.log("CLICK")}> */}
            {/* ususally in js for click event, we use:  btn.addEventListener('click', function()...)
            for react, we only call onClick */}
            Counter +1
        </button>
    </div>
  )
}


function App(){ 
// we can also do calculations, define variables in here as it is a function
const appTitle = "AGNILA BARUA";

  // in this js code with retrun we can contain html file, it is actually JSX syntax.
  // this JSX syntax is converted to the language for js to understand by react
// there are some difference like className coz class is reserved for another thing
//only return one element from eache component. here parent component is <header>

  return (

    // fragment as there are more elements
    <>  
    <header className="header">
        <div className="logo">
           {/* react will look into the public folder to find the file */}
          <img
            src="agnila1.png" 
            height="200"
            width="200"
            alt="Image of Agnila"
          />  
          {/* self closing tag */}
          <h1>{appTitle}</h1> {/*heading ; like template literal*/}
        </div>

        <button className="btn btn-large btn-open">  
           Recommendation
        </button>   
      </header>

      <RecommForm/>

      <Counter/>

      <main className="main">
        <CategoryFilter/>
        <FactsList/>
      </main>

      </>
  );
}

function RecommForm(){
  return <form className = "recommendation">Recommendation</form>;
}


function CategoryFilter(){
  
  return(<aside>
    <ul>
         <li className="category">
              <button className="btn btn-all-categories">All</button>
         </li>

         {CATEGORIES.map((cat) =>(
              <li key = {cat.name} className="category">
              <button
                className="btn btn-categories"
                style={{backgroundColor: cat.color}}
              >
                {cat.name}
              </button>
            </li> 
          ))}
    </ul>
  </aside>);  // react doesnt know where to put this element

}


function FactsList(){

  // temporary for getting data from initialFacts
  const facts = initialFacts;

  //for writing js we use {}
  return (
  <section>
    <ul className = "facts-list">
        {/* {facts.map((fact) =><li key= {fact.id}>fact</li>)} */}
      { facts.map((fact) => (
      <Fact  key={fact.id} fact = {fact}/> 
      // <Fact  key={fact.id} factObj = {fact} />  // here factObj is passing prop // thats how you pass propoerties from parent component to child component
    ))
      }

     </ul>

     <p> There are {facts.length -2} discussions in the databse. </p>
  </section>
  );
  // create one DOM element for each fact; similar loop over as script.js. 
  // initialFacts has 3 object. for each obj, one DOM element. so loop over the array with map and create string for each fact
 
  // return <> <section className = "facts-list">Information</section>;
  // <RecommForm/>
  // </>

}

// in js we would write Fact(fact); passing argument
//  in react , we use passing promp


function Fact({fact}){

// function Fact(props){
// console.log(props);
// const {factObj} =props; //this is the same thing as :    const factObj = props.factObj;

// return (
//   <li key={props.factObj.id} className="information">


return (
  <li className="information">
    <p>
        {fact.text}
        <a
          className="hyperlinks"
           href={fact.source}
           target="_blank"
        >
            ({fact.sourceName})
        </a>
                  
    </p>

    <div className="right-sidebar">
        <span className="tag" style={{backgroundColor: CATEGORIES.find((cat) => cat.name === fact.category).color
        }}>
              {fact.category}
        </span>

      <div className="vote-buttons">
            <button>👍 {fact.votesInteresting}</button>
                    
            <button>🤯 {fact.votesMindblowing}</button>
                      
            <button>😒 {fact.votesFalse}</button>
        </div>
                  
    </div>
  </li>
)
            

}

export default App; //exportin fro index.js. index.js is the first js file to enter by browser