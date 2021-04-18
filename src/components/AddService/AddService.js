import React,{useState} from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

   
const AddService = () => {

    const [info,setInfo] =useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e =>{
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
      const formData = new FormData()
      console.log(info);
      formData.append('file', file); 
      formData.append('subject', info.subject);
      formData.append('ele', info.ele);
      formData.append('cost', info.cost);

      fetch('http://localhost:5055/addService', {
          method: 'POST',
          body: formData
      })
          .then(response => response.json())
          .then(data => {
              console.log(data)
          })
          .catch(error => {
              console.error(error)
          })
  }

    return (
        <section className="container-fluid row">
        <Sidebar></Sidebar>
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">Add a Service</h5>
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
                    <input onBlur={handleBlur} type="number" className="form-control" name="cost" placeholder="cost" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Upload a icon</label>
                  <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
              </div>
                <button type="submit" className="btn btn-warning">Submit</button>
            </form>
        </div>
    </section>
    );
};

export default AddService;