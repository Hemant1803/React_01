const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "Child" }, [
        React.createElement("h1", {}, "I am an H1 tag"),
        React.createElement("h2", {}, "I am an H2 tag")
       
    ]),
    React.createElement("div", { id: "Child2" }, [
        React.createElement("h1", {}, "I am an H1 tag"),
        React.createElement("h2", {}, "I am an H2 tag")
    ]),
]);
const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Hello World From React!"
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
