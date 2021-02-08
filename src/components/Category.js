const Category = ({ name, meals }) => {
    return (
        <div className="categories">
            {name}
            {meals.map((details, index) => {
                return (
                    <div key="id">
                        {details.title} <p>{details.description}</p>
                        <span>{details.prix}</span>
                        <img src={details.picture} alt="" />
                    </div>
                );
            })}
        </div>
    );
};

export default Category;
