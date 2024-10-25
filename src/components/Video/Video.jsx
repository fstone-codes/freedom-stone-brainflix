import "./Video.scss";

function Video({ currentVideo }) {
    return <video className="video" autoPlay muted controls poster={currentVideo.image} />;
}

export default Video;
