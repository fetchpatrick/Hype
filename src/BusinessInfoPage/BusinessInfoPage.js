import React from 'react'

import './styles/BusinessInfopage.css';

import Reviews from './Reviews/Reviews'

import businessImg from '../LandingPage/assetts/hype-hero.png'

function businessInfoPage() {
    return (
        <section style={{minHeight:'100vh', paddingTop: '15vh'}}>
            
                <div style={{ minHeight: '40vh', width:'100vw'}}>
                    <div style={{height:'381px', backgroundSize: "cover", backgroundRepeat: 'no-repeat',width:'80%', margin:'0 auto 0 auto', backgroundImage: `url(${businessImg})`, borderRadius:'5px'}}></div>
                </div>

                <div style={{ minHeight: '5vh', width:'98vw'}}>
                    <div style={{height:'100%', width:'80%', margin:'0 auto 0 auto', marginTop: '3vh'}}>
                        <button className='button'> Write a Review!</button>
                    </div>
                </div>
                <div style={{ minHeight: '50vh', width:'100vw'}}>
                    <div style={{height:'100%', width:'80%', margin:'0 auto 0 auto'}}>
                        <div style={{ width:'100%', height:'100px', backgroundColor:'rgba(196, 196, 196, 0.3)', borderRadius:'5px'}}>
                            <p style={{ fontFamily: 'Montserrat', fontweight:'600'}}>Review</p>
                            <p>Review</p>
                        </div>                
                        <div style={{ width:'100%', height:'100px', backgroundColor:'rgba(196, 196, 196, 0.3)', borderRadius:'5px'}}>
                            <Reviews/>
                        </div>                
                    </div>
                </div>
            
        </section>
    )
}

export default businessInfoPage;
