const Header = ({ name, description, picture }) => {
    return (
        <header>
            <h2>{name}</h2>
            <p>{description}</p>
            <div>
                <img src={picture} alt="" />
            </div>
        </header>
    );
};

export default Header;
