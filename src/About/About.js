import  './About.css';

import { useNavigate } from 'react-router-dom';

const About=()=>{
  const navigate = useNavigate();
  const onClickHandler2 = () =>{
    navigate('/expense');
 }
 const onClickHandler1 = () =>{
  navigate('/table');
}
const onClickHandler3 = () =>{
  navigate('/login');
}
 
 

    return( 
       
      <div className='container' >
    <nav class="one3 navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="#"><i class="fa fa-handshake-o" aria-hidden="true"/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class=" collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
              <a class="nav-link disabled" onClick={onClickHandler2} >Task</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link disabled" onClick={onClickHandler1}>Table</a>
            </li>
            <li className="nav-item active">
              <a className=" nav-link disabled"  onClick={onClickHandler3}>Logout    <i class="fa fa-sign-out"></i></a>
            </li>
          </ul>
          </div>
          </nav>
          
                <div class="row aboutcardrow">
    <div class="card aboutcard mb-3">
      <img class="three3 card-img-top  top" src="https://www.sweetprocess.com/wp-content/uploads/2022/08/Project-Management-Tool.png"   alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">PRM</h5>
        <p class="card-text">A project management tool that can also be used as business plan software. It has tools to help gather and compare data. Wrike also has collaboration tools, business plan templates, drag-and-drop interface, and goal management features.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    
  </div>
            
         </div>
                )


}
export default About;