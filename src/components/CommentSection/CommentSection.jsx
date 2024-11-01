import "./CommentSection.scss";
import CommentItem from "../CommentItem/CommentItem";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/icons/add_comment.svg";
import { useEffect, useState } from "react";
import { baseUrl, apiKey } from "../../utils";
import axios from "axios";

function CommentSection({ commentList, fetchData, id }) {
    const [comment, setComment] = useState("");

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        postComment(comment);
        console.log(comment);
        setComment("");
        fetchData(id);
        e.target.reset();
    };

    async function postComment(newComment) {
        try {
            let commentObj = {
                name: "Arrayuv Sunshine",
                comment: newComment,
            };

            await axios.post(`${baseUrl}/videos/${id}/comments?api_key=${apiKey}`, commentObj);

            // setComment(...commentList, commentObj);
            fetchData(id);
        } catch (error) {
            console.error("Post request error: ", error);
        }
    }

    // console.log("Comment list: ", commentList);

    // no need for useEffect with post because

    return (
        <section className="comments">
            <p className="comments__subtitle">{commentList.length} Comments</p>
            <div className="comments__form-container">
                <div className="avatar">
                    <img className="avatar__image" src={avatar} alt="user avatar" />
                </div>
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
                    <button className="btn">
                        <img className="btn__icon" src={commentIcon} alt="comment icon" />
                        COMMENT
                    </button>
                </form>
            </div>
            <ul className="comments__list">
                {commentList.map((comment) => (
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
