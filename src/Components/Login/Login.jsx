import { useContext } from 'react';
import login from '../../assets/images/login/login.svg'
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
const Login = () => {
const {singinemail,Googlesingin}=useContext(AuthContext)

// google
const handlegoogle =()=>{
  Googlesingin()
  .then(result=>{
    console.log(result);
      Swal.fire({
          title: 'Your Log In success Full',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
  })
  .catch (error =>{
      console.error (error)
  })
  
}
// google


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
    <img src={login} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
        <h1 className="text-5xl font-bold">Singin now!</h1>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="LogIn" />
        </div>
      <div className='text-center'>
      <h1>Or</h1>
     
      </div>
      </form>
      <button onClick={handlegoogle} className='btn btn-accent'>Google</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;