import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { Store } from "react-notifications-component";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

const Registration = () => {
    const { signUpEmailPassword } = useContext(AuthContext);
    const navigate = useNavigate();
    const [passwordError, setPasswordError] = useState('');
    const [alreadyExistError, setAlreadyExistError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        setPasswordError('');
        setAlreadyExistError(false);

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const image = form.get('image');

        if (password.length < 6) {
            setPasswordError('password should contain at least 6 characters');
            return;
        }

        if (!/^(?=.*[A-Z]).+$/.test(password)) {
            setPasswordError('password should contain at least an uppercase character');
            return;
        }

        if (!/^(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).+$/.test(password)) {
            setPasswordError('password should contain at least a special character');
            return;
        }

        signUpEmailPassword(email, password)
            .then(() => {
                Store.addNotification({
                    title: "Success",
                    message: "Registered Successfully",
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

                updateProfile(auth.currentUser, { displayName: name, photoURL: image })
                    .then(() => { })
                    .catch(() => { })

                navigate('/login');
            })

            .catch(error => {
                error.code === 'auth/email-already-in-use' && setAlreadyExistError(true);
            })
    }
    return (
        <div className="pt-20 pb-10 flex flex-col justify-center items-center font-primary">
            <form onSubmit={handleRegister} className="text-dark1 xl:p-14 lg:p-12 md:p-10 p-8 border border-dark3 rounded text-sm md:text-base max-w-[90%] mx-auto">
                <h2 className="font-bold text-3xl md:text-4xl mb-10 font-secondary">Create an account</h2>
                <input className="outline-none border-b-2 border-dark3 font-medium placeholder:text-dark2 placeholder:font-medium py-1 max-w-full w-[400px] mb-8" type="text" name="name" id="name" placeholder="Name" required />
                <br />
                <input className="outline-none border-b-2 border-dark3 font-medium placeholder:text-dark2 placeholder:font-medium py-1 max-w-full w-[400px] mb-8" type="text" name="image" id="image" placeholder="Image URL" />
                <br />
                <input className="outline-none border-b-2 border-dark3 font-medium placeholder:text-dark2 placeholder:font-medium py-1 max-w-full w-[400px] mb-8" type="email" name="email" id="email" placeholder="Email" required />
                {
                    alreadyExistError && <p className="text-red-500 text-xs -mt-8 max-w-full w-[400px]">Email is already in use</p>
                }
                <div className="mb-8 relative">
                    <input className="outline-none border-b-2 border-dark3 font-medium placeholder:text-dark2 placeholder:font-medium py-1 max-w-full w-[400px]" type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" required />
                    {
                        showPassword ? <AiOutlineEyeInvisible onClick={() => setShowPassword(!showPassword)} className="absolute top-[20%] right-2 text-2xl cursor-pointer" /> : <AiOutlineEye onClick={() => setShowPassword(!showPassword)} className="absolute top-[20%] right-2 text-2xl cursor-pointer" />
                    }
                </div>
                {
                    passwordError && <p className="text-red-500 text-xs -mt-8 mb-8 max-w-full w-[400px]">*{passwordError}</p>
                }
                <button className='px-5 py-2 bg-primary rounded text-white active:scale-95 transition-transform w-full font-medium mb-3'>Register</button>
                <div className="flex justify-center gap-1 text-sm font-medium">
                    <p>Already have an account?</p>
                    <Link className="text-primary underline" to='/login'>Login</Link>
                </div>
            </form>
        </div>
    );
};

export default Registration;