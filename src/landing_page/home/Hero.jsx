import React from 'react'

function Hero() {
  return (
    <div className='container '>
        <div className='row text-center'>
            <img className='mb-5' src="/media/images/homeHero.png" alt="Home hero" />
            <h1 className='mt-5 fs-1 fw-bold '>Invest in everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
            <button className='py-2 px-4 rounded btn btn-primary mb-5' style={{width:'30%', margin:'auto'}}> Signup Now</button>
        </div>
    </div>
  )
}

export default Hero;
