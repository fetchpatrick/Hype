import React, {useState} from 'react'
import axiox from 'axios'

import './styles/BusinessInfopage.css';


import businessImg from '../LandingPage/assetts/hype-hero.png'

function BusinessInfoPage({businessId}) {
    const [business, setBusiness]= useState('')

    if(businessId){
        const runSearch = (businessId) => {

            try {
                
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("X-Requested-With", "XMLHttpRequest");
                myHeaders.append("Authorization", "Bearer w1ET8NxEyEkLh-vjfMcoTkyoRMzOVLSZinkqYfUK4oKA5EE-aF_xlrndZtutgCETRAp_skmruOLflanYQNZ9d2wa1CZYk4ReInlkMQMG98boSdCveHGQFLGRcdyYYHYx");
    
                var requestOptions = {
                method: 'GET',
                headers: myHeaders
                };
    
                fetch(`https://beautifulsaviour.herokuapp.com/https://api.yelp.com/v3/businesses/${businessId}`, requestOptions)
                .then(response => response.json())
                .then(result => setBusiness(result))
                .catch(error => console.log('error', error));
                                
            }
                catch (error) {
                console.error(`The error is ${error}`);
            }
        
        };
        runSearch(businessId);
    }
    
    return (
        <section style={{minHeight:'100vh', paddingTop: '15vh', display:'grid', placeItems:'center', backgroundColor:'#feffe5', borderRadius:'5px'}}>
                <div style={{ minHeight: '40vh', width:'auto'}}>
                    <div style={{height:'381px', backgroundSize: "cover", backgroundRepeat: 'no-repeat',width:'80%', margin:'0 auto 0 auto', backgroundImage: `url(${business.image_url})`, borderRadius:'5px'}}>
                
                    </div>
                </div>
                <div style={{ minHeight: '5vh', width:'98vw'}}>
                    <div style={{height:'100%', width:'80%', margin:'3vh auto 0 auto', backgroundColor:'white', padding: '20px'}}>
                    <h3>{business.name}</h3>
                        {/* <p>{(business.distance/1609.344).slice} mi away</p> */}
                        <p>{business.rating} stars</p>
                        <p>{business.display_phone}</p>
                        <p>{business.location.display_address[0]}</p>
                        <p>{business.location.display_address[1]}</p>
                        <p>{business.location.display_address[2]}</p>
                    </div>
                </div>

                <div style={{ minHeight: '5vh', width:'98vw', marginBottom:'30px'}}>
                    <div style={{height:'100%', width:'80%', margin:'0 auto 0 auto', marginTop: '3vh'}}>
                        <button className='button'> Write a Review!</button>
                    </div>
                </div>
                <div style={{ minHeight: '50vh', width:'98vw'}}>
                    <div style={{height:'100%', width:'80%', margin:'0 auto 0 auto'}}>
                        <div style={{ width:'100%', height:'100px', backgroundColor:'rgba(196, 196, 196, 0.3)', borderRadius:'5px', padding:'20px'}}>
                            <p style={{ fontFamily: 'Montserrat', fontweight:'600'}}>Review</p>
                            <p>Review</p>
                        </div>                
                        <div style={{ width:'100%', height:'100px', backgroundColor:'rgba(196, 196, 196, 0.3)', borderRadius:'5px'}}>
                        </div>                
                    </div>
                </div>
            
        </section>
    )
}

export default BusinessInfoPage;
