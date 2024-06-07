import React, { useState } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  removeElements,
} from "react-flow-renderer";
import "./App.css";
import NodePanel from "./NodePanel";
import SettingsPanel from "./SettingsPanel";
import SaveButton from "./SaveButton";

const initialElements = [
  {
    id: "1",
    type: "input",
    data: { label: "Start" },
    position: { x: 250, y: 5 },
  },
];

function App() {
  const [elements, setElements] = useState(initialElements);
  const [selectedNode, setSelectedNode] = useState(null);

  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onElementClick = (event, element) => setSelectedNode(element);
  const onPaneClick = () => setSelectedNode(null);

  const updateNodeText = (id, text) => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === id) {
          el.data = { ...el.data, label: text };
        }
        return el;
      })
    );
    setSelectedNode((prevSelectedNode) => ({
      ...prevSelectedNode,
      data: { ...prevSelectedNode.data, label: text },
    }));
  };

  const saveFlow = () => {
    const hasUnconnectedNodes = elements.some(
      (el) => el.type !== "edge" && !el.target
    );
    if (hasUnconnectedNodes) {
      alert("Error: Some nodes are not connected.");
      return;
    }
    alert("Flow saved successfully!");
  };

  return (
    <div className="App">
      <div className="reactflow-wrapper">
        <ReactFlow
          elements={elements}
          onElementsRemove={onElementsRemove}
          onConnect={onConnect}
          onElementClick={onElementClick}
          onPaneClick={onPaneClick}
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
      {selectedNode ? (
        <SettingsPanel
          selectedNode={selectedNode}
          updateNodeText={updateNodeText}
        />
      ) : (
        <NodePanel elements={elements} setElements={setElements} />
      )}
      <SaveButton saveFlow={saveFlow} />
    </div>
  );
}

export default App;
