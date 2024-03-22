const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "child" }, "hello world from react H1 !"),
  React.createElement("h2", { id: "child2" }, "hello world from react H2!"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
