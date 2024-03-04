import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [getForm, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/");
  };
  const emptyValidation = (value) => {
    if (value) {
      return true;
    } else {
      return false;
    }
  };
  const onChangeHandler = (event) => {
    setForm({ ...getForm, [event.target.name]: event.target.value });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!emptyValidation(getForm.email)) {
      alert("email  cannot be empty");
      return;
    }
    if (!emptyValidation(getForm.password)) {
      alert("password cannot be empty");
      return;
    }
    axios
      .get(
        `http://localhost:3000/registration?email=${getForm.email}&password=${getForm.password}`
      )
      .then((result) => {
        console.log(result.data);
        if (result.data && result.data.length > 0) {
          sessionStorage.setItem("email", getForm.email);
          navigate("/table");
        } else {
          alert("email and password match is not found");
        }
      })
      .catch(() => {});
  };
  return (
    <div className="container">
      <div className="row loginrow">
        <div className="col-3">
          {" "}
          <nav className="one2 navbar navbar-expand-lg navbar-light ">
            <a className="navbar-brand" href="#">
              <i className="fa fa-handshake-o" aria-hidden="true" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className=" collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                
                <li className=" nav-item active">
                  <a className="nav-link disabled" onClick={onClickHandler}>
                    signup
                  </a>
                </li>
               
              </ul>
            </div>
          </nav>
        </div>

        <div className="col-6 loginwrap d-flex align-items-center">
          <form className="card logincard">
            <p className=" logintext text-center">LOGIN PAGE</p>
            <div className="row  mt-3 ">
              <label
                for="inputEmail3"
                className="col-sm-4 loginlabel col-form-label"
              >
                Email
              </label>
              <div className="col-sm-8">
                <input
                  type="email"
                  className="form-control logininput"
                  id="inputEmail3"
                  onChange={onChangeHandler}
                  name="email"
                  placeholder="email"
                />
              </div>
            </div>
            <div className="row  mt-4 ">
              <label
                for="inputPassword3"
                className="col-sm-4 loginlabel col-form-label"
              >
                Password
              </label>
              <div className="col-sm-8">
                <input
                  type="password"
                  className="form-control logininput"
                  id="inputPassword3"
                  onChange={onChangeHandler}
                  name="password"
                  placeholder="password"
                />

                <button
                  type="submit"
                  className=" btn mt-5 loginbtn btn-primary"
                  onClick={onSubmitHandler}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="col-3"> </div>
      </div>
    </div>
  );
};
export default Login;

