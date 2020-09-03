import React, { useState, useEffect } from "react";
// import Friend from "../Friend/Friend";


import Country from '../Country/Country';


const Home = () => {

  // const [friends, setFriends] = useState([])

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then(response => response.json())
  //   .then(data => setFriends(data))
  // }, [])


    const [countries, setCountries] = useState([]);
    useEffect(() => {
  
      const url = `https://restcountries.eu/rest/v2/all`;
      fetch(url)
      .then((response) => response.json())
      .then(data => setCountries(data))
    
    
    }, []);



    return (
        <div>
              <h2>Friends : {countries.length}</h2>

              {/* {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
              } */}





              {
                countries.map(country => <Country key={country.alpha3Code} country={country} ></Country> )
              }
              
        </div>
    );
};

export default Home;