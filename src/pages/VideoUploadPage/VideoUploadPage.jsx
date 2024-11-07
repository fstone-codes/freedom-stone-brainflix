import "./VideoUploadPage.scss";
import UploadForm from "../../components/UploadForm/UploadForm";

function VideoUploadPage({ getVideoQueueData }) {
    return (
        <main className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <UploadForm getVideoQueueData={getVideoQueueData} />
        </main>
    );
}

export default VideoUploadPage;
