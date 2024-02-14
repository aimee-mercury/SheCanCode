import React,{useState} from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navigation from "../components/Navigation";
import axios from "axios";
import "../Sinupproject/sinup.css"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
  const [isLoading, setIsLoading ] = useState(false);
  const [email, setEmail ] = useState("");
  const [password, setPassword ] = useState("");
  const navigate = useNavigate("")
  console.log(password)
  const handleLogin = (e)=>{
    console.log("user has submitted");
      e.preventDefault();
      setIsLoading(true);
      axios({
        method: 'post',
        url:'http://localhost:5000/api/v1/auth/signin',
        data:{
          email: email,
          password: password
        }
      }).then((response)=>{
        toast.success("succesfully logged in");
        console.log(response);
        setIsLoading(false);

        // to store person info in local storage
        localStorage.setItem('user', JSON.stringify({
          fullName: response.data.fullName,
          email: response.data.email,
          id: response.data._id,
          role: response.data.role
        }));
        setTimeout(()=>{
          if (response.data.role == 'admin'){
            navigate('/dashboard')
          } else {
            navigate('/collection')
          }
        }, 3000);
        setIsLoading(false);

      }).catch((error)=>{
        console.log(error.response);
        toast.error(error.response?.data?.message || "something went wrong");
        
      })
  }
  return (
    <>
      <ToastContainer/>
      <div className="mami">
        <Navigation />
        <form className="ap1" method="POST" onSubmit={handleLogin}>
          <h1 className="welcome">WELCOME TO WISDOM LIBRARY</h1><br/>
          <p className="please">Please enter your details</p>
          <div>
            <label> Email</label>
            <br />
            <input type="email" required className="pas" name="email" onChange={(e)=>setEmail(e.target.value)}/>
            <br />
           
            <label className="login-password">Password</label> <br />
            <br />
           
            <input type="password" required  name="password" className="pas" onChange={(e)=>setPassword(e.target.value)} />     
          </div>
 <br />
  <button type="submit" className="loginbut">Log in</button>
          <br />
          <p className="add">
            Do not  have an account?
            <Link to="/signup" className="login-span-2">
              Sign up
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
}
export default Login;





















