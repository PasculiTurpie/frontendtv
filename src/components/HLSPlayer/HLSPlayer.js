// src/components/HLSPlayer.js
import React, { useRef, useEffect } from 'react';
import Hls from 'hls.js';

const HLSPlayer = ({ src, width = "100%", height = "auto", controls = true, muted="muted" }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(src);
            hls.attachMedia(videoRef.current);

            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                videoRef.current.play();
            });

            return () => {
                hls.destroy();
            };
        } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
            // Para navegadores como Safari que tienen soporte nativo para HLS
            videoRef.current.src = src;
            videoRef.current.addEventListener('loadedmetadata', () => {
                videoRef.current.play();
            });
        }
    }, [src]);

    return (
        <video
            ref={videoRef}
            width={width}
            height={height}
            controls={controls}
            style={{ backgroundColor: 'black' }}
            muted={muted}
        />
    );
};

export default HLSPlayer;
