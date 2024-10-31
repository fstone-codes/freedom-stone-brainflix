import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logos/Brainflix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/icons/upload.svg";

function Header() {
    const navigate = useNavigate();

    function handleBtnClick() {
        navigate("/upload");
    }

    return (
        <header className="header">
            <Link className="header__link" to="/">
                <img className="header__logo" src={logo} alt="BrainFlix logo" />
            </Link>
            <form className="header__form">
                <div className="header__container">
                    <input className="header__input" placeholder="Search"></input>
                    <div className="avatar avatar--between">
                        <img className="avatar__image" src={avatar} alt="user avatar" />
                    </div>
                </div>
                <button className="btn" onClick={handleBtnClick}>
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
