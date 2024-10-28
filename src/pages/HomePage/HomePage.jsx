import "./HomePage.scss";
import Video from "../../components/Video/Video";
import InfoSection from "../../components/InfoSection/InfoSection";
import CommentSection from "../../components/CommentSection/CommentSection";
import QueueSection from "../../components/QueueSection/QueueSection";
import videoData from "../../data/video-details.json";
import { useState } from "react";

function HomePage() {
    const [currentVideo, setCurrentVideo] = useState(videoData[0]);

    const videos = videoData.filter((videoItem) => videoItem !== currentVideo);

    const handleClick = (videoId) => {
        const clickedVideo = videos.find((videoItem) => videoItem.id === videoId);
        setCurrentVideo(clickedVideo);
    };

    return (
        <main className="main">
            <Video currentVideo={currentVideo} />
            <div className="main__container">
                <div className="main__content-container">
                    <InfoSection
                        title={currentVideo.title}
                        channel={currentVideo.channel}
                        timestamp={currentVideo.timestamp}
                        views={currentVideo.views}
                        likes={currentVideo.likes}
                        description={currentVideo.description}
                    />
                    <CommentSection commentList={currentVideo.comments} />
                </div>
                <div className="main__queue-container">
                    <QueueSection videos={videos} handleClick={handleClick} />
                </div>
            </div>
        </main>
    );
}

export default HomePage;
