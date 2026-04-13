import React from 'react';
import { ReactFlowProvider, MiniMap, Controls, Background } from 'react-flow-renderer';

const Whiteboard = () => {
    const elements = [
        // Define draggable cards, chapters, connectors, and magnets
        { id: '1', data: { label: 'Chapter 1' }, position: { x: 250, y: 5 } },
        { id: '2', data: { label: 'Chapter 2' }, position: { x: 100, y: 100 } },
        { id: '3', data: { label: 'Connector' }, position: { x: 200, y: 200 }, sourcePosition: 'top', targetPosition: 'bottom' },
        { id: '4', source: '1', target: '2', animated: true, type: 'smoothstep' }
    ];

    return (
        <ReactFlowProvider>
            <div style={{ width: '100%', height: '500px' }}>  
                <ReactFlow elements={elements} />
                <MiniMap />
                <Controls />
                <Background />
            </div>
        </ReactFlowProvider>
    );
};

export default Whiteboard;