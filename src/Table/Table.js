import Expense from '../Expense/Expense';
import  './Table.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


import axios from 'axios';



const Table=()=>{
  const ondelete=(index) =>{
    axios.delete(`http://localhost:3000/expense/${getList[index].id}`).then(()=>{
      getListAPI();
    })
   }

  const [getList, setList] = useState([]);
  const navigate = useNavigate();
  const onClickHandler = () =>{
    navigate('/expense');
 }
 const onClickHandler2 = () =>{
  navigate('/about');
}
 const onClickHandler3 = () =>{
  navigate('/login');
}
const getListAPI = () => {
  axios.get(`http://localhost:3000/expense`).then((result) => {
    setList(result.data);
  }).catch(() => {

  })
}



useEffect(() => {
  getListAPI();
}, [])


return(  <div className='container' >
     
    <div className="row">
    <nav className="one5 navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="#"><i className="fa fa-handshake-o" aria-hidden="true"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className=" c" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li> */}
            <li className="nav-item active">
              <a className="nav-link" onClick={onClickHandler2}>About</a>
            </li>
            
            
            <li className="nav-item active">
              <a className="nav-link disabled" onClick={onClickHandler}>Task</a>
            </li>
            {/* <li className="nav-item active">
              <a className="nav-link disabled"  >Table</a>
            </li> */}
            {/* <li className=" nav-item active">
              <a className="nav-link disabled" href="http://localhost:3000/">signup</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link disabled" href="http://localhost:3000/login">login</a>
            </li> */}
            <li className="nav-item active">
              <a className=" nav-link disabled"  onClick={onClickHandler3} >Logout    <i class="fa fa-sign-out"></i></a>
            </li>
          </ul>
          </div>
          </nav>
       <table className=" table border mt-5">
           <thead  >
             <tr >
               <th scope="col" className="border col-1">SI NO</th>
               <th scope="col"className="border col-2">TITLE</th>
               <th scope="col"className=" border col-2">Description</th>
               <th scope="col"className="border col-2">Handle</th>
             
             </tr>
           </thead>
           <tbody  >
           {
                        getList.map((obj,index)=>{
                            return ( <tr   key={index}>
                              <th className="border"  scope="row">{index+1}</th>
                              <td className="border"  >{obj.expenseTitle}</td>
                              <td className="border" >{obj.expenseNotes}</td>
                              <td><i class="fa fa-trash" onClick={() => ondelete(index)} aria-hidden="true"></i></td>
                              
                              
                            </tr>)
                        })
                      }
</tbody>
         </table>

   
 </div>
</div>
      );


}
export default Table;