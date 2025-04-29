// src/components/BackgroundAnimation.tsx
import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: (() => void) | null;
  }
}

const BackgroundAnimation: React.FC = () => {
  const playerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Load the YouTube API script
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    
    let player: any;
    
    // Function to be called when YouTube API is ready
    window.onYouTubeIframeAPIReady = () => {
      if (!playerRef.current) return;
      
      player = new window.YT.Player(playerRef.current, {
        videoId: 'YOUR_YOUTUBE_VIDEO_ID', // Replace with your YouTube video ID
        playerVars: {
          autoplay: 1,
          loop: 1,
          playlist: 'YOUR_YOUTUBE_VIDEO_ID', // Required for looping
          controls: 0,
          showinfo: 0,
          rel: 0,
          enablejsapi: 1,
          modestbranding: 1,
          iv_load_policy: 3,
          mute: 1
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
          }
        }
      });
    };
    
    // Clean up
    return () => {
      window.onYouTubeIframeAPIReady = null;
      if (player?.destroy) player.destroy();
    };
  }, []);

  return (
    <div 
      className="background-container" 
      aria-hidden="true"
    >
      <div 
        ref={playerRef}
        id="background-player"
        className="video-container"
      />
    </div>
  );
};

export default BackgroundAnimation;
