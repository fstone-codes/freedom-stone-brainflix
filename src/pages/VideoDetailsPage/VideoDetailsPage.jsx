import "./VideoDetailsPage.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseUrl, apiKey } from "../../utils.js";
import axios from "axios";
import Main from "../../components/Main/Main";

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
        <Main
            currentVideo={currentVideo}
            commentList={comments}
            getSingleVideoData={getSingleVideoData}
            videoQueue={revisedVideoQueue}
        />
    );
}

export default VideoDetailsPage;
