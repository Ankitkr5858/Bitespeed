import React from "react";

const NodePanel = ({ elements, setElements }) => {
  const addTextNode = () => {
    const newNode = {
      id: (elements.length + 1).toString(),
      data: { label: "Text Node" },
      position: { x: Math.random() * 250, y: Math.random() * 250 },
    };
    setElements((els) => [...els, newNode]);
  };

  return (
    <div className="node-panel">
      <button onClick={addTextNode}>Add Text Node</button>
    </div>
  );
};

export default NodePanel;
