import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import videoData from "./data/video-details.json";
import { useState } from "react";

function App() {
    const [currentVideo, setCurrentVideo] = useState(videoData[0]);

    const videos = videoData.filter((videoItem) => videoItem !== currentVideo);

    const handleClick = (videoId) => {
        const clickedVideo = videos.find((videoItem) => videoItem.id === videoId);
        setCurrentVideo(clickedVideo);
    };

    return (
        <>
            <Header />
            <Main currentVideo={currentVideo} videos={videos} handleClick={handleClick} />
        </>
    );
}

export default App;
