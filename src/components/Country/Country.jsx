import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    const {name, flags, population, area, cca3} = country;
    const [visited, setVisited] = useState(false);

    const handleClick = () => {
        setVisited(!visited);
    }
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h3>Country Name: {name.common}</h3>
            <p>Population: {population}</p>
            <p>area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={handleClick}>{visited ? 'Visited': 'Going'}</button>
            {visited ? 'I visited':'Not visited'}
        </div>
    );
};

export default Country;