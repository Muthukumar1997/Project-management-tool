import  './Signup.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Signup=()=>{
   
      const [getForm,setForm]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:''

    });
    const navigate = useNavigate();
 
const onClickHandler = () =>{
  navigate('/login');
}

    const emptyValidation=(value)=>{
        if(value){
            return true;
        }
        else{
            return false;
        }
    }

    const onChangeHandler=(event)=>{
        setForm({...getForm,[event.target.name]:event.target.value})
    }
    const onSubmitHandler=(event)=>{
         event.preventDefault();
         if(!emptyValidation(getForm.firstName)){
            alert("first name cannot be empty");
            return ;
         }
         if(!emptyValidation(getForm.lastName)){
          alert("last name  cannot be empty");
          return ;
       }
         if(!emptyValidation(getForm.email)){
            alert("email  cannot be empty");
            return ;
         }
         if(!emptyValidation(getForm.password)){
            alert("password cannot be empty");
            return ;
         }
        //  localStorage.setItem("email",getForm.email);
        //  localStorage.setItem("password",getForm.password);
        //  navigate('/signup');
         axios.post('http://localhost:3000/registration',getForm).then((result)=>{
          console.log(result);
          navigate('/login');
   }).catch((error)=>{
          console.log(error); 
   })
  
    }

    return( 
      <div className='container' >
      
     <div className="row signuprow">
      <div className='col-3'> <nav className="one2 navbar navbar-expand-lg navbar-light ">
          <a className="navbar-brand" href="#"><i className="fa fa-handshake-o" aria-hidden="true"/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className=" collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
             
              <li className=" nav-item active">
                <a className="nav-link disabled" onClick={onClickHandler}>Login</a>
              </li>
           
            </ul>
            </div>
            </nav>
            
          
          </div>
          
          <div className="col-6 signupwrap d-flex align-items-center">
          
            <form className='card signupcard'> 
              <p  className=" signuptext text-center">SIGNUP PAGE</p>
              <div className="row  mt-3 ">
    <label for="inputEmail3" className="col-sm-4 signuplabel col-form-label" >First Name</label>
    <div className="col-sm-8">
      <input type="text" className="form-control signupinput" id="inputEmail3" onChange={onChangeHandler} name='firstName'  placeholder="firstname"/>
    </div>
  </div>
  <div className="row  mt-3 ">
    <label for="inputEmail3" className="col-sm-4 signuplabel col-form-label" >Last Name</label>
    <div className="col-sm-8">
      <input type="text" className="form-control signupinput" id="inputEmail3" onChange={onChangeHandler} name='lastName'  placeholder="lastname"/>
    </div>
  </div>
  <div className="row  mt-3 ">
    <label for="inputEmail3" className="col-sm-4 signuplabel col-form-label" >Email</label>
    <div className="col-sm-8">
      <input type="email" className="form-control signupinput" id="inputEmail3" onChange={onChangeHandler} name='email'  placeholder="email"/>
    </div>
  </div>
  <div className="row  mt-3 ">
    <label for="inputPassword3" className="col-sm-4 signuplabel col-form-label">Password</label>
    <div className="col-sm-8">
      <input type="password" className="form-control signupinput" id="inputPassword3"  onChange={onChangeHandler} name='password' placeholder="password"/>
     
      <button  type="submit" className=' btn mt-5 signupbtn btn-primary' onClick={onSubmitHandler}>signup</button>
      
    </div>
  </div>
            </form>

            </div>
            
            <div className='col-3'>  </div>
  
          </div>
          </div>
       )


}
export default Signup;
















