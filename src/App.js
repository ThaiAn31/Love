import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [isRainy, setIsRainy] = useState(false);
  const [showHearts, setShowHearts] = useState(true);
  const [isBasic, setIsBasic] = useState(true);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [buttonText, setButtonText] = useState('Chạm để mưa');

  useEffect(() => {
    const createHeart = () => {
      if (!isBasic && showHearts) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * window.innerWidth}px`;
        document.querySelector('.App').appendChild(heart);
        setTimeout(() => {
          heart.remove();
        }, 9000);
      }
    };

    const intervalId = setInterval(createHeart, 500);

    return () => clearInterval(intervalId);
  }, [showHearts, isBasic]);

  useEffect(() => {
    const createDrop = () => {
      if (isRainy) {
        const drop = document.createElement('div');
        drop.className = 'drop';
        drop.style.left = `${Math.random() * window.innerWidth}px`;
        document.querySelector('.App').appendChild(drop);
        setTimeout(() => {
          drop.remove();
        }, 9000);
      }
    };

    const intervalId = setInterval(createDrop, 500);

    return () => clearInterval(intervalId);
  }, [isRainy]);

  const handleToggleRain = () => {
    setIsRainy((prevIsRainy) => !prevIsRainy);
    setShowHearts((prevShowHearts) => !prevShowHearts);
    setIsBasic(false);

    // Stop the currently playing audio
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Thêm âm thanh khi bật/mở nút "Toggle Rain"
    const audioSource = isRainy ? 'sound/romance.mp3' : 'sound/rain.mp3';
    const rainSound = new Audio(require(`../src/${audioSource}`));
    rainSound.loop = true;
    rainSound.play();

    // Set the current audio
    setCurrentAudio(rainSound);

    // Change button text
    setButtonText(isRainy ? 'Chạm để mưa' : 'Nhìn buồn chứ vậy thì thêm tí ấm áp nào');
  };

  return (
    <div className={`App ${isBasic ? 'basic-background' : showHearts ? 'love-background' : 'rainy-background'}`}>
      <button className="custom-button" onClick={handleToggleRain}>{buttonText}</button>
      {!isBasic && showHearts && (
        <div>
          <p style={{ fontSize: 20 }}>
            Tuấn đẹp trai, tài giỏi và giàu tình cảm nhất quả đất này
          </p>
          {/* <img
            src="../src/img/tuan.png"  // Replace with the actual path to your image
            alt="hehe"
            className="custom-image"
          /> */}
        </div>
      )}
      {/* Thẻ audio để chứa âm thanh mưa */}
      <audio id="rainSound" src="" loop />
    </div>
  );


}

export default App;
