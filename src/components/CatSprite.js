import React from 'react';

export default function CatSprite({ position, rotation, onClick, isSelected }) {
  return (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        transform: `rotate(${rotation}deg)`,
        cursor: 'pointer',
        border: isSelected ? '2px solid blue' : 'none', // Highlight selected sprite
        zIndex: isSelected ? 10 : 1, // Bring selected sprite to front
      }}
    >
      <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="20" fill="orange" />
        <text x="25" y="30" fontSize="12" textAnchor="middle" fill="black">Cat</text>
      </svg>
    </div>
  );
}
