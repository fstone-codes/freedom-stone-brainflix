import "./HomePage.scss";
import Main from "../../components/Main/Main";

function HomePage({ videos, currentVideo, handleClick }) {
    return <Main currentVideo={currentVideo} videos={videos} />;
}

export default HomePage;
