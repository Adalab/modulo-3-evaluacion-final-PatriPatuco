import logo from "../images/HP-logo.png";

function Header() {
 return (
    <header className="header">
        <img className="header__logo" src={logo} title="Harry Potter" alt="Harry Potter logo"/>
        <h1 className="header__title">Accio Wiki!</h1>
    </header>
 );
}

export default Header;