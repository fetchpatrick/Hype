import React from 'react'

// Image Imports
import heroImg from './assetts/hype-hero.png'
import feactureSectionImg_1 from './assetts/hype-feature-section_1.png'
import feactureSectionImg_2 from './assetts/hype-feature-section-2.png'
import feactureSectionImg_3 from './assetts/hype-feature-section-3.png'

// Styleing Import
import './styles/LandingPage.css'

function LandingPage() {
    return (

            <>
                <section 
                    style={{
                        height:'100vh', 
                        backgroundImage: `url(${heroImg})`,
                        backgroundSize: "cover",
                        backgroundRepeat: 'no-repeat',
                        width:'100%'
                        }}>
                        <div style={{background:'rgba(0,0,0,0.45)', height:'100vh', display:'grid', placeItems:'center'}}>
                        <div style={{ height: '60vh', width:'80%', backgroundColor:'transparent'}}>
                            <div style={{ height: '100%', width:'50%'}}>
                            <h1 style={{ marginBottom:'2px', 
                            // border:'1px solid red',
                            fontFamily: 'Montserrat', color:'white',fontSize:'60px', lineHeight:'71.52px', paddingBottom:'11px'}}>Find your new favorite places</h1>
                            <p 
                            style={{
                                // border:'1px solid red',
                                fontSize:'20px', fontFamily: 'Montserrat', color:'white', margin:'0 0 30px 0',}}>Discover exciting, new local businesses you will love.</p>
                            <button className='hero-button'>Start your search!</button>
                            </div>
                            <div>
                                <img src="" alt=""/>
                            </div>
                        </div>
                        </div>

                    </section>

                    {/* Features Section 1 */}

                    <section style={{height:'67vh', background:'white', display:'grid', placeItems:'center'}}>
                    <div style={{ 
                        // border:'1px solid red', 
                    height: '80%', width:'80%', backgroundColor:'transparent', display:'flex', flexDirection:'row'}}>

                        {/* left feature div */}

                        <div 
                        style={{
                            backgroundImage: `url(${feactureSectionImg_1})`,
                            backgroundSize: "cover",
                            backgroundRepeat: 'no-repeat',
                            height:'100%',
                            width:'50%',
                            boxShadow: '0px 4px 11px 0px #00000040'

                        }}
                        ></div>
                        
                        {/* right feature div */}

                        <div style={{
                            height:'100%',
                            width:'50%',
                            paddingLeft:'59px'
                        }}>
                        <h2 style={{
                            // border:'1px solid red', 
                            marginBottom:'24px',
                        fontFamily: 'Montserrat',fontSize:'40px', fontWeight:'600'}}>Discover your new favorite local businesses </h2>
                        <p style={{
                            // border:'1px solid red',
                            fontFamily: 'Montserrat',fontSize:'20px'}}>With a simple search we make it easy to find where the good stuff is! Our reviewers will get you in the right place.</p>
                        </div>
                    </div>
                    </section>

                    {/* Feature section 2 */}

                    <section style={{height:'67vh', background:'#FF9436', display:'grid', placeItems:'center'}}>
                    <div style={{ 
                        // border:'1px solid red', 
                    height: '80%', width:'80%', display:'flex', flexDirection:'row'}}>

                        
                        <div style={{
                            height:'100%',
                            width:'50%',
                            paddingRight:'59px'
                        }}>
                        <h2 style={{
                            // border:'1px solid red', 
                            marginBottom:'24px',
                        fontFamily: 'Montserrat',fontSize:'40px', fontWeight:'600', color:'white'}}>Share your opinion with the <span style={{color:'#FF6200'}}>HYPE</span> community!</h2>
                        <p style={{
                            // border:'1px solid red',
                            fontFamily: 'Montserrat',fontSize:'20px', color:'white'}}>Sign Up for a free account to rate businesses you think other people should know about!</p>
                        <p style={{flex:'end'}}>Sign Up for a free account to start rating!</p>
                        </div>
                        {/* left feature div */}

                        <div 
                        style={{
                            backgroundImage: `url(${feactureSectionImg_2})`,
                            backgroundSize: "cover",
                            backgroundRepeat: 'no-repeat',
                            height:'100%',
                            width:'50%',
                            boxShadow: '0px 4px 11px 0px #00000040'

                        }}
                        ></div>
                        
                        {/* right feature div */}

                    
                    </div>
                    </section> 

                    {/* feature section 3  */}

                    <section style={{ height:'67vh', background:'white', display:'grid', placeItems:'center' }}>
                    <div style={{ height: '80%', width:'80%', backgroundColor:'transparent', display:'flex', flexDirection:'row' }}>

                        {/* left feature div */}

                        <div 
                        style={{
                            backgroundImage: `url(${feactureSectionImg_3})`,
                            backgroundSize: "cover",
                            backgroundRepeat: 'no-repeat',
                            height:'100%',
                            width:'50%',
                            boxShadow: '0px 4px 11px 0px #00000040'

                        }}
                        ></div>
                        
                        {/* right feature div */}

                        <div style={{
                            height:'100%',
                            width:'50%',
                            paddingLeft:'59px'
                        }}>
                        <h2 style={{ 
                            marginBottom:'24px',
                        fontFamily: 'Montserrat',fontSize:'40px', fontWeight:'600'}}>Search for local businesses by Zip Code</h2>
                        <p style={{
                            fontFamily: 'Montserrat',
                            fontSize:'20px'
                        }}>
                            All we need is your Zip Code to help you find nearby businesses worth trying!
                        </p>
                        </div>
                    </div>
                </section>

            </>

    )
}


 

export default LandingPage;
