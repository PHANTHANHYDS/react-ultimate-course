import { useState } from 'react';
import './App.css';

function App() {
  const colorsList = ['red', 'yellow', '#00FFFF', 'purple']; // #00FFFF là mã màu Aqua

  const [selectedColor, setSelectedColor] = useState(null);

  const handleBoxClick = (color) => {
    if (selectedColor === color) {
      setSelectedColor(null);
    } else {
      setSelectedColor(color);
    }
  };

  return (
    <div className="container">
      <h3>Current color: {selectedColor ? selectedColor : 'Default'}</h3>

      <div className="grid-box">
        {colorsList.map((originalColor, index) => (
          <div
            key={index}
            className="box"
            style={{
              backgroundColor: selectedColor ? selectedColor : originalColor
            }}
            // Gọi hàm khi click, truyền màu gốc của ô đó vào
            onClick={() => handleBoxClick(originalColor)}
          >
            {originalColor === '#00FFFF' ? 'aqua' : originalColor}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;