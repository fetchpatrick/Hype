import React, {useState} from 'react'
import axios from 'axios'

import SearchBar from './SearchBar/SearchBar'
import ResultsList from '../ResultsList/ResultsList'

import './Styles/Search.css'

const yelpAxios = axios.create({

    baseURL: 'https://beautifulsaviour.herokuapp.com/https://api.yelp.com/v3',
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    }
})



         
function Search() {
    const [data, setData] = useState()

    const runSearch = (searchTerm) => {

        try {
            
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("X-Requested-With", "XMLHttpRequest");
            myHeaders.append("Authorization", "Bearer w1ET8NxEyEkLh-vjfMcoTkyoRMzOVLSZinkqYfUK4oKA5EE-aF_xlrndZtutgCETRAp_skmruOLflanYQNZ9d2wa1CZYk4ReInlkMQMG98boSdCveHGQFLGRcdyYYHYx");

            var requestOptions = {
            method: 'GET',
            headers: myHeaders
            };

            fetch(`https://beautifulsaviour.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${searchTerm}&sort_by=distance`, requestOptions)
            .then(response => response.json())
            .then(result => setData(result.businesses))
            .catch(error => console.log('error', error));
                            
            // console.log(result.data)
        }
            catch (error) {
            console.error(`The error is ${error}`);
        }
    
    };


    return (
        <>  
            <div className='search'>
                <div className='search__bar'>
                    <SearchBar runSearch={runSearch}/>
                </div>
                <div className='search__results'>
                    <ResultsList data={data}/>
                </div>
            </div>
        </>
    )
}
 
export default Search
 
      



