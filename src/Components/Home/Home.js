import React, { useState, useEffect } from "react";
import Country from '../Country/Country';
import { useHistory } from "react-router-dom";


const Home = () => {

    const [countries, setCountries] = useState([]);
    useEffect(() => {
  
      const url = `https://restcountries.eu/rest/v2/all`;
      fetch(url)
      .then((response) => response.json())
      .then(data => setCountries(data))
    
    
    }, []);

    const history = useHistory();
    const handleClick = (name) => {

      const url = `/country/${name}`;
      history.push(url);

    }

    return (
        <div>
              <h2 style={{textAlign: "center"}}>Countries : {countries.length}</h2>
              {
                countries.map(country => <Country handleClick={handleClick} showDetailBtn={true} key={country.alpha3Code} country={country} ></Country> )
              }
              
        </div>
    );
};

export default Home;