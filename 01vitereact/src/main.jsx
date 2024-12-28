import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import NewFile from './newfile.jsx'
import "./newfile.css"

function Myapp()
{
  return(
    <div>
      <h1>ronak</h1>
    </div>
  )
}

let anotherElement = (
 <a href="https://google.com" target="_blank">visit Google</a>
 // we wrote this code in short cut 
)

// let ReactElement={
//   type : 'a',
//   props:{
//       href : 'https://google.com',
//       target :"_blank"
//   },
//   children : "click to me visit google"


//                 "// this is custom react code we  wrote custom render code in index.html file //"  

// }


let ReactElement = React.createElement(
  //  we wrote react.createElement because now we make reactelement according react thats why we created //
  'a' ,                                             // firstly we write tag name in this code  
  {href:'https://google.com',target: '_blank'},      // second perameter is object
  'click here to visit google'
)




createRoot(document.getElementById('root')).render(
//  Myapp()
// "we can write like this but we don't write like this" //

    // <Myapp/>
    // "we write like this " //
    anotherElement
  

)






// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
// import NewFile from './newfile.jsx';
// import "./newfile.css";

// function Myapp() {
//   return (
//     <div>
//       <h1>ronak</h1>
//     </div>
//   );
// }

// let anotherElement = (
//   <a href="https://google.com" target="_blank">Visit Google</a>
// );

// // Creating a React Element
// let ReactElement = React.createElement(
//   'a',                                             // Tag name
//   { href: 'https://google.com', target: '_blank' }, // Props
//   'Click here to visit Google'                     // Children
// );

// // Render the component or element
// createRoot(document.getElementById('root')).render(
//   <Myapp /> // You can replace this with anotherElement or ReactElement
// );

