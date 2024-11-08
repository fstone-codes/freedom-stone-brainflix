import "./CommentItem.scss";
import { useState, useEffect } from "react";
import { baseUrl } from "../../utils";
import axios from "axios";
import likeIcon from "../../assets/icons/likes.svg";
import deleteIcon from "../../assets/icons/delete.svg";

function CommentItem({
    getSingleVideoData,
    convertTime,
    name,
    timestamp,
    comment,
    videoId,
    commentId,
    likes,
}) {
    const [likeCount, setLikeCount] = useState(likes);

    async function addCommentLike() {
        try {
            await axios.put(`${baseUrl}/videos/${videoId}/comments/${commentId}`);

            getSingleVideoData(videoId);
        } catch (error) {
            console.error("Error updating like count: ", error);
        }
    }

    useEffect(() => {
        setLikeCount(likes);
    }, [likes]);

    async function removeComment() {
        try {
            await axios.delete(`${baseUrl}/videos/${videoId}/comments/${commentId}`);

            getSingleVideoData(videoId);
        } catch (error) {
            console.error("Error removing comment: ", error);
        }
    }

    function handleLikeClick() {
        addCommentLike();
    }

    function handleDeleteClick() {
        removeComment();
    }

    return (
        <li className="comments__item">
            <div className="avatar"></div>
            <div className="comments__content-container">
                <div className="comments__details-container">
                    <p className="comments__name">{name}</p>
                    <p className="comments__date">{convertTime(timestamp)}</p>
                </div>
                <p className="comments__comment">{comment}</p>
                <div className="comments__icon-container">
                    <div className="comments__like-container">
                        <img
                            onClick={handleLikeClick}
                            className="comments__like"
                            src={likeIcon}
                            alt="like icon"
                        />
                        {likeCount}
                    </div>
                    <img
                        onClick={handleDeleteClick}
                        className="comments__delete"
                        src={deleteIcon}
                        alt="delete icon"
                    />
                </div>
            </div>
        </li>
    );
}

export default CommentItem;
