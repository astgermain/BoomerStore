import React from 'react';

const ProductInfo = ({ product }) => {
    return (
        <>
            <p className="has-text-weight-semibold is-size-2 lAlign" style={{marginBottom: "10px"}}>{product.title}</p>
        </>
    );
};

export default ProductInfo;