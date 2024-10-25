import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import InfoSection from "./components/InfoSection/InfoSection";
import CommentSection from "./components/CommentSection/CommentSection";
import QueueSection from "./components/QueueSection/QueueSection";
import videoDetails from "./data/video-details.json";
import { useState } from "react";

function App() {
    const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);
    const [queueList, setQueueList] = useState(
        videoDetails.filter((videoItem) => videoItem !== currentVideo)
    );

    const handleClick = (videoId) => {
        const revisedQueue = [
            ...queueList.filter((videoItem) => videoItem.id !== videoId),
            currentVideo,
        ];
        setQueueList(revisedQueue);

        const clickedVideo = queueList.find((videoItem) => videoItem.id === videoId);
        setCurrentVideo(clickedVideo);
    };

    return (
        <>
            <Header />
            <main>
                <Video currentVideo={currentVideo} />
                <InfoSection
                    title={videoDetails[0].title}
                    channel={videoDetails[0].channel}
                    timestamp={videoDetails[0].timestamp}
                    views={videoDetails[0].views}
                    likes={videoDetails[0].likes}
                    description={videoDetails[0].description}
                />
                <CommentSection commentList={videoDetails[0].comments} />
                <QueueSection queueList={queueList} handleClick={handleClick} />
            </main>
        </>
    );
}

export default App;
