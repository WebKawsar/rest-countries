import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Country from '../Country/Country';

const CountryDetail = () => {
    const {countyName} = useParams();

    const [countryInfo, setCountryInfo] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countyName}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {

            const country = data.find(country => country.name === countyName)
            setCountryInfo(country);
        })

    }, [])

    return (
        <div>
            <h2 style={{textAlign: "center"}}>{countyName} Country Details Page</h2>
            <Country showDetailBtn={false} country={countryInfo}></Country>
        </div>
    );
};

export default CountryDetail;