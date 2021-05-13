import React from 'react';
// import { NavLink } from 'react-router-dom';
import web from '../images/img1.jpg';


function About() {
    return (
        <>
            <section id='header' className='d-flex'>
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-10 mx-auto">
                            <div className="row ">
                                <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1 className='text-primary'>About Me</h1>
                                    <h2 className='my-3'>Let me tell you a few things....</h2>
                                    <p>I'm a web developer . I have build several websites , looking at the design I can convert it into a HTML CSS template with pixel perfect precision . I use bootstrap very often , so the turn around of my project is very quick and I always use GIT to track my progress and files, as well to collaborate with other developers also i have knowledge of nodejs, expressjs and database. <br /> I'm looking for the position where I can progress and challenge my skills.</p>
                                    
                                    <div className="mt-3 mb-5">
                                        <a className='btn btn-primary text-white'  rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/12oLbPyz9DUeocdihhhPYKaUlX-TMUtt0/view?usp=drivesdk">Download Resume</a>
                                    </div>
                                </div>

                                <div className="col-lg-6 pt-5 pt-lg-0 order-1 order-lg-2 header-img">
                                    <img src={web} className='img-fluid animated' alt="web" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
