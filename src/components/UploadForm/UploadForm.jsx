import "./UploadForm.scss";
import Button from "../Button/Button";
import uploadPreview from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function UploadForm() {
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
        <form className="upload-form__form" onSubmit={handleFormSubmit}>
            <div className="upload-form__container">
                <div className="upload-form__thumbnail-container">
                    <p className="upload-form__label">VIDEO THUMBNAIL</p>
                    <img
                        className="upload-form__image"
                        src={uploadPreview}
                        alt="video preview image"
                    />
                </div>
                <div className="upload-form__content-container">
                    <div className="upload-form__title-container">
                        <label className="upload-form__label" htmlFor="title">
                            TITLE YOUR VIDEO
                        </label>
                        <input
                            onChange={handleTitleChange}
                            className="upload-form__input"
                            type="text"
                            name="title"
                            id="title"
                            value={title}
                            placeholder="Add a title to your video"
                        />
                    </div>
                    <div className="upload-form__description-container">
                        <label className="upload-form__label" htmlFor="description">
                            ADD A VIDEO DESCRIPTION
                        </label>
                        <textarea
                            onChange={handleDescriptionChange}
                            className="upload-form__input upload-form__input--textarea"
                            name="description"
                            id="description"
                            value={description}
                            placeholder="Add a description to your video"
                        />
                    </div>
                </div>
            </div>
            <div className="upload-form__cta-container">
                <Button
                    element="button"
                    btnText="PUBLISH"
                    imgSrc={publishIcon}
                    imgAlt="publish icon"
                />
                <p className="upload-form__cancel">
                    <Link className="upload-form__link" to="/">
                        CANCEL
                    </Link>
                </p>
            </div>
        </form>
    );
}

export default UploadForm;
