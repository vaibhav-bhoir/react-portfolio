import React from 'react';
// import { NavLink } from 'react-router-dom';
import web from '../images/img1.jpg';


function Home() {
    return (
        <div>
            <section id='header' className='d-flex'>
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-10 mx-auto">
                            <div className="row ">
                                <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1 className='text-primary'>Vaibhav Bhoir</h1>
                                    <h2 className='my-3'>Frontend Web Developer, Programmer and Designer.</h2>
                                    <div class="icons my-2">
                                        <a href="https://www.linkedin.com/in/vaibhav-bhoir-b50a9a185">
                                          <i class="fab fa-linkedin fa-2x"></i>
                                        </a>
                                        <a href="https://github.com/vaibhav-bhoir">
                                          <i class="fab fa-github fa-2x"></i>
                                        </a>
                                        <a href="mailto:bhoirvaibhav90@gmail.com">
                                          <i class="fas fa-envelope fa-2x"></i>
                                        </a>
                                    </div>
                                    {/* <div className="mt-3">
                                        <NavLink to='/' className='btn btn-primary'>Get Started</NavLink>
                                    </div> */}
                                </div>

                                <div className="col-lg-6 pt-5 pt-lg-0 order-1 order-lg-2 header-img">
                                    <img src={web} className='img-fluid animated' alt="web" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
