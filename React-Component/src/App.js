const Learnings = (props) => { // props = data passed to a component
    return React.createElement("div",{},[
        React.createElement("h1",{}, props.name),
        React.createElement("p",{}, props.description),
    ]);
};

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1",{}, "My First React Component!"),
            React.createElement(Learnings, { name: "Component", description: "It is a small unit of code which gives reusable UI units."}),
            React.createElement(Learnings,{ name: "Props", description: "data which can be specifically provided to an instance of component i.e. each component can have unique properties to it."}),
            React.createElement(Learnings,{ name: "ReactDOM" , description: "It's work is to render React code in the browser."}),
    ]
    );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));