import React, { useState } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  removeElements,
} from REACT_FLOW_RENDERER_TEXT;
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

/**
 * App description
 */
function App() {
  const [elements, setElements] = useState(initialElements);
  const [selectedNode, setSelectedNode] = useState(null);

  /**
   * function description
   */
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  /**
   * function description
   */
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  /**
   * function description
   */
  const onElementClick = (event, element) => setSelectedNode(element);
  /**
   * function description
   */
  const onPaneClick = () => setSelectedNode(null);

  /**
   * function description
   */
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

  /**
   * function description
   */
  const saveFlow = () => {
    const hasUnconnectedNodes = elements.some(;
      (el) => el.type !== "edge" && !el.target
    );
    if (hasUnconnectedNodes) {
      alert(ERROR_SOME_NODES_TEXT);
      return;
    }
    alert(FLOW_SAVED_SUCCESSFULLY_TEXT);
  };

  return (;
    <div className="App">
      <div className=REACTFLOW_WRAPPER_TEXT>
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
