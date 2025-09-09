import { useState, useEffect, useRef } from 'react';

const BackgroundMusic = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const iframeRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // Load YouTube API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player(iframeRef.current, {
        events: {
          onReady: (event) => {
            event.target.playVideo();
          }
        }
      });
    };
  }, []);

  const toggleMusic = () => {
    if (!playerRef.current) return;
    if (isMusicPlaying) {
      playerRef.current.mute();
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.unMute();
      playerRef.current.playVideo();
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <>
      <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '1px', height: '1px' }}>
        <iframe
          ref={iframeRef}
          width="1"
          height="1"
          src="https://www.youtube.com/embed/Q49pnA4jsp8?enablejsapi=1&autoplay=1&loop=1&playlist=Q49pnA4jsp8&mute=1"
          title="Background Music"
          frameBorder="0"
          allow="autoplay; encrypted-media"
        ></iframe>
      </div>

      <div className="fixed bottom-20 right-4 z-50">
        <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg flex items-center border border-pink-200">
          <button 
            onClick={toggleMusic}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white shadow-md hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
          >
            {isMusicPlaying ? '🔊' : '🔇'}
          </button>
          <span className="ml-2 text-sm text-pink-600 font-medium">
            {isMusicPlaying ? 'Music ON' : 'Music OFF'}
          </span>
        </div>
      </div>
    </>
  );
};

export default BackgroundMusic;
