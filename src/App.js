import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Category from "./components/Category";
import Cart from "./components/Cart";
import logo from "./assets/deliveroo.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

library.add(faStar);

function App() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [order, setOrder] = useState({});
    const [valid, setValid] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://project-deliveroo-back.herokuapp.com/"
                );
                console.log(response.data);
                setData(response.data);
                setOrder(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, []);
    console.log(data.categories);

    return isLoading ? (
        <span>En cours de chargement... </span>
    ) : (
        <div>
            <Header
                logo={logo}
                name={data.restaurant.name}
                description={data.restaurant.description}
                picture={data.restaurant.picture}
            />

            <div className="category">
                <div className="wrapper">
                    <div className="list-meals">
                        {data.categories.map((elem, index) => {
                            return (
                                <Category
                                    key={index}
                                    meals={elem.meals}
                                    name={elem.name}
                                    icon="star"
                                    order={order}
                                    setOrder={setOrder}
                                    valid={valid}
                                    setValid={setValid}
                                />
                            );
                        })}
                    </div>

                    <div className="cart">
                        <Cart order={order} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
