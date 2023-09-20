import "../styles/Footer.css";
import { AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoTiktok } from 'react-icons/bi';
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai"
function Footer() {
    return (
        <footer>
            <div className="footer container py-4">
                

                <div className="col-md-12">

                    <div className="row footerUpperRow justify-content-between">

                        <div className="col-md-6 listItems float-start">
                            <div className="text-start help float-start d-inline-block">
                                <h6 className = "helpText">HELP</h6>
                                <ul className="text-start list-unstyled">
                                    <li>Help Center</li>
                                    <li>Contact Us</li>
                                    <li>Shipping Info</li>
                                    <li>Track My Order</li>
                                    <li>Returns & Exchanges</li>
                                </ul>
                            </div>

                            <div className="text-start more px-4 float-start d-inline-block">
                                <h6 className = "helpText">MORE</h6>
                                <ul className="list-unstyled">
                                    <li>Share the look</li>
                                    <li>About Us</li>
                                    <li>Careers</li>
                                    <li>Alphaland</li>
                                    <li>Summer Shredding</li>
                                </ul>
                            </div>
                        </div>


                        <div className="col-md-2 listItemsUpper3"></div>

                        <div className="col-md-6 listItems4 float-end">
                            <h6 className="newsLetterText"> SIGN UP FOR ALPHALETE <br /> NEWSLETTER </h6>
                            <div className="inputTab">
                                <input className="" type="text" placeholder="Your Email address" aria-label="default input example" />

                                <button className="signUpBtn text-white rounded-2 border-0">SIGN UP</button>

                            <hr/>
                            </div>
                            <div className="icons py-4 fs-4 d-flex justify-content-between">
                                <AiOutlineInstagram />
                                <AiOutlineTwitter />
                                <BiLogoTiktok />
                                <BiLogoFacebook />
                                <AiFillYoutube />
                            </div>
                        </div>

                    </div>



                    <div className="row">

                        <div className="text-center listItems3">
                            <div className="text-center centeredParagraph">
                                <p className="py-2 upperText fw-bolder mb-0"> <small>  © 2023 | Alphalete Athletics LLC | All Rights Reserved </small></p>
                                <h6 className="py-2 midText mb-0"> LEARN MORE | DREAM MORE | BE MORE </h6>
                                <p className="py-2 lowerText"> <small> PRIVACY POLICY
                                    |
                                    TERMS OF SERVICE
                                    |
                                    CCPA
                                </small>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </footer >
    )
}

export default Footer
