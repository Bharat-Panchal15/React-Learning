import { createRoot } from "react-dom/client";
import Learnings, { Pizza } from "./Learnings";

const PizzaSection = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza name="Pepperoni" description="pep, cheese, n stuff" image={"/public/pizzas/pepperoni.webp"} />
      <Pizza name="Hawaiian" description="ham, pineapple, n stuff" image={"/public/pizzas/hawaiian.webp"} />
      <Pizza name="Americano" description="french fries, hot dogs, n stuff" image={"/public/pizzas/big_meat.webp"} />
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>My React Component using JSX!</h1>

      <Learnings name="JSX" description="It is a syntax extension that compiles to React.createElement calls, and makes our code more readable, and reduce complexity." />
      <Learnings name="Component" description="It is a small unit of code which gives reusable UI units." />
      <Learnings name="Props" description="Data which can be specifically provided to an instance of component i.e. each component can have unique properties to it." />
      <Learnings name="ReactDOM" description="It's work is to render React code in the browser." />
      
      <PizzaSection />
    </div>

  )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
