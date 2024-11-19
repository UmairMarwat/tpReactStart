import { useEffect, useState } from "react";
import axios from 'axios';

export default function Country() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then((response) => {
                const country = response.data.find((c) => c.name.common === "India");
                setData(country);
            })
            .catch((error) => {
                console.log("Error in fetching", error);
            });
    }, []);

    // Check if data is loaded before trying to render
    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="bg-black my-5">
                <h3 className="text-3xl font-bold text-green-300">{data.name.common}</h3>
                <h3 className="text-3xl font-bold text-green-300">{data.population}</h3>
                <h3 className="text-3xl font-bold text-green-300">{data.capital}</h3>
                <img src={data.flags.png} alt="Flag" />

            </div>
        </div>
    );
}
