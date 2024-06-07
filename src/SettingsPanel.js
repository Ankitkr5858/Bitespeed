import React from "react";

const SettingsPanel = ({ selectedNode, updateNodeText }) => {
  const onTextChange = (event) => {
    updateNodeText(selectedNode.id, event.target.value);
  };

  return (
    <div className="settings-panel">
      <input
        type="text"
        value={selectedNode.data.label}
        onChange={onTextChange}
      />
    </div>
  );
};

export default SettingsPanel;
