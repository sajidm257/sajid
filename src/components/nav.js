

function Nav() {
  return (
    <div className="navbar">
      <div class="navbar-container container">
            <input type="checkbox" />
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            
            <ul class="menu-items">
                <li><a href="#top" active>Home</a></li>
                <li><a href="#about">About</a></li>
                {/* <li><a href="#education">Education</a></li> */}
                <li><a href="#services">Skills</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#tstimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <h1 class="logo">Hey There</h1>
        </div>
    </div>
  );
}

export default Nav;
