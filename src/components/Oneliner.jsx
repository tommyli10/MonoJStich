import React from 'react';
import Snippet from './Snippet.jsx';

const Oneliner = (props) => {   
    return (
        <div className='my-5'>
            <h5 className='text-center'>{props.oneliner.title}</h5>
            <Snippet code={props.oneliner.code}/>
            <div className='d-flex border-top border-dark mt-4'>
                <p className='pt-2 mb-5'>by&nbsp;&nbsp;<strong className='font-italic'>{props.oneliner.author}</strong></p>
            </div>
        </div>
    );
};

export default Oneliner;