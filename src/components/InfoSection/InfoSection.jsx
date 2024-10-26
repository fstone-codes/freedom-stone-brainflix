import "./InfoSection.scss";
import viewIcon from "../../assets/icons/views.svg";
import likeIcon from "../../assets/icons/likes.svg";

function InfoSection({ title, channel, timestamp, views, likes, description }) {
    function convertTime(timestamp) {
        let timeDiff = Date.now() - timestamp;
        let calculatedDiff;
        let formattedDate;

        if (timeDiff < 60000) {
            calculatedDiff = Math.floor(timeDiff / 1000);
            if (calculatedDiff === 1) {
                formattedDate = `${calculatedDiff} second ago`;
            } else {
                formattedDate = `${calculatedDiff} seconds ago`;
            }
        } else if (timeDiff >= 60000 && timeDiff < 3600000) {
            calculatedDiff = Math.floor(timeDiff / 60000);
            if (calculatedDiff === 1) {
                formattedDate = `${calculatedDiff} minute ago`;
            } else {
                formattedDate = `${calculatedDiff} minutes ago`;
            }
        } else if (timeDiff >= 3600000 && timeDiff < 86400000) {
            calculatedDiff = Math.floor(timeDiff / 3600000);
            if (calculatedDiff === 1) {
                formattedDate = `${calculatedDiff} hour ago`;
            } else {
                formattedDate = `${calculatedDiff} hours ago`;
            }
        } else if (timeDiff >= 86400000 && timeDiff < 604800000) {
            calculatedDiff = Math.floor(timeDiff / 86400000);
            if (calculatedDiff === 1) {
                formattedDate = `${calculatedDiff} day ago`;
            } else {
                formattedDate = `${calculatedDiff} days ago`;
            }
        } else {
            let submissionDate = new Date(timestamp);
            formattedDate = submissionDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            });
        }
        return formattedDate;
    }

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
                        <img className="info__icon" src={likeIcon} alt="like icon" />
                        {likes}
                    </p>
                </div>
            </div>
            <p className="info__description">{description}</p>
        </section>
    );
}

export default InfoSection;
