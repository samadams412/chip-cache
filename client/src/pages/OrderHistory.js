import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
// import './pages.css'
import '../index.css'

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;
    console.log(data);
  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="container my-1 mt-3">
        <Link className="text__primary-2" id="" to="/">← Back to Products</Link>

        {user ? (
          <>
            <h2 className="mt-3" id='o-name'>
              Order History for {user.email} 
            </h2>

            <hr className="line-sep"></hr>

            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
             
                <div className="flex-row">
                  <div className="col-12">
                  
                    {order.products.map(({ _id, image, name, price }, index) => (
                      
                      <div key={index} className="card px-1 py-1 item-card">
                        <div className='row'>
                        <div className="col sm-6 col-md-7">
                        <h2 id="name-tag">{name}</h2>
                        <Link className="oh-container" to={`/products/${_id}`}>
                          <img alt={name} src={image} className='order-history' />

                        </Link>
                        </div>
                        
                      <div className='order-info col-sm-4 col-md-5'>
                      <p id='o-id'>Order ID: <br></br> {order._id}</p>
                        <p id='o-date'>Ordered: <br></br> {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</p>
                        </div>
                        
                        </div>
                        
                        {/* <Link class="oh-container" to={`/products/${_id}`}>
                          <img alt={name} src={image} className='order-history' />

                        </Link> */}
                        <div className='col-md-4'>
                          <span id="price-span">${price.toString().includes('.') ? price : price + '.00'}</span>
                        </div>
                        <hr class="line-sep"></hr>
                      </div>
                    
                    ))}
                  </div>
                  

                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default OrderHistory;