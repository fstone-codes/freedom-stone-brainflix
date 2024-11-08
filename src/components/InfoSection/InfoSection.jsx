import "./InfoSection.scss";
import { useEffect, useState } from "react";
import { baseUrl } from "../../utils";
import axios from "axios";
import likeIcon from "../../assets/icons/likes.svg";
import viewIcon from "../../assets/icons/views.svg";

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
    // store the like count values
    // update as like button clicked on
    const [likeCount, setLikeCount] = useState(likes);

    // put incremented like value + fetch updated comments for current like count
    async function addVideoLike() {
        try {
            await axios.put(`${baseUrl}/videos/${id}/likes`);

            getSingleVideoData(id);
        } catch (error) {
            console.error("Error updating like count: ", error);
        }
    }

    // when likes variable is updated/changed, update the stored likes value accordingly
    useEffect(() => {
        setLikeCount(likes);
    }, [likes]);

    // update state memory to reflect changes
    function handleLikeClick() {
        addVideoLike();
    }

    // format number to utilise commas
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
