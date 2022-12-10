import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <div className="grid grid-flow-col gap-4">
                    {/* <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a> */}
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://github.com/farhadbgd' target="_blank" rel="noopener noreferrer"><button className="btn btn-outline btn-success">Github</button></a>
                        <a href='https://www.linkedin.com/in/farhadbgd' target="_blank" rel="noopener noreferrer"><button className="btn btn-outline btn-success">LinkedIn</button></a>

                    </div>
                </div>
                <div>
                    <p>Copyright © 2022 - All right reserved by farhad talukder</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;