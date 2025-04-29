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
        videoId: '6hxjHQk9t4Q', // Replace with your YouTube video ID
        playerVars: {
          autoplay: 1,
          loop: 1,
          playlist: '6hxjHQk9t4Q', // Required for looping
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
      aria-hidden="true" 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
        pointerEvents: 'none', // This makes clicks go through to elements below
      }}
    >
      <div 
        ref={playerRef}
        id="background-player"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100vw',
          height: '100vh',
          transform: 'translate(-50%, -50%) scale(1.5)', // Scale up to cover
        }}
      />
    </div>
  );
};

export default BackgroundAnimation;