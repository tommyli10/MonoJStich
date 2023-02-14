import React from 'react';

const Home = () => {
    return(
        <div className='mt-5'>
            <h1 className='text-center'>Why write more code when few code do trick</h1>
            <div className='d-flex justify-content-center mt-5'>
                <a type='button' href='/all' className='btn-lg btn-dark mr-4 px-4 py-3'>Browse</a>
                <a type='button' href='/addline' className='btn-lg btn-outline-secondary border border-secondary ml-4 shadow-none px-4 py-3'>Compose</a>
            </div>
        </div>
    );
};

export default Home;