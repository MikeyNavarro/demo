import React from "react";
import MuppetCard from "./components/MuppetCard";
import Lux from "./Lux.css";
import "./App.css";
import { muppets } from "./data/muppets";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {/* mapping allows us to iterate through muppets similar to jinja. Mapping requires two paramaters the iterator and a unique key */}

          {muppets.map((muppet, idx) => {
            return (
              // We are adding props to our muppet Card below so we need to add our props in our Mupper Card component
              <MuppetCard
                key={idx}
                name={muppet.name}
                job={muppet.job}
                age={muppet.age}
                location={muppet.location}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
