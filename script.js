const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{id:"head"},"hello from js")));
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);