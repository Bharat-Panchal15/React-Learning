import { createRoot } from "react-dom/client";
import Learnings from "./Learnings";

const App = () => {
  return (
    <div>
      <h1>My React Component using JSX!</h1>
      <Learnings name="JSX" description="It is a syntax extension that compiles to React.createElement calls, and makes our code more readable, and reduce complexity." />
      <Learnings name="Component" description="It is a small unit of code which gives reusable UI units." />
      <Learnings name="Props" description="Data which can be specifically provided to an instance of component i.e. each component can have unique properties to it." />
      <Learnings name="ReactDOM" description="It's work is to render React code in the browser." />
    </div>
  )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
