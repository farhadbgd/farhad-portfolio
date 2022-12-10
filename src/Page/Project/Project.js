import React from 'react';
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
                                <a href="https://book-world-da049.web.app" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline btn-accent text-xl px-12">Live Site</button></a>

                            </div>
                        </div>
                    </div>

                </div>
                <div className='mx-12'>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <div className="card-body">
                            <h1>Happy Smile</h1>
                            <div className="card-actions justify-center">
                                <a href="https://happy-smile-6d1aa.web.app" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline btn-accent text-xl px-12">Live Site</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <div className="card-body">
                            <h1>Developer Program</h1>
                            <div className="card-actions justify-center">
                                <a href="https://developer-program-6f26c.web.app" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline btn-accent text-xl px-12">Live Site</button></a>
                            </div>
                        </div>
                    </div>

                </div>



            </div>
        </div>

    );
};

export default Project;