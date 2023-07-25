import React from 'react'
import { ImSpoonKnife } from 'react-icons/im';
import Typewriter from "typewriter-effect";

function Header() {
    return (
        <header className='header bg-no-repeat bg-center  bg-cover mb-1' style={{ backgroundImage: `url(https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)` }}>
            <div className='layer bg-black/[0.5] rounded-b-md '>
                <div className="container">
                    <nav className='logo-wrapper p-1 flex justify-center '>

                        <div className='logo border-[10px] ring-1 hover:ring-4 transition-all duration:1000   rounded-[50%] bg-gradient-to-r from-cyan-500 from-30% to-blue-500    p-3 cursor-pointer mt-2'>
                            <ImSpoonKnife className='brand text-[1rem] text-white ' />
                        </div>



                    </nav>
                    <div className='header-text p-2 ' >

                        <h1 className='text-white align-middle font-thin text-[2em] p-3' >

                            <Typewriter

                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("Food Zone")
                                        .start();
                                }}
                            />

                        </h1>
                        <p className='text-white font-thin align-middle text-[1em]'>Let's have fun ...</p>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header