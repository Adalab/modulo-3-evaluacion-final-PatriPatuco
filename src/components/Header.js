import logo from "../images/HP-logo.png";

function Header() {
 return (
   <header className="header">
     <div className="video-container">
       <iframe
         src="https://www.youtube.com/embed/EpoQl729BNE?&autoplay=1&mute=1&playsinline=1&playlist=EpoQl729BNE&loop=1"
         title="YouTube video player"
       ></iframe>
     </div>

     <img
       className="header__logo"
       src={logo}
       title="Harry Potter"
       alt="Harry Potter logo"
     />
     <h1 className="header__title">Accio Wiki!</h1>
   </header>
 );
}

export default Header;