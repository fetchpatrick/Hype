import React from 'react'

import SearchBar from './SearchResults/SearchBar/SearchBar'
import Ratings from '../Shared/Ratings/Ratings'

import SearchResults from './SearchResults/SearchResults'

function SearchHomePage() {
    return (
        <section style={{minHeight:'100vh', paddingTop: '10vh', display:'grid', placeItems:'center'}}>
            <div style={{border:'2px solid orange', height:'7vh'}}>
                <div>
                    <SearchBar/>
                </div>
            </div>
            {/* <div style={{border:'2px solid green', height:'7vh', }}>
                <div>
                    <Ratings/>
                </div>
            </div> */}
            <div style={{ height:'75vh', width:'90vw', border:'2px solid red', display:'flex' }}>
                    <SearchResults/>
            </div>
        </section>
    )
}

export default SearchHomePage;
