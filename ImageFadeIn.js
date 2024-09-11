import React, { useEffect, useState } from 'react';
import './style.css'; 

const ImageFadeIn = ({ src, alt }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <img
      className={`fade-in ${isVisible ? 'visible' : ''}`}
      src={src}
      alt={alt}
      style={{ width: '100%', height: 'auto' }}
    />
  );
};

export default ImageFadeIn;
