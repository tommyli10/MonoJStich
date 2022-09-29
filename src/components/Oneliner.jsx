import React from 'react';
import Snippet from './Snippet.jsx';

const Oneliner = (props) => {   
    return (
        <div className='my-5'>
            <h5 className='text-center'>{props.oneliner.title}</h5>
            <Snippet code={props.oneliner.code}/>
            <div className='d-flex border-top border-dark mt-3'>
                <p className='pt-2'>by&nbsp;<strong>{props.oneliner.author}</strong></p>
            </div>
        </div>
    );
};

export default Oneliner;