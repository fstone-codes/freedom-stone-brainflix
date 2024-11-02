import "./VideoDetailsPage.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseUrl, apiKey } from "../../utils";
import axios from "axios";
import Video from "../../components/Video/Video";
import InfoSection from "../../components/InfoSection/InfoSection";
import CommentSection from "../../components/CommentSection/CommentSection";
import QueueSection from "../../components/QueueSection/QueueSection";

function VideoDetailsPage({ videoQueue }) {
    // identify the video clicked on, and pass the id to VideoDetailsPage
    // fetch the API data for that ID and use in this component

    const { videoId } = useParams();
    const [currentVideo, setCurrentVideo] = useState(null);
    const [comments, setComments] = useState(null);
    const id = videoId ?? videoQueue[0].id;

    const revisedVideoQueue = videoQueue.filter(
        (video) => video.id !== (videoId || videoQueue[0].id)
    );

    const getSingleVideoData = async (id) => {
        try {
            const { data } = await axios.get(`${baseUrl}/videos/${id}?api_key=${apiKey}`);
            setCurrentVideo(data);
            setComments(data.comments);
        } catch (error) {
            console.error("You have an error:", error);
        }
    };

    useEffect(() => {
        getSingleVideoData(id);
    }, [videoId]);

    if (!currentVideo) {
        return <div>Loading video...</div>;
    }

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
                    <CommentSection
                        commentList={comments}
                        getSingleVideoData={getSingleVideoData}
                        id={currentVideo.id}
                    />
                </div>
                <div className="main__queue-container">
                    <QueueSection videoQueue={revisedVideoQueue} />
                </div>
            </div>
        </main>
    );
}

export default VideoDetailsPage;
