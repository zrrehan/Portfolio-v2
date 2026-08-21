import { FaFacebook, FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
    return(
        <footer className="footer footer-horizontal mt-40 footer-center bg-black text-white rounded p-10">
            <aside>
                <p>© {new Date().getFullYear()} Rehan | Software Engineer | Game Developer | Gamer | 7</p>
            </aside>
        </footer>
    )
}

export default Footer;