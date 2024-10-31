import "./VideoUploadPage.scss";
import { Link } from "react-router-dom";
import uploadPreview from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";

function VideoUploadPage() {
    return (
        <main className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <form className="upload__form">
                <div className="upload__thumbnail-container">
                    <p>VIDEO THUMBNAIL</p>
                    <img className="upload__image" src={uploadPreview} alt="video preview image" />
                </div>
                <div className="upload__input-container">
                    <label className="upload__label">
                        TITLE YOUR VIDEO
                        <input className="upload__input" name="title" />
                    </label>
                    <label className="upload__label">
                        ADD A VIDEO DESCRIPTION
                        <textarea
                            className="upload__input upload__input--textarea"
                            name="description"
                        />
                    </label>
                </div>
                <div className="upload__cta-container">
                    <button className="btn">
                        <img className="btn__icon" src={publishIcon} alt="publish icon" />
                        PUBLISH
                    </button>
                    <p className="upload__cancel">
                        <Link className="upload__link" to="/">
                            CANCEL
                        </Link>
                    </p>
                </div>
            </form>
        </main>
    );
}

export default VideoUploadPage;
