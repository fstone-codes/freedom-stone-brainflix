import "./HomePage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl, apiKey } from "../../utils";
import Main from "../../components/Main/Main";

function HomePage({ videos, currentVideo, handleClick }) {
    const [videoData, setVideoData] = useState(null);

    const getVideoData = async () => {
        try {
            const { data } = await axios.get(`${baseUrl}/videos?api_key=${apiKey}`);
            setVideoData(data);
        } catch (error) {
            console.error("You have an error:", error);
        }
    };
    console.log(videoData);

    useEffect(() => {
        getVideoData();
        console.log(videoData);
    }, []);

    return <Main currentVideo={currentVideo} videos={videos} />;
}

export default HomePage;
