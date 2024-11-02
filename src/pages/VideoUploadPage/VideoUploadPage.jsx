import "./VideoUploadPage.scss";
import { Link, useNavigate } from "react-router-dom";
import uploadPreview from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";
import { useState } from "react";
import Button from "../../components/Button/Button";

function VideoUploadPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert("Upload successful!");
        navigate("/");
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    return (
        <main className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <form className="upload__form" onSubmit={handleFormSubmit}>
                <div className="upload__container">
                    <div className="upload__thumbnail-container">
                        <p className="upload__label">VIDEO THUMBNAIL</p>
                        <img
                            className="upload__image"
                            src={uploadPreview}
                            alt="video preview image"
                        />
                    </div>
                    <div className="upload__input-container">
                        <label className="upload__label">
                            TITLE YOUR VIDEO
                            <input
                                onChange={handleTitleChange}
                                className="upload__input"
                                type="text"
                                name="title"
                                value={title}
                                placeholder="Add a title to your video"
                            />
                        </label>
                        <label className="upload__label">
                            ADD A VIDEO DESCRIPTION
                            <textarea
                                onChange={handleDescriptionChange}
                                className="upload__input upload__input--textarea"
                                name="description"
                                value={description}
                                placeholder="Add a description to your video"
                            />
                        </label>
                    </div>
                </div>
                <div className="upload__cta-container">
                    <Button
                        element="button"
                        btnText="PUBLISH"
                        imgSrc={publishIcon}
                        imgAlt="publish icon"
                    />
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
