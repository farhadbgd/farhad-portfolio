import React from 'react';
import dp1 from './dp1.png'
import dp2 from './dp2.png'
import dp3 from './dp3.png'
const DeveloperProgram = () => {
    return (
        <div>
            <div>
                <div className='lg:flex justify-center'>

                    <div className="card w-1/3 h-1/3   ">
                        <figure><img src={dp1} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-1/3 h-1/3   ">
                        <figure><img src={dp2} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-1/3 h-1/3   ">
                        <figure><img src={dp3} alt="Shoes" /></figure>
                    </div>

                </div>
                <div className='m-12 text-xl' >
                    <ul>
                        <li>

                            <a className='btn-outline btn-info' href='https://developer-program-6f26c.web.app/' target="_blank" rel="noopener noreferrer"><button className="btn btn-outline btn-info text-x">Live Site Link</button></a>
                        </li>
                        <li className='my-6'>

                            <a className='btn-outline btn-info ' href='https://github.com/farhadbgd/b6a11-service-review-client-side-farhadbgd' target="_blank" rel="noopener noreferrer"><button className="btn btn-outline btn-info text-x">Github Client Site Code</button></a>
                        </li>
                        <li>

                            <a className='btn-outline btn-info' href='https://github.com/farhadbgd/b610-lerning-platform-server-side-farhadbgd' target="_blank" rel="noopener noreferrer"><button className="btn btn-outline btn-info text-x">Github Server Site Code</button></a>
                        </li>


                    </ul>

                    <h4>● It is a programming language course site.</h4>
                    <h4>● User is able to view in details and choose a course to learn. </h4>
                    <h4>Technology: ReactJS, React Router, Bootstrap CSS., Firebase.</h4>




                </div>

            </div>
        </div>
    );
};

export default DeveloperProgram;