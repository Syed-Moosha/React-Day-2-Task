import React from 'react';
import './CompA.css'
const Comp = ({arrObj}) => {
    return (
        <>
        <div className='back'>
        <div className="row mt-2 g-4 w-100 w-sm-75 border-0 ">
{arrObj.map((ele,index)=>{
return(
<div key={index} className="col-sm-4   col-12 ">
<div className="card">
        <div className="card-title text-center text-secondary"> <p></p> {ele.head}
        </div>
        <div className="subtitle text-center"><h1>{ele.pri}</h1></div>
        <hr />
            <div className="card-body">
               <p className={ele.c1}> &nbsp;{ele.b1}</p> <br />
               <p className={ele.c2}>&nbsp;{ele.b2}</p>  <br />  
               <p className={ele.c3}>&nbsp;{ele.b3}</p> <br />  
               <p className={ele.c4}>&nbsp;{ele.b4}</p> <br />  
               <p className={ele.c5}>&nbsp;{ele.b5}</p>  <br />  
               <p className={ele.c6}>&nbsp;{ele.b6}</p>  <br />  
               <p className={ele.c7}>&nbsp;{ele.b7}</p>  <br /> 
               <p className={ele.c8}>&nbsp;{ele.b8}</p>  <br /> 
            </div>
                <button className='btn-primary btn m-3 '>BUTTON</button>
            </div>
            </div>
)

})}
        
        </div>
        </div>
        </>
    );
};

export default Comp