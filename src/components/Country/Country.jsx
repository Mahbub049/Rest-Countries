import './Country.css'
const Country = ({country}) => {
    const {name, flags} = country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h3>Country Name: {name.common}</h3>
        </div>
    );
};

export default Country;