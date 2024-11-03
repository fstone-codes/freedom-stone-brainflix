import "./VideoUploadPage.scss";
import UploadForm from "../../components/UploadForm/UploadForm";

function VideoUploadPage() {
    return (
        <main className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <UploadForm />
        </main>
    );
}

export default VideoUploadPage;
