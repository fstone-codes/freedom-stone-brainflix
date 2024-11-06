import "./Video.scss";
import { baseUrl } from "../../utils";

function Video({ currentVideo }) {
    return (
        <video
            className="video"
            autoPlay
            muted
            controls
            poster={`${baseUrl}/${currentVideo.image}`}
        />
    );
}

export default Video;
