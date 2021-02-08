import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Category from "./components/Category";

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
                    <Category key={index} meals={elem.meals} name={elem.name} />
                );
            })}
        </div>
    );
}

export default App;
