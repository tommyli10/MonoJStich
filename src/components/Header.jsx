import React from 'react';

const Header = (props) => {
    return(
        <div className='d-flex'>
            <div>
                <a href="#">Haicode</a>
            </div>
            <div>
                <a href="/all">See all Haicodes</a>
                <a href="/login">Sign In</a>
                <a href="/signup">Sign Up</a>
            </div>
        </div>
    );
};

export default Header;