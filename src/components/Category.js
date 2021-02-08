const Category = ({ name, meals, icon }) => {
    return (
        <div className="categories">
            {name}
            {meals.map((details, index) => {
                return (
                    <div key="id">
                        {details.title} <p>{details.description}</p>
                        <span>{details.prix}</span>
                        <img src={details.picture} alt="" />
                        {details.popular === true && (
                            <span>{icon}Populaire</span>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Category;
