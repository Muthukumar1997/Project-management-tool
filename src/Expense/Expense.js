
import  './Expense.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
// import { useEffect, useState } from 'react';
 import axios from 'axios';

const Expense=()=> {
  
const [getForm,setForm]=useState({
  expenseTitle:'',
  expenseNotes:'',
  expenseCategory:'',
  expenseAmount:'',
  paidBy:'',
  expenseDate:''


});


const emptyValidation = (value) => {
  if (value) {
    return true;
  }
  else {
    return false;
  }
}


  const navigate = useNavigate();
  const onClickHandler2 = () =>{
    navigate('/table');
 }
 const onClickHandler1 = () =>{
  navigate('/about');
}
const onClickHandler3 = () =>{
  navigate('/login');
}
const onChangeHandler =(event)=>{
setForm({...getForm,[event.target.name]:event.target.value})
}
const onSubmitHandler=(event)=>{
  event.preventDefault();
  if(!emptyValidation(getForm.expenseTitle)){
    alert("expenseTitle name cannot be empty");
    return ;
 }
 if(!emptyValidation(getForm.expenseNotes)){
    alert("expenseNotes cannot be empty");
    return ;
  }

  axios.post('http://localhost:3000/expense',getForm).then((result)=>{
  navigate('/table');
   }).catch((error)=>{
     console.log(error); 
})
}
return( 

    <div className='container' >
      
              
    <nav className="one4 navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="#"><i className="fa fa-handshake-o" aria-hidden="true"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className=" collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li> */}
            <li className="nav-item active">
              <a className="nav-link" onClick={onClickHandler1} >About</a>
            </li>
            
            
            {/* <li className="nav-item active">
              <a className="nav-link disabled" >Expense</a>
            </li> */}
            <li className="nav-item active">
              <a className="nav-link disabled" onClick={onClickHandler2}  >Table</a>
            </li>
            {/* <li className=" nav-item active">
              <a className="nav-link disabled" href="http://localhost:3000/">signup</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link disabled" href="http://localhost:3000/login">login</a>
            </li> */}
            <li className="nav-item active">
              <a className=" nav-link disabled"   onClick={onClickHandler3}>Logout    <i class="fa fa-sign-out"></i></a>
            </li>
          </ul>
          </div>
          </nav>
          
          <div className='row '>
            <div className='col-12'>
              <div className='rowexpense'>
              
        <form className="card  d-flex align-items-center  expensecard">
        <div className="mt-4 text-center title">TASK PAGE</div>
        <div className="" >
        <div className=" form-group mt-5 row">
         <label className="col-sm-4 expenselabel col-form-label">Task Title</label>
          <div className="col-sm-8">
            <input type="text" className="form-control expenseinput " name="expenseTitle" onChange={onChangeHandler}  placeholder=""/>
          </div>
         
        </div>
        <div className="form-group mt-4 row">
          <label className="col-sm-4 expenselabel  expensedescriptionlabel col-form-label">Task Description</label>
          <div className="col-sm-8">
            <input type="text" name="expenseNotes"   className="form-control expenseinput"  onChange={onChangeHandler}  placeholder=""/>
          </div>
        </div>
        
            
            <button type="submit"  onClick={onSubmitHandler} className="mt-5 expensebtn btn btn-primary">Add Task</button>
          </div>
              

      </form>
      </div>
      </div>
          
      </div>
    
      </div>
    
      
  
    
      
      
   
   
 
       
     
                )


}
export default Expense;







// import  './Expense.css';


// const Expense=()=>{
 
//     const clearData=()=>{
//       localStorage.removeItem('email');
//       localStorage.removeItem('password');
//     }
  


//     return( 

//     <div >
              
//     <nav className="one4 navbar navbar-expand-lg navbar-light bg-light">
//         <a className="navbar-brand" href="#"><i className="fa fa-handshake-o" aria-hidden="true"/></a>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
      
//         <div className=" collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item active">
//               <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//             </li>
//             <li className="nav-item active">
//               <a className="nav-link" href="http://localhost:3000/about">about</a>
//             </li>
            
            
//             <li className="nav-item active">
//               <a className="nav-link disabled" href="http://localhost:3000/expense">Expense</a>
//             </li>
//             <li className="nav-item active">
//               <a className="nav-link disabled" href="http://localhost:3000/table">table</a>
//             </li>
//             <li className=" nav-item active">
//               <a className="nav-link disabled" href="http://localhost:3000/">signup</a>
//             </li>
//             <li className="nav-item active">
//               <a className="nav-link disabled" href="http://localhost:3000/login">login</a>
//             </li>
//             <li className="nav-item active">
//               <a className=" nav-link disabled" onClick={clearData} href="http://localhost:3000/">Logout    <i class="fa fa-sign-out"></i></a>
//             </li>
//           </ul>
//           </div>
//           </nav>
          
   
      

//       <form className="two4 form-control ">
//         <div className="three4 title">EXPENSE PAGE</div>
//         <div className="twentytwo4" >
//         <div className="six4 form-group row">
         
          
//           <label className="col-sm-2 col-form-label">Expense Title:</label>
//           <div className="col-sm-3">
//             <input type="text" className="form-control d1" id="inputEmail3" placeholder=""/>
//           </div>
         
//         </div>
//         <div className="seven4 form-group row">
//           <label for=" inputPassword3" className="eigth4 col-sm-2 col-form-label">Expense Notes:</label>
//           <div className="nine4 col-sm-3">
//             <input type="password"  className="  form-control d1" id="inputPassword3" placeholder=""/>
//           </div>
//         </div>
//         <div className="ten4" >
//           <label for="">Expense Category:</label>
        
        

//           <select className="eleven4 custom-select dro  col-sm-3 d1">
//             <option selected>-Select-</option>
//             <option value="1">One</option>
//             <option value="2">Two</option>
//             <option value="3">Three</option>
//           </select>
//           </div>
//           <div className="form-group row">
//             <label for="inputPassword3" className="twelve4  col-sm-2 dc col-form-label">Expense Amount:</label>
//             <div className="thirteen4 col-sm-3">
//               <input type="password" className="fourteen4 form-control ds d1" id="inputPassword3" placeholder=""/>
//             </div>
//           </div>
//           <div className="fifteen4">
            
//             <label className="sixteen4">Paid By :</label>

          
          

//             <select className="seventeen4 custom-select dro1 col-sm-3 d1">
//               <option selected>-Select-</option>
//               <option value="1">One</option>
//               <option value="2">Two</option>
//               <option value="3">Three</option>
//             </select>
//             </div>
//             <div className="eighteen4 form-group row">
//           <label for=" inputPassword3" className="nineteen4 col-sm-2 col-form-label">Expense Date:</label>
//           <div className="twentyone4 col-sm-3">
//             <input type="date"  className=" twenty4  form-control d1" id="inputPassword3" placeholder=""/>
//           </div>
//         </div>

            
//             <button type="submit" className="four4 btn btn-primary">Add Expense</button>
            
        
     
        

      
//        </div>
//       </form>
//       </div>
      
  
    
      
      
   
   
 
       
     
//                 )


// }
// export default Expense;

