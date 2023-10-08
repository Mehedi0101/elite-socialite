import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Store } from "react-notifications-component";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { loginEmailPassword, googleLogin } = useContext(AuthContext);
    const [credentialsError, setCredentialsError] = useState(false);
    const navigate = useNavigate();
    const { state } = useLocation();

    const handleLogin = e => {
        e.preventDefault();
        setShowPassword(false);
        setCredentialsError(false);

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        loginEmailPassword(email, password)
            .then(() => {

                navigate(state || '/');
                Store.addNotification({
                    title: "Logged in successfully",
                    type: "success",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 3000,
                        onScreen: true
                    }
                })
            })

            .catch(() => {
                setCredentialsError(true);
            })
    }

    const handleGoogle = e => {
        e.preventDefault();
        googleLogin()
            .then(() => {
                navigate(state || '/');
                Store.addNotification({
                    title: "Logged in successfully",
                    type: "success",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 5000,
                        onScreen: true
                    }
                })
            })
            .catch(() => { })
    }
    return (
        <div className="pt-20 pb-10 flex flex-col justify-center items-center font-primary">
            <form onSubmit={handleLogin} className="text-dark1 xl:p-14 lg:p-12 md:p-10 p-8 border border-dark3 rounded text-sm md:text-base max-w-[90%] mx-auto">
                <h2 className="font-bold text-3xl md:text-4xl mb-10 font-secondary">Login</h2>
                <input className="outline-none border-b-2 border-dark3 font-medium placeholder:text-dark2 placeholder:font-medium py-1 max-w-full w-[400px] mb-8" type="email" name="email" id="email" placeholder="Email" required />
                <br />
                <div className="mb-8 relative">
                    <input className="outline-none border-b-2 border-dark3 font-medium placeholder:text-dark2 placeholder:font-medium py-1 max-w-full w-[400px]" type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" required />
                    {
                        showPassword ? <AiOutlineEyeInvisible onClick={() => setShowPassword(!showPassword)} className="absolute top-[20%] right-2 text-2xl cursor-pointer" /> : <AiOutlineEye onClick={() => setShowPassword(!showPassword)} className="absolute top-[20%] right-2 text-2xl cursor-pointer" />
                    }
                </div>
                <div className="font-medium mb-10">
                    <input className="mr-1 cursor-pointer" type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                </div>
                <button className='px-5 py-2 bg-primary rounded text-white active:scale-95 transition-transform w-full font-medium mb-3'>Login</button>
                {
                    credentialsError && <p className="text-red-500 text-xs -mt-3 mb-3 max-w-full w-[400px]">*Invalid email and password</p>
                }
                <div className="flex justify-center gap-1 text-sm font-medium">
                    <p>Don&apos;t have an account?</p>
                    <Link className="text-primary underline" to='/registration'>Register</Link>
                </div>
                <div className="max-w-[90%] w-[400px]">
                    <div className="flex items-center gap-2 my-6">
                        <hr className="border-[1px] border-[#C5C5C5] w-full" />
                        <p className="text-black font-medium">Or</p>
                        <hr className="border-[1px] border-[#C5C5C5] w-full" />
                    </div>
                    <div>
                        <div onClick={handleGoogle} className='px-5 py-2 text-black active:scale-95 transition-transform w-full font-medium mb-3 flex items-center border border-[#C5C5C5] rounded-full cursor-pointer'><FcGoogle className="text-2xl" /><p className="mx-auto">Continue with Google</p></div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;