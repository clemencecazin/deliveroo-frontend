const Header = ({ name, description, picture, logo }) => {
    return (
        <header>
            <div className="header-logo">
                <div>
                    <img src={logo} alt="" />
                </div>
            </div>

            <div>
                <div>
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>

                <span>
                    <img src={picture} alt="" />
                </span>
            </div>
        </header>
    );
};

export default Header;
