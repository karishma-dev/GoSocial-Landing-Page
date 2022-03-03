export default function Nav(){

    return (

        // Navigation Bar
        <nav className="grid-container">

            {/* Logo */}
            <a href="#" className="logo col-2">
                <picture>
                    <source media="(max-width: 780px)" width = "46" height = "20" srcSet="images/Logo-mobile.svg" />
                    <source media="(min-width: 780px)" width = "112" height = "16" srcSet="images/Logo.svg" />
                    <img src="images/Logo.svg" alt="" />
                </picture>
            </a>

            {/* Navigation Menu */}
            <ul className="nav-menu col-4">

                {/* Nav item */}
                <li className="nav-item">
                    <a href="#">
                        Home
                    </a>
                </li>

                {/* Nav item */}
                <li className="nav-item">
                    <a href="#">
                        Communities
                    </a>
                </li>

                {/* Nav item */}
                <li className="nav-item">
                    <a href="#">
                        Workshops
                    </a>
                </li>

                {/* Nav item */}
                <li className="nav-item">
                    <a href="#">
                        Challenges
                    </a>
                </li>

            </ul>

            {/* Nav input */}
            <form action="submit" className="col-3 form">
                <span id="search-icon"><img src="images/Search.svg" alt="" /></span>
                <input type="search" name="nav_search" id="nav-search" placeholder="Search" />
            </form>

            {/* Nav buttons */}
            <div className="nav-btns col-3">
                <a href="#" id="sign-up" className="link">Sign Up</a>
                <a href="#" id="sign-in" className="link">Sign In</a>
            </div>

            {/* Hamburger */}
            <span className="hamburger"><img src="images/Hamburger.svg" alt="" /></span>

        </nav>
    );
}