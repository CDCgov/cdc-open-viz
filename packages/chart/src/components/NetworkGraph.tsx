import React, {useContext, useEffect} from 'react';
import ErrorBoundary from '@cdc/core/components/ErrorBoundary';
import Context from '../context';
import { Graph } from "react-d3-graph";

export default function NetworkGraph() {
  const {data, config} = useContext<any>(Context);

  useEffect(() => {
    //This seems to center the graph, but need to look more into placement. The next release of reach-d3-graph will
    //have a new config property called "bounded" which helps to keep all nodes in the bounds of the SVG on initial rendering
    const zoomableElement = document.getElementById('graph-id-graph-container-zoomable');

    if (zoomableElement) {
      zoomableElement.setAttribute('transform', `translate(0,0), scale(1)`);
    }

    graphConfig.initialZoom = 1;

  }, [config])

  //Convert to list of nodes and links
  let nodes = [];
  let links = [];

  if ( config.nodeSourceColumn && config.nodeTargetColumn ) {
    let rawData = data;
    let nodesProcessed = [];
    rawData.forEach(function (value, i) {

      if (!nodesProcessed.includes(value[config.nodeSourceColumn])) {
        let node = {
          id: value[config.nodeSourceColumn]
        };
        nodes.push(node);
        nodesProcessed.push(value[config.nodeSourceColumn])
      }
      if (!nodesProcessed.includes(value[config.nodeTargetColumn])) {
        let node = {
          id: value[config.nodeTargetColumn]
        };
        nodes.push(node);
        nodesProcessed.push(value[config.nodeTargetColumn])
      }

      links.push(
        {
          source: value[config.nodeSourceColumn],
          target: value[config.nodeTargetColumn]
        }
      )
    });
  }

  const decorateGraphNodesWithInitialPositioning = nodes => {
    return nodes.map(n =>
      Object.assign({}, n, {
        x: n.x || Math.floor(Math.random() * 800),
        y: n.y || Math.floor(Math.random() * 300),
      })
    );
  };

  const graphData = {
    nodes: decorateGraphNodesWithInitialPositioning(nodes),
    links: links
  }
  console.log(graphData)
  let graphConfig = {
    "height": config.height,
    "width": 800,
    "automaticRearrangeAfterDropNode": false,
    "collapsible": false,
    "directed": false,
    "focusAnimationDuration": 0.75,
    "focusZoom": 1,
    "freezeAllDragEvents": true,
    "highlightDegree": 1,
    "highlightOpacity": 1,
    "linkHighlightBehavior": true,
    "maxZoom": 8,
    "minZoom": 0.1,
    "nodeHighlightBehavior": true,
    "panAndZoom": false,
    "staticGraph": false,
    "staticGraphWithDragAndDrop": false,
    "bounded": true,
    "initialZoom": 1,
    "d3": {
      "alphaTarget": 0.05,
      "gravity": -300,
      "linkLength": 100,
      "linkStrength": 1,
      "disableLinkForce": false
    },
    "node": {
      "color": config.nodeColor ?? "#d3d3d3",
      "fontColor": "black",
      "fontSize": 12,
      "labelProperty": "nodeLabel",
      "fontWeight": "normal",
      "highlightColor": "SAME",
      "highlightFontSize": 12,
      "highlightFontWeight": "bold",
      "highlightStrokeColor": "blue",
      "highlightStrokeWidth": "SAME",
      "mouseCursor": "pointer",
      "opacity": 1,
      "renderLabel": true,
      "size": config.nodeSize ? config.nodeSize * 10 : 200,
      "strokeColor": "none",
      "strokeWidth": 2,
      "svg": "",
      "symbolType": config.nodeType ?? "circle"
    },
    "link": {
      "color": config.nodeLinkColor ?? "#d3d3d3",
      "fontColor": "black",
      "fontSize": 12,
      "fontWeight": "normal",
      "highlightColor": "blue",
      "highlightFontSize": 8,
      "highlightFontWeight": "bold",
      "labelProperty": "linkLabel",
      "mouseCursor": "pointer",
      "opacity": 1,
      "renderLabel": true,
      "semanticStrokeWidth": true,
      "strokeWidth": config.nodeLinkWidth ?? 1.5,
      "markerHeight": 6,
      "markerWidth": 6,
      "strokeDasharray": 0,
      "strokeDashoffset": 0,
      "strokeLinecap": "butt"
    }
  };

  return (
    <ErrorBoundary component="Graph">
      <Graph
        id='graph-id' // id is mandatory, if no id is defined rd3g will throw an error
        data={graphData}
        config={graphConfig}
        // onClickGraph={onClickGraph}
        // onClickNode={onClickNode}
        // onDoubleClickNode={onDoubleClickNode}
        // onRightClickNode={onRightClickNode}
        // onClickLink={onClickLink}
        // onRightClickLink={onRightClickLink}
        // onMouseOverNode={onMouseOverNode}
        // onMouseOutNode={onMouseOutNode}
        // onMouseOverLink={onMouseOverLink}
        // onMouseOutLink={onMouseOutLink}
        // onNodePositionChange={onNodePositionChange}
        // onZoomChange={onZoomChange}
      />

    </ErrorBoundary>
  );
}
