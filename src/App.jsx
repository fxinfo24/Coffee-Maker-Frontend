import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./Components/CoffeeCard";

function App() {
  const coffees = useLoaderData();

  return (
    <div className="m-20">
      <h1 className="text-4xl text-violet-500 text-center my-14">
        Mongo Coffee Store has {coffees.length} Coffees
      </h1>
      <div className="grid md:grid-cols-2 gap-5">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
