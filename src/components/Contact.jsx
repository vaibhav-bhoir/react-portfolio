import React, {useState} from 'react'

function Contact() {

    const [data, setdata] = useState({
        name:"",
        email:"",
        number:""
    }) ;

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setdata((preval) => {
            return {
                ...preval,
                [name] : value
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`Name : ${data.name}, Email : ${data.email}, Number : ${data.number}`)
    }

    return (
        <>
            <div className="my-4">
                <h1 className='text-center text-primary'>Contact Us</h1>
            </div>
            <div className="container contact mb-5">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="form-group">
                              <label for="name">Name</label>
                              <input type="text" className="form-control" id="name" name="name" value={data.name} onChange={InputEvent}  placeholder="Enter Your Name" required/>
                            </div>
                            <div className="form-group">
                              <label for="email">Email address</label>
                              <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={data.email} onChange={InputEvent}  placeholder="Enter email" required/>
                            </div>
                            <div className="form-group">
                              <label for="number">Mobile Number</label>
                              <input type="number" className="form-control" id="number" name="number" value={data.number} onChange={InputEvent}  placeholder="Enter Mobile Number" required/>
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
