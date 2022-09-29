import React from 'react';

const Oneliner = (props) => {   
    return (
        <div>
            <h3>{props.oneliner.title}</h3>
            <p>{props.oneliner.code}</p>
            <div className='d-flex'>
                <p>by <span>{props.oneliner.author}</span></p>
            </div>
        </div>
    );
};

export default Oneliner;