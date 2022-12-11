import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';


const Project = () => {
    return (
        <div className='text-center my-12'>
            <h1>Recent Projects</h1>
            <div className='flex justify-center'>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <div className="card-body">
                            <h1>Book World</h1>
                            <div className="card-actions justify-center">
                                <Link to='/bookworld'>
                                    <button className="btn btn-outline btn-accent text-xl px-12">explore more</button>
                                </Link>

                            </div>
                        </div>
                    </div>

                </div>
                <div className='mx-12'>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <div className="card-body">
                            <h1>Happy Smile</h1>
                            <div className="card-actions justify-center">
                                <Link to='/happysmile'>
                                    <button className="btn btn-outline btn-accent text-xl px-12">explore more</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <div className="card-body">
                            <h1>Developer Program</h1>
                            <div className="card-actions justify-center">
                                <Link to='/developerprogram'>
                                    <button className="btn btn-outline btn-accent text-xl px-12">explore more</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>



            </div>
        </div>

    );
};

export default Project;