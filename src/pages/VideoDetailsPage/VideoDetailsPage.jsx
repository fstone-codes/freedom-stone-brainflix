import "./VideoDetailsPage.scss";
import { useParams } from "react-router-dom";
import Main from "../../components/Main/Main";

function VideoDetailsPage({ videos, handleClick }) {
    const { videoId } = useParams();

    const foundVideo = videos.find((video) => video.id === videoId);

    return <Main currentVideo={foundVideo} videos={videos} handleClick={handleClick} />;
}

export default VideoDetailsPage;
