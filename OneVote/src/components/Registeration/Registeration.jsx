import React, { useState } from "react";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import {Header} from '../index'

function Registeration(){

    const[isLoginClicked, setIsLoginClicked] = useState(true);
    const[isSignUpClicked, setIsSignUpClicked] = useState(false);

    const handleClick = () => {
        setIsLoginClicked(isSignUpClicked);
        setIsSignUpClicked(isLoginClicked);
    }

    return (
        <>
            <Header />
            <main className="w-[100vw] h-[100vh] ">
                <section 
                    className=" max-w-[60vw] h-max mx-auto my-[10vh] shadow-2xl shadow-gray-500 flex flex-col rounded-[40px] p-3"
                >
                    {/* Switch section starts here */}
                    <section className="w-full flex">
                        <div 
                            className={`${isLoginClicked ? 'bg-orange-400 text-white': 'bg-white text-orange-400'} w-1/2 h-full text-center text-lg ubuntu-medium-italic cursor-pointer  transition-all ease-in-out duration-300 p-3 rounded-l-[40px]`}
                            onClick={handleClick}
                        >
                            Login
                        </div>
                        <div 
                            className={`${isSignUpClicked ? 'bg-orange-400 text-white': 'bg-white text-orange-400'} w-1/2 h-full text-center text-lg ubuntu-medium-italic cursor-pointer  transition-all ease-in-out duration-300 p-3 rounded-r-[40px]`}
                            onClick={handleClick}
                        >
                            Sign-Up
                        </div>
                    </section>
                    {/* Switch section ends here */}

                    {/* Registeration section starts here */}
                    <section className="flex relative rounded-[40px] overflow-hidden">

                        {/* Color cover block starts here */}
                            <section 
                                className={`absolute h-full w-1/2 ${isLoginClicked ? 'right-0':'left-0'} bg-orange-400 z-10 cursor-pointer`}
                                
                            >
                                <div 
                                    className={`h-full w-full flex items-center justify-center text-white text-2xl ubuntu-bold-italic`}
                                >
                                    <span className={`${isLoginClicked ? 'block' : 'hidden'} transition-all ease-in-out duration-300`}>
                                        Hey User! <br />Welcome,<br /> Please Login to Continue
                                    </span>
                                    <span className={`${!isLoginClicked ? 'block' : 'hidden'} transition-all ease-in-out duration-300`}>
                                        Welcome Sir/Madam , <br /> Don't have an account? <br /> Sign-Up to continue.
                                    </span>
                                </div>
                            </section>
                        {/* Color cover block ends here */}

                        {/* Login - Section starts here */}
                        <article className="flex w-1/2">
                            <Login />
                        </article>
                        {/* Login section ends here */}

                        {/* Sign Up section starts here */}
                        <article className="flex w-1/2">
                            <SignUp />
                        </article>
                        {/* Sign Up section ends here */}
                    </section>
                    {/* Registeration section ends here */}
                </section>
            </main>
        </>
    );
}

export default Registeration;