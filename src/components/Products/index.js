import React from 'react';
import './styles.css';

function Product({data}){
    
    return(
        <div className="card-container">
            <h3>
               {data}
            </h3>

        </div>
    )

}

export default Product;