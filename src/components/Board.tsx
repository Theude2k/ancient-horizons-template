import React from 'react';
import { Settings } from 'lucide-react';

export default function Board() {
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      {/* ⚙️ Settings Cogwheel */}
      <div style={{ position: 'absolute', top: '16px', right: '16px', cursor: 'pointer' }}>
        <Settings size={28} color="white" />
      </div>

      {/* 🌄 Game Content */}
      <h1 style={{ color: 'white', padding: '20px' }}>Game Board Loaded</h1>
    </div>
  );
}
