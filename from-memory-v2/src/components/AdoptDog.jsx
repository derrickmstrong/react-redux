import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { adoptDog } from "../feature";

function DogContainer() {
  const [number, setNumber] = useState(1);

  const numOfDogs = useSelector((state) => state.dog.numOfDogs);

  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="number"
        value={number}
        min="1"
        max={numOfDogs}
        size="3"
        onChange={(e) => setNumber(e.target.value)}
      />
      {numOfDogs < 1 ? (
        <button onClick={() => dispatch(adoptDog(number))} disabled>
          Click to Adopt
        </button>
      ) : (
        <button onClick={() => dispatch(adoptDog(number))}>
          Click to Adopt
        </button>
      )}
    </div>
  );
}

export default DogContainer;
