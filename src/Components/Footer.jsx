import { FaFacebook, FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
    return(
        <footer className="footer footer-horizontal mt-40 footer-center bg-black text-white rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <a href = "#skills" className="link link-hover">Skills</a>
                <a href = "#projects" className="link link-hover">Projects</a>
                <a href = "#hire-me" className="link link-hover">Hire Me</a>
                <a href = "#about-me" className="link link-hover">About Me</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    
                    <a href= "https://www.facebook.com/rehan.rahmanzia.7/" target="_blank">
                        <FaFacebookF size={34} />
                    </a>

                    <a href="https://x.com/r_rrehan_" target="_blank">
                        <BsTwitterX size = {34}/>
                    </a>

                    <a href="https://www.instagram.com/r_rrehan_/" target="_blank">
                        <FaInstagram size={34} />
                    </a>
                </div>
            </nav>
            <aside>
                <p>© {new Date().getFullYear()} Rehan | Web Developer</p>
            </aside>
        </footer>
    )
}

export default Footer;