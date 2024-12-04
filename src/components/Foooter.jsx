import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Foooter = () => {
    return (
        <footer className="footer py-5 text-center">
            <div className="container">
                <ul className="d-flex gap-4 justify-content-center">
                    <li>
                        <a href="#">Register</a>
                    </li>
                    <li>
                        <a href="#">Forum</a>
                    </li>
                    <li>
                        <a href="#">Affiliate</a>
                    </li>
                    <li>
                        <a href="#">FAQ</a>
                    </li>
                </ul>
                <ul className="my-5 d-flex gap-4 flex-column flex-md-row justify-content-center">
                    <li>
                        <a href="https://www.facebook.com">
                            <FaFacebookF /> facebook
                        </a>
                    </li>
                    <li>
                        <a href="https://www.x.com">
                            <FaTwitter /> Twitter
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com">
                            <FaYoutube /> Youtube
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com">
                            <FaLinkedinIn /> Linkedin
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com">
                            <FaInstagram /> Instagram
                        </a>
                    </li>
                </ul>
                <div className="row">
                    <p>
                        &copy; {new Date().getFullYear()}. Foodera. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Foooter;
