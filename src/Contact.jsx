import React, { useState } from "react";

const Contact = () => {
    const [data, setData] = useState({
        name: " ",
        phone: " ",
        email:" ",
        message: " ",
    });

    const InputEvent = (event) =>{
        const{ name, value} = event.target;
        setData((preVal)=>{
            return {
                ...preVal,
                [name]:value,
            };
        });
    };
    const formSubmit =(e)=>{
        e.preventDefault();
        alert(`My name is ${data.fullname} My mobile no is ${data.phone} and my mail id is ${data.email} ,Here is what i want to say${data.message}`);

    };
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>

            </div>
            <div className="container contact-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit} action="">
                            
                                    <div className="form-group">
                                         <label for="exampleFormControlInput1">Name</label>
                                         <input type="text" class="form-control" id="exampleFormControlInput1" name="name" value={data.name} onChange={InputEvent}  placeholder="Enter your name"/>
                                    </div>
                                    <div className="form-group">
                                         <label for="exampleFormControlInput1">Phone</label>
                                         <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent}  placeholder="Enter your No."/>
                                    </div>
                                    <div className="form-group">
                                         <label for="exampleFormControlInput1">Email </label>
                                         <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent}  placeholder="name@example.com"/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label for="exampleFormControlTextarea1">Message</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"name="message" value={data.message} onChange={InputEvent}  ></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-outline-primary" type="submit">
                                            Submit formname

                                        </button>

                                    </div>
                            
                        </form>



                    </div>

                    </div>

                </div>
        </>
    );
};

export default Contact;