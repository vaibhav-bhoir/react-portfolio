import React from 'react'


function Card(props) {
    return (
        <>
            <div className="col-md-4 col-sm-6 col-12 mx-auto">
                <div className="card mt-4">
                    <img className="card-img-top" src={props.imgSrc} alt="img"/>
                    <div className="card-body">
                      <h5 className="card-title">{props.title}</h5>
                      <p className="card-text">{props.detail}</p>
                      <a href={props.live} target='_blank'  rel="noreferrer" className="btn btn-sm btn-danger m-1">Live Demo</a>
                      <a href={props.github} target='_blank'  rel="noreferrer" className="btn btn-sm btn-warning text-white m-1">Github</a>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
