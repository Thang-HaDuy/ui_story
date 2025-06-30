// src/components/VideoPlayer.tsx
'use client';

import ReactPlayer from 'react-player';
import {
    MediaController,
    MediaControlBar,
    MediaTimeRange,
    MediaTimeDisplay,
    MediaVolumeRange,
    MediaPlaybackRateButton,
    MediaPlayButton,
    MediaSeekBackwardButton,
    MediaSeekForwardButton,
    MediaMuteButton,
    MediaFullscreenButton,
} from 'media-chrome/react';
import { Box } from '@mui/material';
import { API_BASE_URL } from '@/constants/api';

const MovieEpisode = ({ url }: { url: string }) => {
    return (
        <MediaController
            style={{
                width: '100%',
                aspectRatio: '16/9',
                marginBottom: '15px',
            }}
        >
            <ReactPlayer
                slot="media"
                src={API_BASE_URL + url}
                controls={false}
                style={{
                    width: '100%',
                    height: '100%',
                }}
            ></ReactPlayer>
            <MediaControlBar>
                <MediaPlayButton />
                <MediaSeekBackwardButton seekOffset={10} />
                <MediaSeekForwardButton seekOffset={10} />
                <MediaTimeRange />
                <MediaTimeDisplay showDuration />
                <MediaMuteButton />
                <MediaVolumeRange />
                <MediaPlaybackRateButton />
                <MediaFullscreenButton />
            </MediaControlBar>
        </MediaController>
    );
};

export default MovieEpisode;
