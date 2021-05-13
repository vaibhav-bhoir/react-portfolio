import React from 'react';
import Card from './Card';
import CardData from './CardData';


function Project() {
    return (
        <>
            <div className="my-5">
                <h1 className='text-center text-primary'>My Projects</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            {
                                CardData.map((val, index) => {
                                    return <Card key={index} 
                                            imgSrc={val.imgSrc} 
                                            title={val.title} 
                                            detail={val.detail}
                                            live={val.live}
                                            github={val.github} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project
