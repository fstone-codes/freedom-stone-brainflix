import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/Brainflix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/icons/upload.svg";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";

function Header() {
    return (
        <header className="header">
            <Link className="header__link" to="/">
                <img className="header__logo" src={logo} alt="BrainFlix logo" />
            </Link>
            <div className="header__container">
                <input className="header__input" placeholder="Search"></input>
                <Avatar />
                <Button
                    element={Link}
                    btnText="UPLOAD"
                    imgSrc={uploadIcon}
                    imgAlt="upload icon"
                    path="/upload"
                />
            </div>
        </header>
    );
}

export default Header;
