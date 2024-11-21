import { useEffect, useState } from "react";
import axios from "axios";

export default function Country() {
    const [data, setData] = useState(null);
    const [filterData ,setFilterData] = useState([])
    const [search , setSearch] = useState("")

    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((response) => {
                setData(response.data);
                setFilterData(response.data)
            })
            .catch((error) => {
                console.log("API not calling", error);
            });
    }, []);

    const handleSearch = (e) => {
        const searchValue = e.target.value.toLowerCase();
        setSearch(searchValue);
    
        const filtered = data.filter((country) =>
            country.name.common.toLowerCase().includes(searchValue)
        );
        setFilterData(filtered);
    };
    

    // Check if data is loaded before trying to render
    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="bg-black my-5">
                <h3 className="text-5xl text-center">All countries</h3>
                <input type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search the country here"
                className="text-3xl rounded-lg" />
                <div className="flex flex-col gap-5">
                    {filterData.map((country) => (
                        <div   className="flex flex-col gap-5">
                            <h3 className="text-3xl font-bold text-green-300">
                                Country: {country.name.common}
                            </h3>
                            <h3 className="text-3xl font-bold text-green-300">
                                Country: {country.name.official}
                            </h3>
                            <h3 className="text-3xl font-bold text-green-300">
                                Population: {country.population}
                            </h3>
                            <h3 className="text-3xl font-bold text-green-300">
                                Capital: {country.capital }
                            </h3>
                            <img
                                src={country.flags.png}
                                
                                className="w-32"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
