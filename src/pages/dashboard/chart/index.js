import DashboardLayout from "@/layouts/dashboard/DashboardLayout";
import React from "react";
import ReactFlow, { addEdge, useEdgesState, useNodesState } from "reactflow";
import { Position } from "reactflow";

const nodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
};

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 150 },
    data: { label: "default style 1" },
    ...nodeDefaults,
  },
  {
    id: "2",
    position: { x: 250, y: 0 },
    data: { label: "default style 2" },
    ...nodeDefaults,
  },
  {
    id: "3",
    position: { x: 250, y: 150 },
    data: { label: "default style 3" },
    ...nodeDefaults,
  },
  {
    id: "4",
    position: { x: 250, y: 300 },
    data: { label: "default style 4" },
    ...nodeDefaults,
  },
];

const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
  },
  {
    id: "e1-3",
    source: "1",
    target: "3",
  },
  {
    id: "e1-4",
    source: "1",
    target: "4",
  },
];

const Chart = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = React.useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      />
    </div>
  );
};
Chart.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default Chart;
