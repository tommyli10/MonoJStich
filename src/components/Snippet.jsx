import React from 'react';

const Snippet = (props) => {
    console.log(props.code)

    return (
        <div>
            <p>{props.code}</p>
        </div>
    )
};

export default Snippet;