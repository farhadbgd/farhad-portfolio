import React from 'react';
import './styless.css'


const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <div className='bg'>
                            <h1 className="mb-5 text-5xl font-bold">Hello !</h1>
                        </div>

                        <h2>I'm farhad talukder a web developer</h2>
                        <a href="https://drive.google.com/file/d/1NVjMFY9ckKPnc2Fws9wXu_MJCZvQI33o/view" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline btn-accent text-xl px-12">Resume</button></a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;