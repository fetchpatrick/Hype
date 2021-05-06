import React, {useState} from 'react'
import SearchResultsList from './SearchResultsList/SearchResultsList'
// import GoogleMaps from 'googleMAps'


export default function SearchResults() {

    const [businesses, setBusinesses] = useState([]);

    return (
        <>
            <SearchResultsList/>
            {/* <GoogleMaps/> */}
            <div style={{width:'50%', hieght:'100%', border:'2px soild green'}}></div>
        </>
    )
}

