import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Category = ({ name, meals, icon, order, setOrder, setValid }) => {
    return (
        meals.length > 0 && (
            <div className="allCard-meals">
                <h2>{name}</h2>

                <div className="allCard">
                    {meals.map((details, index) => {
                        return (
                            <div
                                className="card"
                                key={index}
                                onClick={() => {
                                    const order_card = details.title;
                                    if (order_card) {
                                        setOrder(order_card);
                                        setValid(true);
                                    } else {
                                        setOrder("");
                                    }
                                }}
                            >
                                <div className="card-desc">
                                    <h3>{details.title}</h3>
                                    <p>{details.description}</p>
                                    <div>
                                        <span className="price">
                                            {details.price} €
                                        </span>
                                        {details.popular === true && (
                                            <span className="popular">
                                                <FontAwesomeIcon
                                                    className="icone"
                                                    icon={icon}
                                                />
                                                Populaire
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="picture">
                                    {details.picture && (
                                        <img
                                            src={details.picture}
                                            alt="details.title"
                                        />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    );
};

export default Category;
