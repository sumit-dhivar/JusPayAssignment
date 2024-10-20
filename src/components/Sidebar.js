import React, { useState } from "react";
import Icon from "./Icon";

export default function Sidebar({ onMove, onTurn, onGoTo }) {
  const [moveSteps, setMoveSteps] = useState({ x: "", y: "" }); 
  const [turnDegreesClockwise, setTurnDegreesClockwise] = useState(""); 
  const [turnDegreesAnticlockwise, setTurnDegreesAnticlockwise] = useState(""); 
  const [goToCoords, setGoToCoords] = useState({ x: "", y: "" }); 

  const handleMove = (e) => {
    e.stopPropagation(); // Prevent the click event from bubbling up
    onMove(moveSteps.x, moveSteps.y);
  };

  const handleTurnClockwise = (e) => {
    e.stopPropagation(); // Prevent the click event from bubbling up
    onTurn(turnDegreesClockwise); 
  };

  const handleTurnAnticlockwise = (e) => {
    e.stopPropagation(); // Prevent the click event from bubbling up
    onTurn(-turnDegreesAnticlockwise); 
  };

  const handleGoTo = (e) => {
    e.stopPropagation(); // Prevent the click event from bubbling up
    onGoTo(goToCoords.x, goToCoords.y);
  };

  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Events"} </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When "}
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        {"clicked"}
      </div>
      <div className="font-bold"> {"Motion"} </div>

      {/* Move Steps */}
      <div className="flex flex-col my-2">
        <div className="flex flex-row items-center">
          <button
            onClick={handleMove}
            className="bg-blue-500 text-white flex items-center p-1"
          >
            Move
          </button>
          <input
            type="text"
            value={moveSteps.x}
            onChange={(e) => setMoveSteps({ ...moveSteps, x: e.target.value })}
            placeholder="X"
            className="border p-1 ml-2 w-12 text-sm bg-white text-black"
            style={{ width: '40px', marginLeft: '5px', marginRight: '5px' }}
          />
          <input
            type="text"
            value={moveSteps.y}
            onChange={(e) => setMoveSteps({ ...moveSteps, y: e.target.value })}
            placeholder="Y"
            className="border p-1 w-12 text-sm bg-white text-black"
            style={{ width: '40px', marginLeft: '5px' }}
          />
        </div>
      </div>

      {/* Turn Degrees */}
      <div className="flex flex-col my-2">
        <div className="flex flex-row items-center">
          <button
            onClick={handleTurnClockwise}
            className="bg-blue-500 text-white flex items-center p-1 mb-2"
          >
            Turn CW
          </button>
          <input
            type="text"
            value={turnDegreesClockwise}
            onChange={(e) => setTurnDegreesClockwise(e.target.value)}
            placeholder="Degrees"
            className="border p-1 ml-2 w-12 text-sm bg-white text-black"
            style={{ width: '40px', marginLeft: '5px' }}
          />
        </div>

        <div className="flex flex-row items-center">
          <button
            onClick={handleTurnAnticlockwise}
            className="bg-blue-500 text-white flex items-center p-1"
          >
            Turn ACW
          </button>
          <input
            type="text"
            value={turnDegreesAnticlockwise}
            onChange={(e) => setTurnDegreesAnticlockwise(e.target.value)}
            placeholder="Degrees"
            className="border p-1 ml-2 w-12 text-sm bg-white text-black"
            style={{ width: '40px', marginLeft: '5px' }}
          />
        </div>
      </div>

      {/* Go To Coordinates */}
      <div className="flex flex-col my-2">
        <div className="flex flex-row items-center">
          <button onClick={handleGoTo} className="bg-blue-500 text-white flex items-center p-1">
            Go To
          </button>
          <input
            type="text"
            value={goToCoords.x}
            onChange={(e) => setGoToCoords({ ...goToCoords, x: e.target.value })}
            placeholder="X"
            className="border p-1 ml-2 w-12 text-sm bg-white text-black"
            style={{ width: '40px', marginLeft: '5px', marginRight: '5px' }}
          />
          <input
            type="text"
            value={goToCoords.y}
            onChange={(e) => setGoToCoords({ ...goToCoords, y: e.target.value })}
            placeholder="Y"
            className="border p-1 ml-2 w-12 text-sm bg-white text-black"
            style={{ width: '40px', marginLeft: '5px' }}
          />
        </div>
      </div>
    </div>
  );
}
