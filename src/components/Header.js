const Logo = () => {
    return (
        <img
            className="logo"
            src="https://www.clipartkey.com/mpngs/m/36-363643_lunch-box-logo-png.png" alt="logo" />
    )
}


const Header = () => {
    return (
        <div className="header">
            <Logo />
            <div className="navbar">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Sign In</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;