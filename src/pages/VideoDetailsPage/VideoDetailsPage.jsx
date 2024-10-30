import "./VideoDetailsPage.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import Main from "../../components/Main/Main";
import { useState, useEffect } from "react";
import { baseUrl, apiKey } from "../../utils";

function VideoDetailsPage({ videoQueue }) {
    // identify the video clicked on, and pass the id to VideoDetailsPage
    // fetch the API data for that ID and use in this component

    const [currentVideo, setCurrentVideo] = useState(null);
    const { videoId } = useParams();

    const getVideoData = async (id) => {
        try {
            const { data } = await axios.get(`${baseUrl}/videos/${id}?api_key=${apiKey}`);
            setCurrentVideo(data);
            console.log(data);
        } catch (error) {
            console.error("You have an error:", error);
        }
    };

    useEffect(() => {
        getVideoData(videoId);
    }, []);

    if (!currentVideo) {
        return <div>Loading...</div>;
    }

    return <Main currentVideo={currentVideo} videoQueue={videoQueue} />;
}

export default VideoDetailsPage;
