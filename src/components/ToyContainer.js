import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({allToys, updatedToy, deleteToy}) {
  const renderToy = allToys.map(toy => <ToyCard toy={toy} key={toy.id} updatedToy={updatedToy} deleteToy={deleteToy}/>)
  return (
    <div id="toy-collection">{renderToy}</div>
  );
}

export default ToyContainer;
