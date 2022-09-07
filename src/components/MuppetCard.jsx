// -------------------------------------------- MuppetCard.jsx----------------------------------------

import React, { useState } from "react";

const MuppetCard = (props) => {
  // These are the props we are calling on in our app.jsx we must deconstructe them below
  const { name, job, location, age } = props;

  // You can not mutate props. Props are read only when we need to mutate a prop we use state

  // Use State needs the initial State. The inital state of our age is our deconstructed prop. Every age should start at the initial value of your age --- {Age} ----- line 5

  // Age State is the current state of our age while Set Age state is the function to update our age.

  const [ageState, setAgeState] = useState(age);

  // We make a function that will be called when ever our birthday button is clicked. Our Birthday function will chnage our current age state by using the set age state method

  const birthday = () => {
    setAgeState(ageState + 1);
  };

  return (
    <div className="mt-5 card">
      <h5 className="card-header">Muppet Card</h5>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="row">
          <div className="col">Job: {job}</div>
          <div className="col">Location: {location}</div>

          {/* We now call {ageState} instead of {age} to show our CURRENT state of age not our starting age */}

          <div className="col">Age: {ageState}</div>
        </div>
        <div className="row">
          <div className="col">
            <button
              className="btn btn-primary w-100 mt-5 mb-4"
              onClick={birthday}
            >
              Birthday Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MuppetCard;
