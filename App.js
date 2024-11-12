import React from "react";
import ReactDOM from "react-dom/client";

const Parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is Namste React"),
    React.createElement("h2", {}, "tytfyediuehdoiewioe"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);
console.log(Parent); // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Parent);
