import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountries}) => {
    const {name, flags, population, area, cca3} = country;
    const [visited, setVisited] = useState(false);

    const handleClick = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <img src={flags.png} alt="" />
            <h3 style={{ color: visited ? 'purple' : 'white' }}>Country Name: {name.common}</h3>
            <p>Population: {population}</p>
            <p>area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={()=>handleVisitedCountries(country)}>Mark as Done</button><br />
            <button onClick={handleClick}>{visited ? 'Visited': 'Going'}</button>
            {visited ? 'I visited':'Not visited'}
        </div>
    );
};

export default Country;