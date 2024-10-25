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
                    title={currentVideo.title}
                    channel={currentVideo.channel}
                    timestamp={currentVideo.timestamp}
                    views={currentVideo.views}
                    likes={currentVideo.likes}
                    description={currentVideo.description}
                />
                <CommentSection commentList={currentVideo.comments} />
                <QueueSection queueList={queueList} handleClick={handleClick} />
            </main>
        </>
    );
}

export default App;
