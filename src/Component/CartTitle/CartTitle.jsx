import React from 'react';

const CartTitle = ({cartTitle}) => {
    const{title}=cartTitle
    console.log(title)
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default CartTitle;