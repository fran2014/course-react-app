import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClicButton = (msg) => {
    alert(msg);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={() => onClicButton("Aqui se deberia abrir el modal")}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
