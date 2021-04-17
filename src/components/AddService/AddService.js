import React,{useState} from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';


const AddService = () => {
    return (
        <section className="container-fluid row">
        <Sidebar></Sidebar>
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">Add a Review</h5>
            <form onSubmit={handleSubmit}>
               
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Subject</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="subject" placeholder="subject" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Elements</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="ele" placeholder="ele" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Cost</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="Cost" placeholder="Cost" />
                </div>
               
                <button type="submit" className="btn btn-warning">Submit</button>
            </form>
        </div>
    </section>
    );
};

export default AddService;