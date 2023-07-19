import React from "react";

function Movie({ name, description, image, onDelete }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Movie;
