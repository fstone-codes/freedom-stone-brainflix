import "./VideoDetailsPage.scss";
import { useParams } from "react-router-dom";
import Main from "../../components/Main/Main";

function VideoDetailsPage({ videoQueue }) {
    const { videoId } = useParams();

    const foundVideo = videoQueue.find((video) => video.id === videoId);

    return <Main currentVideo={foundVideo} videoQueue={videoQueue} />;
}

export default VideoDetailsPage;
