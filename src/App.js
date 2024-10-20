import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";

export default function App() {
  const [sprites, setSprites] = useState([]); // Track all added sprites
  const [selectedSpriteId, setSelectedSpriteId] = useState(null); // Track the selected sprite

  const handleAddSprite = () => {
    const newSprite = {
      id: Date.now(), // Unique ID for each sprite
      position: { x: 0, y: 50 }, // Start just below the "Add" button
      rotation: 0,
    };
    setSprites((prev) => [...prev, newSprite]);
  };

  const handleSelectSprite = (id) => {
    setSelectedSpriteId(id); // Set the selected sprite
  };

  const handleMove = (x, y) => {
    if (selectedSpriteId) {
      setSprites((prev) =>
        prev.map((sprite) =>
          sprite.id === selectedSpriteId
            ? { ...sprite, position: { x: sprite.position.x + parseInt(x) || 0, y: sprite.position.y + parseInt(y) || 0 } }
            : sprite
        )
      );
    }
  };

  const handleTurn = (degrees) => {
    if (selectedSpriteId) {
      setSprites((prev) =>
        prev.map((sprite) =>
          sprite.id === selectedSpriteId
            ? { ...sprite, rotation: (sprite.rotation + parseInt(degrees) || 0) % 360 }
            : sprite
        )
      );
    }
  };

  const handleGoTo = (x, y) => {
    if (selectedSpriteId) {
      setSprites((prev) =>
        prev.map((sprite) =>
          sprite.id === selectedSpriteId
            ? { ...sprite, position: { x: parseInt(x) || 0, y: parseInt(y) || 0 } }
            : sprite
        )
      );
    }
  };

  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar onMove={handleMove} onTurn={handleTurn} onGoTo={handleGoTo} />
          <MidArea />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea
            sprites={sprites} // Pass the sprites array
            onAddSprite={handleAddSprite} // Pass the function to add sprites
            onSelectSprite={handleSelectSprite} // Pass the function to select a sprite
          />
        </div>
      </div>
    </div>
  );
}
