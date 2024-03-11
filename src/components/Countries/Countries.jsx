import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect (()=> {
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => setCountries(data))
    }, [])

    const handleVisitedCountries = country => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    console.log(countries)
    return (
        <div>
            <div>
                <h3>Total Visited Country: {visitedCountries.length}</h3>
                <h3>Visited Countries: </h3>
                <ul>
                    {
                        visitedCountries.map(countries => <li>{countries.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="countries">
                {
                    countries.map(country => <Country key={country.cca3} handleVisitedCountries={handleVisitedCountries} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;