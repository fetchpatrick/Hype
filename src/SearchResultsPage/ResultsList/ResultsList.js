import React from 'react'
import axios from 'axios'

import { Link } from '@reach/router'

import './styles/ResultsList.css'






function ResultsList({data}) {
    console.log(data);

    if(!data) return "Start your search! Let's see what we can find!"
    
    return data.map((business)=>(
    
            <Link to={`/${business.id}`}>
                <div className='business' key={business.id}>
                    <div className='business__image'>
                        <img src={business.image_url}  alt="" />
                    </div>
                    
                        <div>
                            <h3>{business.name}</h3>
                            {/* <p>{(business.distance/1609.344).slice} mi away</p> */}
                            <p>{business.rating} stars</p>
                            {/* <p>{business.display_phone}</p> */}
                            
                        </div> 
                       

                    
                </div> 
            </Link>
    
    ))
}

export default ResultsList
