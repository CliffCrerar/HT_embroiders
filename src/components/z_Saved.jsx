/* TEMPLATE NAVBAR */
{/* Desktop view navbar */ }
<div className="collapse navbar-toggleable-sm" id="exCollapsingNavbar2">
    {/* Navbar brand */}
    <a className="brand-link" href={navLinksData[0].link}>
        <span className="navbar-logo navbar-logo-ext">
            <img id="logo" src={logoImg} alt="Mobirise" />
        </span>
        <span>
            <p className="navbar-brand-ext navbar-font">{brandName1}<br />{brandName2}</p>
        </span>
    </a>
    {/* Navbar links */}
    <ul className="nav navbar-nav pull-xs-right">
        {NavLinkElement}
    </ul>
</div>
{/* Mobile view button */ }
<button
    className="navbar-toggler pull-right hidden-md-up"
    type="button" data-toggle="collapse"
    data-target="#exCollapsingNavbar2">
    <div className="hamburger-icon"></div>
</button>