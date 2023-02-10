import footer from './footer.module.css'

const Footer = () => {
    return (
        <div>
            <footer className={footer.footer}>
                <div className="container">
                    <div className={footer.footerWraper}>
                    <div className={footer.github}>
                            <img src="https://denis-rovdo.github.io/rsschool-cv/icons/github.svg" alt="github icon" width="40" height="40" />
                            <ul>
                                <li><a  className={footer.githubItem} href="https://github.com/DaniyarKulov">DaniyarKulov</a></li>
                                <li><a className={footer.githubItem} href="https://github.com/kbakaeva">kbakaeva</a></li>
                                <li><a className={footer.githubItem} href="https://github.com/denis-rovdo">denis-rovdo</a></li>
                            </ul>
                        </div>
                        <h4 className={footer.fopterYear}>2023©</h4>
                        <a href="https://rs.school/index.html">
                            <img src="https://denis-rovdo.github.io/rsschool-cv/icons/rs_school_js.svg" alt="rsscool icon" width="80" height="80" />
                        </a>
                   </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;