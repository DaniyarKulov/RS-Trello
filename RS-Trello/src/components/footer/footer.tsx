

const Footer = () => {
    return (
        <div>
            <footer className="foter">
                <div className="foterContainer">
                    <a href="https://github.com/denis-rovdo" className="github">
                        <img className="githubIcon" src="https://denis-rovdo.github.io/rsschool-cv/icons/github.svg" alt="github icon" width="40" height="40" />
                        <ul className="githubList">
                            <li><a  href="https://github.com/DaniyarKulov">DaniyarKulov</a></li>
                            <li><a href="https://github.com/kbakaeva">kbakaeva</a></li>
                            <li><a href="https://github.com/denis-rovdo">denis-rovdo</a></li>
                        </ul>
                    </a>
                    <h4 className="foterYear">2023©</h4>
                    <a href="https://rs.school/js-stage0/" className="rsscool">
                        <img src="https://denis-rovdo.github.io/rsschool-cv/icons/rs_school_js.svg" alt="rsscool icon" className="rsscoolIcon" width="80" height="80" />
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Footer;