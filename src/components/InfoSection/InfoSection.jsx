import "./InfoSection.scss";
import likeIcon from "../../assets/icons/likes.svg";
import viewIcon from "../../assets/icons/views.svg";
import { useEffect, useState } from "react";
import { baseUrl } from "../../utils";
import axios from "axios";

function InfoSection({
    getSingleVideoData,
    convertTime,
    title,
    channel,
    timestamp,
    views,
    likes,
    description,
    id,
}) {
    const [likeCount, setLikeCount] = useState(likes);

    async function addVideoLike() {
        try {
            await axios.put(`${baseUrl}/videos/${id}/likes`);

            getSingleVideoData(id);
        } catch (error) {
            console.error("Error updating like count: ", error);
        }
    }

    useEffect(() => {
        setLikeCount(likes);
    }, [likes]);

    function handleLikeClick() {
        addVideoLike();
    }

    const formatNumber = (number) => number.toLocaleString("en-US");

    return (
        <section className="info">
            <h1 className="info__title">{title}</h1>
            <div className="info__container">
                <div className="info__data-container">
                    <p className="info__name">By {channel}</p>
                    <p className="info__data">{convertTime(timestamp)}</p>
                </div>
                <div className="info__data-container">
                    <p className="info__data">
                        <img className="info__icon" src={viewIcon} alt="view icon" />
                        {views}
                    </p>
                    <p className="info__data">
                        <img
                            onClick={handleLikeClick}
                            className="info__like"
                            src={likeIcon}
                            alt="like icon"
                        />
                        {formatNumber(likeCount)}
                    </p>
                </div>
            </div>
            <p className="info__description">{description}</p>
        </section>
    );
}

export default InfoSection;
