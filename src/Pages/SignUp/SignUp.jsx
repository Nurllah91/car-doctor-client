import { Link, } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const SignUp = () => {

    const {createUser} = useContext(AuthContext)

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            Swal.fire(
                'Congratulation',
                'Your account created successfully',
                'success'
              )
              
        })
        .catch(err =>{
            console.log(err);
            Swal.fire(
                'Opps!',
                err.message,
                'error'
              )
        })

    }

    return (
        <div className="hero min-h-screen my-10 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div>

                    <img src={img} alt="" />
                </div>
                <div className="card w-full lg:w-1/2  shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Sign up</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='my-5 text-center'>Already have an account? <Link className='text-orange-500 font-bold' to='/login'>Login</Link></p>
                    </div>

                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SignUp;