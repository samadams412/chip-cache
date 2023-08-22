import React from 'react'
import "../../index.css"
export default function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center">
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1'>
                    <h1 className='jumbotron__title'>Discover a Wide Range of Tech Products</h1>
                    <h2 className='jumbotron__sub-title'>Shop the latest tech products at unbeatable prices.</h2>
                    <div class="d-flex justify-content-center justify-content-lg-start">
                    <a href="/products" className="btn btn-lg jumbotron__btn">
                    <i className="uil uil-shopping-cart"></i> Shop Now
                    </a>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}
