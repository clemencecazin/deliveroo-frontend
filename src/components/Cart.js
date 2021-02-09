const Cart = ({ order }) => {
    return (
        <div className="inside-cart">
            <button>Valider</button>
            <span>{order}</span>
            <div className="inside-cart--order">Coucou</div>
        </div>
    );
};

export default Cart;
