import React, { useState } from 'react';

//flipclock
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

import './styles.css';

//import video bg
import videoBg from '../src/assets/video.mp4';

const App = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videoIndex, setVideoIndex] = useState(null);

  const videos = [
    'https://res.cloudinary.com/dj5wubw5n/video/upload/v1680066633/1_fx5d1q.mp4',
    'https://res.cloudinary.com/dj5wubw5n/video/upload/v1680066912/2_oxbagv.mp4',
    'https://res.cloudinary.com/dj5wubw5n/video/upload/v1680066977/3_ybcnsn.mp4',
    'https://res.cloudinary.com/dj5wubw5n/video/upload/v1680067232/4_mbgni5.mp4',
    'https://res.cloudinary.com/dj5wubw5n/video/upload/v1680067205/6_qooaeq.mp4',
    'https://res.cloudinary.com/dj5wubw5n/video/upload/v1680067261/5_ksoj3v.mp4',
    'https://res.cloudinary.com/dj5wubw5n/video/upload/v1680067375/7_cil23u.mp4',
    'https://res.cloudinary.com/dj5wubw5n/video/upload/v1680067416/10_si5hkt.mp4',
    'https://res.cloudinary.com/dj5wubw5n/video/upload/v1680067424/9_fvpdpe.mp4',
    'https://res.cloudinary.com/dj5wubw5n/video/upload/v1680067433/8_nxspqj.mp4',
    'https://res.cloudinary.com/dj5wubw5n/video/upload/v1680067557/11_q6g4xb.mp4',
    'https://res.cloudinary.com/dj5wubw5n/video/upload/v1680067654/12_e9cxj8.mp4',
    'https://res.cloudinary.com/dj5wubw5n/video/upload/v1680067679/13_tb7etx.mp4',
  ];

  const [overlayVisible, setOverlayVisible] = useState(false);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * videos.length);
    setCurrentVideo(videos[randomIndex]);
    setVideoIndex(randomIndex);
    setOverlayVisible(true);
  };

  const handleClose = () => {
    setCurrentVideo(null);
    setOverlayVisible(false);
  };

  const handleNext = () => {
    setVideoIndex((videoIndex + 1) % videos.length);
    setCurrentVideo(videos[videoIndex]);
    setOverlayVisible(true);
  };

  const handlePrevious = () => {
    setVideoIndex((videoIndex - 1 + videos.length) % videos.length);
    setCurrentVideo(videos[videoIndex]);
    setOverlayVisible(true);
  };

  return (
    <section className="page">
      <div
        className={`background-overlay${overlayVisible ? 'visible' : ''}`}
      ></div>
      {/* overlay */}
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      {!currentVideo && (
        <div className="page__content">
          <h1>Launching Soon</h1>
          <h3>
            Leave your email and we'll let you know once the site goes live.
          </h3>
          <FlipClockCountdown
            className="flip-clock"
            to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
          />
          <button className="btn" onClick={() => alert('You will be notified')}>
            Notify me
          </button>
          <button className="btn" onClick={handleClick}>
            Surprise me
          </button>
        </div>
      )}
      {currentVideo && (
        <div className="video-container">
          <button className="close-btn" onClick={handleClose}>
            Close
          </button>
          <button className="previous-btn" onClick={handlePrevious}>
            Previous
          </button>
          <button className="next-btn" onClick={handleNext}>
            Next
          </button>
          <video src={currentVideo} autoPlay controls />
        </div>
      )}
    </section>
  );
};

export default App;
