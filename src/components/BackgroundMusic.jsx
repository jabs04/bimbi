import { useEffect, useRef } from 'react';

function BackgroundMusic({ shouldPlay }) {
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current && shouldPlay) {
            // Attempt to play music
            const playPromise = audioRef.current.play();

            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        console.log('Music started playing');
                    })
                    .catch((error) => {
                        console.log('Autoplay prevented:', error);
                    });
            }
        }
    }, [shouldPlay]);

    return (
        <audio
            ref={audioRef}
            loop
            preload="auto"
        >
            {/* Using a free romantic music URL - you can replace this with your own music file */}
            <source src="music/romantic-music.mp3" type="audio/mpeg" />
            {/* Fallback to a web-hosted romantic music if local file doesn't exist */}
            Your browser does not support the audio element.
        </audio>
    );
}

export default BackgroundMusic;
