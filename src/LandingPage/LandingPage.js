import React from 'react'
import {Link} from '@reach/router'

// Styling Import
import './styles/LandingPage.css'

function LandingPage() {

    

    return (

            <>
                <section className='hero'>

                        <div className='hero__overlay'>
                            
                            <div className='hero__container'>
                                
                                <div className='hero__left'>
                                    <h1> Find your new favorite places </h1>
                                    <p> Discover exciting, new local businesses you will love. </p>
                                    <Link to='/search'>
                                        <button className='hero-button'>Start Your Search!</button>
                                    </Link>
                                </div>

                                <div className='hero__right'>
                                </div>

                            </div>

                        </div>

                    </section>

                    {/* Features Section 1 */}

                    <section className='feature__section'>
                        <div className='feature__container'>

                            {/* left feature div */}

                            <div className='feature__container--left1'
                            ></div>
                            
                            {/* right feature div */}

                            <div className='feature__container--right1'>
                            
                            <h2>Find your new favorite local businesses </h2>
                           
                            <p>With a simple search, we make it easy to find where the good stuff is! Our reviewers will get you in the right place.</p>
                            
                            </div>

                        </div>
                    </section>

                    {/* Feature section 2 */}

                    <section className='feature__section'>
                    <div className='feature__container'>

                        
                        <div className='feature__container--left2'>
                        <h2>Share your opinion with the <span style={{color:'#FF6200'}}>HYPE</span> community!</h2>
                        <p>Sign Up for a free account to rate businesses you think other people should know about!</p>
                            <div>
                                <p>Sign Up for a free account to start rating!</p>
                            </div>
                        </div>


                        <div className='feature__container--right2'></div>
                    

                    
                    </div>
                    </section> 

                    {/* feature section 3  */}

                    <section className='feature__section'>
                        <div className='feature__container'>

                            {/* left feature div */}

                            <div className='feature__container--left3'></div>
                            
                            {/* right feature div */}

                            <div className='feature__container--right3'>
                            <h2>Search for local businesses by Zip Code</h2>
                            <p>
                                All we need is your Zip Code to help you find nearby businesses worth trying!
                            </p>
                                <Link to='/search'>
                                    <button className=''>Start Your Search!</button>
                                </Link>
                            </div>
                        </div>

                </section>
                <footer className='footer'>
                </footer>

            </>

    )
}


 

export default LandingPage;
