import './Footer.css';

function Footer(){
    return (

        <footer>
        <div className="container">
            <div className="footer-content">
            <div className="company">
                <p>Company</p>
                <ul>
                    <li>About</li>
                    <li>Join the Team</li>
                    <li>Partner With Us</li>
                    <li>Press</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="resourse">
                <p>Resources</p>
                <ul>
                    <li>Learn</li>
                    <li>FAQ</li>
                    <li>COVID-19</li>
                    <li>Help</li>
                </ul>
            </div>
            <div className="link">
                <button>Subscribe to Our Newsletter</button>
                <button className="link-img"><a href="">✂</a>
                </button>
                <button className="link-img"><a href="">✂</a></button>
                <button className="link-img"><a href="">✂</a></button>
                <button className="link-img"><a href="">✂</a></button>
            </div>
        </div>
       
        <div className="app">
            <p>Empathy is for everyone, because loss affects everyone. We’re proud to support every person and family, regardless of their age, race, religion, ethnicity, gender identity, or sexual orientation.</p>
            <div className="app-img">
                <a href=""><img src="img/appq.png" alt="" /></a>
                <a href=""><img src="img/app2.png" alt="" /></a>
            </div>
        </div>
        <div className="author">
            <p>1178 Broadway New York, NY 10001</p>
            <p>© 2021 Empathy. All rights reserved.</p>
        </div>
    </div>
     </footer>
    )
}


export default Footer;