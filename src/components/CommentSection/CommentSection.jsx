import "./CommentSection.scss";
import CommentItem from "../CommentItem/CommentItem";

import commentIcon from "../../assets/icons/add_comment.svg";
import { useState } from "react";
import { baseUrl, apiKey } from "../../utils";
import axios from "axios";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";

function CommentSection({ commentList, getSingleVideoData, id }) {
    const [comment, setComment] = useState("");

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        postComment(comment);
        setComment("");
    };

    async function postComment(newComment) {
        try {
            let commentObj = {
                name: "Arrayuv Sunshine",
                comment: newComment,
            };

            await axios.post(`${baseUrl}/videos/${id}/comments?api_key=${apiKey}`, commentObj);

            getSingleVideoData(id);
        } catch (error) {
            console.error("Post request error: ", error);
        }
    }

    // no need for useEffect with post requests, only applicable for get requests which is covered in VideoDetailsPage

    return (
        <section className="comments">
            <p className="comments__subtitle">{commentList.length} Comments</p>
            <div className="comments__form-container">
                <Avatar />
                <form className="comments__form" onSubmit={handleFormSubmit}>
                    <label className="comments__label">
                        JOIN THE CONVERSATION
                        <textarea
                            onChange={handleCommentChange}
                            className="comments__input"
                            name="comment"
                            value={comment}
                            placeholder="Add a new comment"
                        ></textarea>
                    </label>
                    <Button
                        element="button"
                        btnText="COMMENT"
                        imgSrc={commentIcon}
                        imgAlt="comment icon"
                    />
                </form>
            </div>
            <ul className="comments__list">
                {commentList
                    .sort((a, b) => b.timestamp - a.timestamp)
                    .map((comment) => (
                        <CommentItem
                            key={comment.id}
                            name={comment.name}
                            timestamp={comment.timestamp}
                            comment={comment.comment}
                        />
                    ))}
            </ul>
        </section>
    );
}

export default CommentSection;
