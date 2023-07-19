import React, {useState} from "react";

function ToyForm({addNewToy}) {
  const [formName, setFormName] = useState("")
  const [formImage, setFormImage] = useState("")

  function handleName(e) {
    setFormName(e.target.value)
  }

  function handleImage(e) {
    setFormImage(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const toyObj = {
      name: formName,
      image: formImage,
      likes: 0
    }
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toyObj),
    })
    .then(r=>r.json())
    .then(newToy => addNewToy(newToy))
  }
  
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={formName}
          onChange={handleName}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          value={formImage}
          onChange={handleImage}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
