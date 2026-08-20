import "./Footer.css";
import mini from "../src/objectPic/down/minilogo.png";
import a1 from "../src/objectPic/down/v1.png";
import a2 from "../src/objectPic/down/v2.png";
import a3 from "../src/objectPic/down/v3.png";
import a4 from "../src/objectPic/down/v4.png";
import a5 from "../src/objectPic/down/v5.png";
import a6 from "../src/objectPic/down/v6.png";

import { ImEarth } from "react-icons/im";
import { FaPlusCircle } from "react-icons/fa";

export default function Footer() {
    const solanaLinks = ["Grants", "Break Solana", "Media Kit", "Careers", "Disclaimer"];
    const connectLinks = ["Ecosystem", "Blog", "Newsletter"];

    return (
        <div className="footer">
            <div className="box">
                <div className="footer-container">
                    <div className="footer-left">
                        <div className="footer-info">
                            <div className="footer-logos">
                                <img className="footer-logo" src={mini} alt="Logo" />
                                
                            </div>

                            <p className="footer-managed">Managed by Solana Foundation</p>

                            <div className="footer-social-icons">
                                <img src={a1} alt="" />
                                <img src={a2} alt="" />
                                <img src={a3} alt="" />
                                <img src={a4} alt="" />
                                <img src={a5} alt="" />
                                <img src={a6} alt="" />
                            </div>

                            <p className="footer-copy">©2023 Solana Foundation — All rights reserved</p>
                        </div>
                    </div>
     
                        <div className="footerRight">

                    <div className="footer-solana-links">
                        <h1>SOLANA</h1>
                        {solanaLinks.map((text, i) => (
                            <p key={i}>{text}</p>
                        ))}
                    </div>


                    <div className="footer-connect-links">
                        <h1>GET CONNECTED</h1>
                        {connectLinks.map((text, i) => (
                            <p key={i}>{text}</p>
                        ))}
                    </div>


                    <div className="footer-language">
                        <ImEarth />
                        <p>EN</p>
                    </div>
                        </div>

                </div>

            </div>

        </div>
    );
}
