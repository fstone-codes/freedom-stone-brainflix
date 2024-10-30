import "./Header.scss";
import logo from "../../assets/logos/Brainflix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/icons/upload.svg";

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="BrainFlix logo" />
            <form className="header__form">
                <div className="header__container">
                    <input className="header__input" placeholder="Search"></input>
                    <div className="avatar avatar--between">
                        <img className="avatar__image" src={avatar} alt="user avatar" />
                    </div>
                </div>
                <button className="btn">
                    <img className="btn__icon" src={uploadIcon} alt="upload icon" />
                    UPLOAD
                </button>
                <div className="avatar avatar--after">
                    <img className="avatar__image" src={avatar} alt="user avatar" />
                </div>
            </form>
        </header>
    );
}

export default Header;
