import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Category from "./components/Category";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

import { useState, useEffect } from "react";

function App() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3100/");
                console.log(response.data);
                setData(response.data);
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
                name={data.restaurant.name}
                description={data.restaurant.description}
                picture={data.restaurant.picture}
            />
            {data.categories.map((elem, index) => {
                return (
                    <Category
                        key={index}
                        meals={elem.meals}
                        name={elem.name}
                        icon={star}
                    />
                );
            })}
        </div>
    );
}

export default App;
