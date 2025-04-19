import React, { useState } from "react";

type Tile = {
  id: string;
  clicked: boolean;
};

const Board: React.FC = () => {
  const size = 5; // 5x5 grid
  const [tiles, setTiles] = useState<Tile[]>(
    Array.from({ length: size * size }, (_, i) => ({
      id: `tile-${i}`,
      clicked: false,
    }))
  );

  const handleClick = (id: string) => {
    setTiles(prev =>
      prev.map(tile =>
        tile.id === id ? { ...tile, clicked: !tile.clicked } : tile
      )
    );
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${size}, 1fr)`, gap: 4 }}>
      {tiles.map(tile => (
        <div
          key={tile.id}
          onClick={() => handleClick(tile.id)}
          style={{
            width: 60,
            height: 60,
            backgroundColor: tile.clicked ? "#4caf50" : "#ccc",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            userSelect: "none"
          }}
        >
          {tile.id}
        </div>
      ))}
    </div>
  );
};

export default Board;
