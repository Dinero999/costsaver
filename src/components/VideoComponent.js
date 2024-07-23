// src/components/VideoComponent.js
import React from 'react';
import videoFile from '../assets/travel.mp4';
import './VideoComponent.css';

const VideoComponent = () => {
  return (
    <div className="video-container">
      <video  muted autoPlay loop width="100%" >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
