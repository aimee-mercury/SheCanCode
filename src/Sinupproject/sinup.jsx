import axios from 'axios';
import './sinup.css';
import Footer from '../Footer/Footer';
import Navigation from '../components/Navigation';
import { useState } from 'react';
import {useNavigate, Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SinUp() {
  const [fullName, setFullName]= useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = (e) =>{
    setIsLoading(!isLoading);
    e.preventDefault();
    const data = {
      fullName: fullName,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    }
    console.log(data);
    axios({
      method: 'POST',
      url: 'http://localhost:5000/api/v1/auth/signup',
      data: data,
      // headers:{
      //   Authorization: `Bearer ${token}`,
      //   "Content-Type": 'application/json',
      // }
    }).then((response)=>{
      console.log(response);
      toast.success("User Registered Successfully");
      localStorage.setItem('user', JSON.stringify(response));
      localStorage.setItem('token', JSON.stringify(response.token));
      toast.success("User login Successfully");
      setTimeout(()=>{
        navigate('/login');
      }, 3000);
      setIsLoading(false);
    }).catch(error => {
      console.log(error.response);
      toast.error('encountered error');
      // toast.error(error.response?.data?.message || "something went wrong");
      // setIsLoading(false);
    });
  };
  return (
    <>
    <ToastContainer />
    <div className='signup-container'>
     <Navigation/>
       <div className='wrapper'>
        <form action='' method='POST' onSubmit={handleSignUp}>
               <h1 className='signup-heading'>SignUp</h1><br/><br />
            <div className="sinup3">
            <label  className='co'>Full Name</label><br/>
            <input type="text"  required  className='sinupthird' name="fullName" onChange={(e)=>setFullName(e.target.value)}/><br/>
            </div><br />
            <div className="sinup3">
            <label >Email</label><br/>
            <input type="email"  required className='sinupthird' name="email" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="sinup5">
            <label >password</label><br/>
            <input type="password"  required className='sinupsix' name="Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
            </div><br/>
            <div className="sinup9">
            <label  className='co'>confirm password</label><br/>
            <input type="password"  required className='sinupsix' name="confirmPassword" onChange={(e)=>setConfirmPassword(e.target.value)}/><br/>
            </div><br/><br/>
            <div className="remember">
            <input type="checkbox" className='larger-checkbox'/> I accept Terms of use and  privacy policy
            <br/><br/>
              <button type="submit" onClick={handleSignUp} className='btnsinup'>SignUp</button><br /><br />
            <div className="register-link">
                <p className='sinup6'>Already have an account?<a href="login" className='up'>Login In Here</a></p>
                </div>
                </div>
            </form>
        </div>
        </div>
    <Footer/>
    </>
  )
}
export default SinUp










