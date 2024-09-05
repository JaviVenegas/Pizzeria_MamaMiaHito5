import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className="display">
            <div className="display__img">
            <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/06/how-to-fix-error-404-1.webp" alt="React Image"/>
            </div>
            <div className='text-center m-5'>
                <Link to="/" className="btn btn-primary text-center"> Home</Link>
            </div>

        </div>
    );
}

export default Notfound;
