import React from 'react'

function Education() {
  return (
    <div className='container mt-5'>
        <div className="row px-4">
            <div className="col-5">
                <img style={{width:'100%'}} src="media/images/education.svg" alt="" />
            </div>
            <div className="col-1"></div>
            <div className="col-6 mb-5">
                <h1 className='fs-3 mt-5'>Free and open market education</h1>
                <p>Varsity, the largest online stock market education book in the world covering everything from the vasics to advanced trading.</p>
                <a className='' style={{textDecoration:'none'}} href="#">Versity <i class="fa-solid fa-arrow-right-long"></i></a>
                <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a className='' style={{textDecoration:'none'}} href="#">TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
        </div>
    </div>
  )
}

export default Education;
