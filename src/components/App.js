import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [allToys, setAllToys] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3001/toys")
    .then(r=>r.json())
    .then(data => setAllToys(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addNewToy(newToy) {
    setAllToys([...allToys, newToy])
  }

  function updatedToy(updatedToy) {
    const updatedAllToys = allToys.map((toy)=> {
      if (toy.id === updatedToy.id) {
        return updatedToy
      }
      else return toy
    })
    setAllToys(updatedAllToys)
  }

  function deleteToy(deletedToy) {
    const updatedAllToys = allToys.filter((toy) => toy.id !== deletedToy.id)
    setAllToys(updatedAllToys)
  }
  
  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={addNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer allToys={allToys} updatedToy={updatedToy} deleteToy={deleteToy}/>
    </>
  );
}

export default App;
