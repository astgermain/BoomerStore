import React from 'react';
import '../../templates/productPage.sass'

const ProductInfo = ({ product }) => {
    return (
        <>
            <p className="has-text-weight-semibold is-size-2 lAlign fade-in2" style={{marginBottom: "10px"}}>{product.title}</p>
        </>
    );
};

export default ProductInfo;