import React from 'react';
import ReactDOM from 'react-dom';
const heading1 = React.createElement("h1", { id: "title1" }, "Hello Everyone");
const heading2 = React.createElement(
  "h2",
  { id: "title2", style: { color: "red" } },
  "Welcome in Namastey React"
);
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
