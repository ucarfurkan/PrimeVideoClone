import { ImAmazon } from "react-icons/im";

function Footer() {
    return (
        <footer className="footer text-center text-lg-start fixed-bottom">
            <div className="text-center p-3">
                © 2023 Copyright:
                <a className="footer-text" href="#">&nbsp; Amazon Prime &nbsp; {<ImAmazon />}</a>
            </div>
        </footer>
    )
}

export default Footer;