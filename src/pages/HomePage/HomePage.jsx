import "./HomePage.scss";
import { useEffect, useState } from "react";
import { baseUrl, apiKey } from "../../utils.js";
import axios from "axios";
import Main from "../../components/Main/Main";

function HomePage({ videoQueue }) {
    const [currentVideo, setCurrentVideo] = useState(null);
    const defaultId = videoQueue[0].id;
    const revisedVideoQueue = videoQueue.slice(1);

    const getVideoData = async () => {
        try {
            const { data } = await axios.get(`${baseUrl}/videos/${defaultId}?api_key=${apiKey}`);
            setCurrentVideo(data);
        } catch (error) {
            console.error("You have an error:", error);
        }
    };

    useEffect(() => {
        getVideoData();
    }, []);

    if (!currentVideo) {
        return <div>Loading home page...</div>;
    }

    return <Main currentVideo={currentVideo} videoQueue={revisedVideoQueue} />;
}

export default HomePage;
