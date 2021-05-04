import React from 'react'

import SearchBar from './SearchBar/SearchBar'
import Ratings from '../Shared/Ratings/Ratings'

function SearchHomePage() {
    return (
        <section style={{minHeight:'100vh', paddingTop: '10vh', display:'grid', placeItems:'center'}}>
            <div style={{border:'2px solid orange', height:'7vh'}}>
                <div>
                    <SearchBar/>
                </div>
            </div>
            <div style={{border:'2px solid green', height:'7vh', }}>
                <div>
                    <Ratings/>
                </div>
            </div>
            <div style={{border:'2px solid blue', height:'60vh', display:'flex'  }}>
                <div style={{ backgroundColor:'yellow',width:'30vw', height: 'auto'}}>
                    {/* <SearchResults/> */}
                </div>
                <div style={{ backgroundColor:'brown', width:'60vw', height: '100%'}}>
                    {/* <GoogleMap/> */}
                </div>
            </div>
        </section>
    )
}

export default SearchHomePage;
