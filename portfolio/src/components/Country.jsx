import { useEffect, useState } from "react";
import axios from "axios";

export default function Country() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log("API not calling", error);
            });
    }, []);

    // Check if data is loaded before trying to render
    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="bg-black my-5">
                <h3 className="text-5xl text-center">All countries</h3>
                <div className="flex flex-col gap-5">
                    {data.map((i) => (
                        <div  className="flex flex-col gap-5">
                            <h3 className="text-3xl font-bold text-green-300">
                                Country: {i.name.common}
                            </h3>
                            <h3 className="text-3xl font-bold text-green-300">
                                Country: {i.name.official}
                            </h3>
                            <h3 className="text-3xl font-bold text-green-300">
                                Population: {i.population}
                            </h3>
                            <h3 className="text-3xl font-bold text-green-300">
                                Capital: {i.capital }
                            </h3>
                            <img
                                src={i.flags.png}
                                
                                className="w-32"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
