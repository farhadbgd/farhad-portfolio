import React from 'react';
import hs1 from './hs1.png'
import hs2 from './hs2.png'
import hs3 from './hs3.png'
const HappySmile = () => {
    return (
        <div>
            <div>
                <div className='lg:flex justify-center'>

                    <div className="card w-1/3 h-1/3   ">
                        <figure><img src={hs1} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-1/3 h-1/3   ">
                        <figure><img src={hs2} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-1/3 h-1/3   ">
                        <figure><img src={hs3} alt="Shoes" /></figure>
                    </div>

                </div>
                <div className='m-12 text-xl' >
                    <ul>
                        <li>

                            <a className='btn-outline btn-info' href='https://happy-smile-6d1aa.web.app' target="_blank" rel="noopener noreferrer"><button className="btn btn-outline btn-info text-x">Live Site Link</button></a>
                        </li>
                        <li className='my-6'>

                            <a className='btn-outline btn-info ' href='https://github.com/farhadbgd/b6a11-service-review-client-side-farhadbgd' target="_blank" rel="noopener noreferrer"><button className="btn btn-outline btn-info text-x">Github Client Site Code</button></a>
                        </li>
                        <li>

                            <a className='btn-outline btn-info' href='https://github.com/farhadbgd/b6a11-service-review-server-side-farhadbgd' target="_blank" rel="noopener noreferrer"><button className="btn btn-outline btn-info text-x">Github Server Site Code</button></a>
                        </li>


                    </ul>

                    <h4>● Happy Smile is a private dental doctor service.</h4>
                    <h4>● User can view and take the services and add review. </h4>
                    <h4>● There is available add and delete any services.</h4>
                    <h4>Technology: ReactJS, React Router, React hot toast, Tailwind CSS, DaisyUI, Firebase, Node.js, ExpressJS, MongoDB. </h4>
                </div>

            </div>
        </div>
    );
};

export default HappySmile;