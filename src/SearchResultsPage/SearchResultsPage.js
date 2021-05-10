import React, {useState} from 'react'
import axios from 'axios'

import SearchBar from './SearchBar/SearchBar'
import ResultsList from './ResultsList/ResultsList'

import './styles/SearchResultsPage.css'




function SearchResultsPage() {
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
        <section className='search'>
            <div className='search__bar' >
                <div>
                    <SearchBar 
                        runSearch={runSearch}
                    />
                </div>
            </div>
            <div className='search__results' >
                    <div className='search__results--list'>
                        <ResultsList data={data}/>
                    </div>
            </div>
        </section>
    )
}

export default SearchResultsPage;
