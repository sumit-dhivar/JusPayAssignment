import React from "react";
import CatSprite from "./CatSprite"; // Your sprite component

export default function PreviewArea({ sprites, onSelectSprite, onAddSprite }) {
  return (
    <div className="relative flex-1 h-full pt-12"> {/* Add padding-top to make space for the button */}
      {/* Add Button */}
      <button
        onClick={onAddSprite}
        className="absolute top-2 left-2 bg-blue-500 text-white p-2 rounded"
      >
        Add
      </button>

      {sprites.map((sprite) => (
        <CatSprite
          key={sprite.id}
          position={{
            x: sprite.position.x,
            y: sprite.position.y + 50, // Adjust this value to place below the button
          }}
          rotation={sprite.rotation}
          onClick={() => onSelectSprite(sprite.id)} // Handle sprite selection
          isSelected={sprite.id === sprite.selected} // Pass the selected state
        />
      ))}
    </div>
  );
}
