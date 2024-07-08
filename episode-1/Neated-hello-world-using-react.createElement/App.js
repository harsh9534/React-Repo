//we'll be creating nested tags using React.createElement
/* 
 <div id = parent>
    <div id = child>
      <h1 id = heading><h1/>
      <h2 id = heading2></h2>
    </div>
 </div>   
  
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Nested hello World"),
    React.createElement("h2", { id: "heading2" }, "Hi from h2"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
