import "./HomePage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl, apiKey } from "../../utils";
import Main from "../../components/Main/Main";

function HomePage({ videoQueue }) {
    // use params (for the ID) and state another time
    // use second state to filter the videos
    // useEffect to fetch ID and use that to dictate which video goes where
    // refer to codealong for help - react router
    // specifically dynamic routing products details page

    const [currentVideo, setCurrentVideo] = useState(null);

    const getVideoData = async () => {
        try {
            const { data } = await axios.get(
                `${baseUrl}/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=${apiKey}`
            );
            setCurrentVideo(data);
        } catch (error) {
            console.error("You have an error:", error);
        }
    };

    useEffect(() => {
        getVideoData();
    }, []);

    if (!currentVideo) {
        return <div>Loading...</div>;
    }

    return <Main currentVideo={currentVideo} videoQueue={videoQueue} />;
}

export default HomePage;
