import React from "react";
import ReactDOM from "react-dom/client";
// jsx =>  babel use to transpile the jsxfile into js
// <h1> </h1> => React.createElement("h1",{},"message")
 //react element
// const jsxheading =(<h1 id="heading" className="head" tabIndex="5">hello from jsx </h1>)

// console.log(jsxheading)
const Title = () => (
     <h1>hello</h1>
);
const number = <span>2000</span>
const Fn = () =>(
    
    <div className="heading">
       
    <h1>{number}sweet helo from jsx 🚀</h1> <Title/></div>  
)
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<Fn/>);