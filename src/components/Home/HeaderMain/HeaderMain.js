import React from 'react';
import work from '../../../images/9.png'
const HeaderMain = () => {
    return (
        <main style={{height:'500px'}}className="row d-flex align-items-center">
          <div className="col-md-4 offset-md-1">
 <h1 style={{color:'#3A4256'}}>The <span className="text-warning">Plumber</span><br/>You Deserve</h1>
 <p className="text-secondary">HAVE A PLUMBING ISSUE? CALL 24 HOUR EMERGENCY SERVICE, have questions? We’re happy to help, call or text  +88-01759380694</p>
         <button className="btn btn-warning">REQUEST JOB ESTIMATE</button> 
    
          </div>
          <div className="col-md-6">
           <img src={work} alt="" className="img-fluid"/>
          </div>
        </main>
    );
};

export default HeaderMain;