export default function Nav(){

    return (

        // Navigation Bar
        <nav className="grid-container">

            {/* Logo */}
            <a href="#" className="logo col-2">
                <picture>
                    <source media="(max-width: 780px)" width = "46" height = "20" srcset="images/Logo-mobile.svg" />
                    <source media="(min-width: 780px)" width = "112" height = "16" srcset="images/Logo.svg" />
                    <img src="images/Logo.svg" alt="" />
                </picture>
            </a>

            {/* Navigation Menu */}
            <ul class="nav-menu col-4">

                {/* Nav item */}
                <li class="nav-item">
                    <a href="#">
                        Home
                    </a>
                </li>

                {/* Nav item */}
                <li class="nav-item">
                    <a href="#">
                        Communities
                    </a>
                </li>

                {/* Nav item */}
                <li class="nav-item">
                    <a href="#">
                        Workshops
                    </a>
                </li>

                {/* Nav item */}
                <li class="nav-item">
                    <a href="#">
                        Challenges
                    </a>
                </li>

            </ul>

            {/* Nav input */}
            <form action="submit" class="col-3 form">
                <span id="search-icon"><img src="images/Search.svg" alt="" /></span>
                <input type="search" name="nav_search" id="nav-search" placeholder="Search" />
            </form>

            {/* Nav buttons */}
            <div class="nav-btns col-3">
                <a href="#" id="sign-up" class="link">Sign Up</a>
                <a href="#" id="sign-in" class="link">Sign In</a>
            </div>

            {/* Hamburger */}
            <span class="hamburger"><img src="images/Hamburger.svg" alt="" /></span>

        </nav>
    );
}