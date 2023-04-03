import React from 'react';
import '../../Assets/Css/Footer.css'
import '../../Assets/Images/facebook.png'

function Footer(props) {
    return (
        <footer>
        <div className="policy">
            <div className="Contactus">
            <h4>Social Login</h4>
            <div className="logo">
            <a href="https://www.amazon.in/ref=nav_logo" title="FaceBook"><img src="https://img.icons8.com/ios-filled/300/ffffff/facebook--v1.png" alt="Sorry! Error Occured"/></a>
            <a href="https://twitter.com/login?lang=en" title="Twitter"><img src="https://img.icons8.com/glyph-neue/300/ffffff/twitter.png" alt="Sorry! Error Occured"/></a>
            <a href="https://github.com/" title="GitHuB"><img src="https://img.icons8.com/sf-regular/300/ffffff/github.png" alt="Sorry! Error Occured"/></a>
            <a href="https://www.instagram.com" title="Instagram"><img src="https://img.icons8.com/ios-filled/300/ffffff/instagram-new--v1.png" alt="Sorry! Error Occured"/></a>
            <a href="https://www.snapchat.com/" title="SnapChat"><img src="https://img.icons8.com/fluency-systems-filled/300/ffffff/snapchat.png" alt="Sorry! Error Occured"/></a>            
            </div>
            </div>
            <div className="Termsofuse">
                <a><h4>Terms of Use</h4></a>
            </div>
            <div className="PrivacyPolicy">
                <a ><h4>Privacy Policy</h4></a>
            </div>
        </div>
        <div className="copyright">
            <h5>© 2022-2023, Infikart.com, Inc. or its affiliates</h5>
        </div>
    </footer>
    );
}

export default Footer;