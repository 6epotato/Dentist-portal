import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import useToken from '../../Hooks/useToken';
import Loading from '../Shared/Loading';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    // use login 
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    // reset password

    const [sendPasswordResetEmail, sending, ResetError] = useSendPasswordResetEmail(
        auth
    );

    const [token] = useToken(user || gUser)

    let navigate = useNavigate();
    let location = useLocation();
    const emailRef = useRef(' ')

    let from = location.state?.from?.pathname || "/";

    let signInError;

    if (token) {
        navigate(from, { replace: true });
    }

    if (loading || gLoading) {
        return <Loading></Loading>
    }
    if (error || gError || ResetError) {
        signInError = <p className='text-red-500'>{error?.message || gError?.message || ResetError?.message}</p>
    }

    // from on submit button fuction
    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password);
    };

    // Password reset button function

    const handleResetPasssword = () => {
        const email = emailRef.current.value;
        console.log(email)
        // await sendPasswordResetEmail(data.email);

        // alert('Sent email');
    }


    return (
        <div className='grid h-screen justify-items-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Login</h2>
                    {/* adding form */}
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input ref={emailRef}  {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is Required"
                                },
                                pattern: {
                                    value: /[^@]+@[^@]/,
                                    message: 'Provide a valid email'
                                }
                            })}
                                type="email" placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>
                        {/* field for password */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input  {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is Required"
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Provide a valid password'
                                }
                            })}
                                type="password" placeholder="Enter Your Password" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>
                        {signInError}
                        <input className='btn  w-full max-w-xs' type="submit" value={'LogIN'} />
                    </form>
                    {/* nevigate to register page */}
                    <p><small>New to Doctors Portal? <Link to="/register" className='text-primary'>Create New Account</Link></small></p>
                    {/* addig reset password */}
                    <p><small>Forgot the password?<button onClick={handleResetPasssword} class="btn btn-sm btn-link">Reset Password</button></small></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;