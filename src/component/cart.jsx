import React from 'react';
// import { useSelector } from 'react-redux';
// import {useDispatch} from 'react-redux';
import Product from './Product';


const cart = () => {
    return (
        <>
           <div className="row">
               <div className="col-md-4">
                   <img src={Product.image} alt={Product.title} height="200px" width="180px"/>
                </div>
                <div className="col-md-4">
                    <h3>{Product.title}</h3>
                    <p className="lead fw-bold">
                        {Product.qty} X ${Product.price}=$
                        {Product.qty * Product.price}
                    </p>
                    {/* <button className="btn btn-outline-dark me-4" onClick={()=>handleButton(Product)}>
                        <i className="fa fa-minus"></i>
                    </button>
                    <button className="btn btn-outline-dark" onClick={()=>handleButton(Product)}>
                        <i className="fa fa-plus"></i> */}
                    {/* </button> */}

                </div>
               

           </div>
        </>
    );
}

export default cart;