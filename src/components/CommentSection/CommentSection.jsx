import "./CommentSection.scss";
import { useState } from "react";
import { baseUrl } from "../../utils";
import axios from "axios";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import CommentItem from "../CommentItem/CommentItem";
import commentIcon from "../../assets/icons/add_comment.svg";

function CommentSection({ commentList, convertTime, getSingleVideoData, id }) {
    // store the form comment input values
    // update as a change (typing) occurs
    const [comment, setComment] = useState("");
    // store the status of invalid inputs
    // there are no invalid inputs initially
    const [invalidStatus, setInvalidStatus] = useState(false);

    // update state memory to reflect changes
    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };
    console.log(commentList);

    // remove spaces before entry + validate input upon submission
    // if the form comment input value is empty, notify user + do not submit
    // otherwise, reset comment + invalidStatus state and post comment
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (comment.trim()) {
            setInvalidStatus(false);
            postComment(comment);
            setComment("");
        } else {
            setInvalidStatus(true);
            alert("Please input a valid comment");
        }
    };

    // post form comment input value + fetch updated comments for current video
    async function postComment(newComment) {
        try {
            const commentObj = {
                name: "Arrayuv Sunshine",
                comment: newComment,
            };

            await axios.post(`${baseUrl}/videos/${id}/comments`, commentObj);

            getSingleVideoData(id);
        } catch (error) {
            console.error("Post request error: ", error);
        }
    }

    // **no need for useEffect with post requests, only applicable for get requests which is covered in VideoDetailsPage**

    return (
        <section className="comments">
            <h2 className="comments__subtitle">{commentList.length} Comments</h2>
            <div className="comments__form-container">
                <Avatar />
                <form className="comments__form" onSubmit={handleFormSubmit}>
                    <label className="comments__label">
                        JOIN THE CONVERSATION
                        <textarea
                            onChange={handleCommentChange}
                            className={`comments__input ${
                                invalidStatus ? "comments__input--invalid" : ""
                            }`}
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
                            getSingleVideoData={getSingleVideoData}
                            key={comment.id}
                            name={comment.name}
                            timestamp={comment.timestamp}
                            comment={comment.comment}
                            likes={comment.likes}
                            videoId={id}
                            commentId={comment.id}
                            convertTime={convertTime}
                        />
                    ))}
            </ul>
        </section>
    );
}

export default CommentSection;
