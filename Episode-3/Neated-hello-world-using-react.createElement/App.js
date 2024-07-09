import React from "react";
import ReactDOM from "react-dom/client";

const WelcomeComponent = () => {
  return (
    <div>
      <h1>Welcome to</h1>
    </div>
  );
};
//This is an react element
const title = (
  <div>
    <h2 className="heading">title</h2>
  </div>
);
//This is an react component
const HeaderComponent = () => {
  return (
    <div>
      {title}
      <WelcomeComponent />

      <h2 className="heading">Namaste React</h2>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
