import header from './Header.module.css'

const Header = () => {
    return (
        <header className={header.header}>
            <div className="container">
                <h1 className={header.headerText}>Trello:</h1>
            </div>
        </header>
    )
}

export default Header;