import React from "react";

const SaveButton = ({ saveFlow }) => {
  return (
    <div className="save-button">
      <button onClick={saveFlow}>Save Flow</button>
    </div>
  );
};

export default SaveButton;
