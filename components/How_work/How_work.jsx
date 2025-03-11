import './How_work.css';

function How_work(){
    return (

        <section className=" how-work">
        <div className="container how-work-container">
            <div className="how-work-img"></div>
            <h2>How it works</h2>
        
            <div className="list">
                <div className="list-item" data-number="1">
                    <h3>Download the app.</h3>
                    <p>Download Empathy to your iPhone or Android device. Sign up to get started.</p>
                </div>
                <div className="list-item" data-number="2">
                    <h3>Personalize your journey.</h3>
                    <p>Every family and every situation is unique. We’ll ask you a few questions about your loved one to tailor our guidance to your specific needs.</p>
                </div>
                <div className="list-item" data-number="3">
                    <h3>Get comprehensive guidance and support.</h3>
                    <p>We are here to help you navigate any task, with all the digital tools, expert advice, and real-time assistance you need.</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default How_work;