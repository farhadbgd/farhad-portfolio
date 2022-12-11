import React from 'react';
import bg from '././bg2.jpg'

const AboutMe = () => {
    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={bg} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Hi!</h1>
                        <h3 className='text-justify'>I'm a Junior Web Developer. I'm passionate about coding. I am working on JavaScript, React.js, MongoDB. I'm always determined to achieve my goals and I love to learn new things. I'm currently seeking an opportunity to build a long-term profession as a Web Developer.
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;