import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const numOfDogs = useSelector((state) => state.dog.numOfDogs);
  const adoptionClosed = useSelector((state) => state.dog.adoptionClosed);
  return (
    <div>
      <h1>Dog House</h1>
      <h3>
        We currently have {numOfDogs} {numOfDogs === 1 ? "dog" : "dogs"} in the
        house.
      </h3>
      <h2>{adoptionClosed ? "We are no longer taking applications" : null}</h2>
    </div>
  );
}

export default Home;
