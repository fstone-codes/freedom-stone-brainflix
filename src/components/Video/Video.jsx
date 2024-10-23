import "./Video.scss";
import placeholder from "../../assets/images/Upload-video-preview.jpg";

function Video() {
    return <img className="video" src={placeholder} />;
    {
        /* <video className="video" autoPlay muted controls poster={placeholder}></video> */
    }
}

export default Video;
