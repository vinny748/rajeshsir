import React from 'react';

function Product(props) {

    return (
        <div className='card card-body'>
            <h1>{props.productObj.ProductName}</h1>
            <img className="w-50 h-50" src={props.productObj.productImage} alt="" />
        </div >
    );
}

export default Product;