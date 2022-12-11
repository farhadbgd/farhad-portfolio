import React from 'react';
import bw1 from './bw1.png'
import bw2 from './bw2.png'
import bw3 from './bw3.png'

const BookWorld = () => {
    return (
        <div>
            <div className='lg:flex justify-center'>

                <div className="card w-1/3 h-1/3   ">
                    <figure><img src={bw1} alt="Shoes" /></figure>
                </div>
                <div className="card w-1/3 h-1/3   ">
                    <figure><img src={bw2} alt="Shoes" /></figure>
                </div>
                <div className="card w-1/3 h-1/3   ">
                    <figure><img src={bw3} alt="Shoes" /></figure>
                </div>

            </div>
            <div className='m-12 text-xl' >
                <ul>
                    <li>

                        <a className='btn-outline btn-info' href='https://book-world-da049.web.app' target="_blank" rel="noopener noreferrer"><button className="btn btn-outline btn-info text-x">Live Site Link</button></a>
                    </li>
                    <li className='my-6'>

                        <a className='btn-outline btn-info ' href='https://github.com/farhadbgd/used-products-resale-clients-side' target="_blank" rel="noopener noreferrer"><button className="btn btn-outline btn-info text-x">Github Client Site Code</button></a>
                    </li>
                    <li>

                        <a className='btn-outline btn-info' href='https://github.com/farhadbgd/used-products-resale-server-side' target="_blank" rel="noopener noreferrer"><button className="btn btn-outline btn-info text-x">Github Server Site Code</button></a>
                    </li>


                </ul>

                <h4>● Users can buy and sellers can sell books.Everyone has separate Dashboard.Payment system is available too.</h4>
                <h4>● There have applied CRUD operations on the Book World site. </h4>
                <h4>● There is admin dashboard, he can control buyers and sellers, also verify the seller.</h4>
                <h4>● It is a full - stack website</h4>
                <h4>Technology: ReactJS, React Router, React hot toast, Tailwind CSS, DaisyUI, Firebase, Node.js, ExpressJS, Stripe js, MongoDB. </h4>

            </div>

        </div>
    );
};

export default BookWorld;







