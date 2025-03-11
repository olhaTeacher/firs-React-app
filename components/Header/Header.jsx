import './Header.css';
import siteLogo from '../Img/logo.svg';


function Header(){

    return (
        <header>
        <div className="container">
            <nav>
                <a href="/">
                    <img src={siteLogo} alt="logotype" />
                </a>
                <div className="menu">
                    <a href="#">About</a>
                    <a href="#">Learn</a>
                    <a href="#">Partner</a>
                    <a href="#">COVID-19</a>
                </div>
    
            </nav>

        </div>
         <div className="container main-top">
            <h1>Losing a loved one <br /> is hard enough.</h1>
            <p className="top-p">
                Empathy is here to help you with everything that comes next. 
            </p>
            <p className="botton-p">
                We guide and support you along your journey of loss, giving you the tools to navigate and prioritize every task.
            </p>
            <span>Try it for free:</span>
            <form>
                <input type="tell" placeholder="(222) 123-4512" className="filed" pattern="\(?\d{3}\?)-\d{3}-\d{4}" />
                <input type="button" value="Text Me the App" className="btn-submit" />
            </form>
         </div>
    </header>
    )
}


export default Header;