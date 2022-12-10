import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello !</h1>
                        <h2>I'm farhad talukder</h2>
                        <p className='text-justify'>I'm a Junior Web Developer. I'm passionate about coding. I am working on JavaScript, React.js, MongoDB. I'm always determined to achieve my goals and I love to learn new things. I'm currently seeking an opportunity to build a long-term profession as a Web Developer.
                        </p>
                        <a href="https://drive.google.com/file/d/1NVjMFY9ckKPnc2Fws9wXu_MJCZvQI33o/view" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline btn-accent text-xl px-12">Resume</button></a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;