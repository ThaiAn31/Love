import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = `${Math.random() * window.innerWidth}px`;
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 4000);
    };

    setInterval(createHeart, 500);
  }, []);

  return (
    <div className="App">
     
    </div>
  );
}

export default App;

