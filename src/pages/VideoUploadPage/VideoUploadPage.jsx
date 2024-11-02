import "./VideoUploadPage.scss";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
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
