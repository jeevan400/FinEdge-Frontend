import React from 'react'

function Stats() {
  return (
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-6 px-5'>
                <h1 className='fs-3 mb-3'>Trust with confidence</h1>
                <h2 className='fs-5'>Customer-first always</h2>
                <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with &#8377;3.5+ lakh crores worth of equity investments.</p>
                <h2 className='fs-5'>No Spam or gimmicks</h2>
                <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                <h2 className='fs-5'>The Zerodha universe</h2>
                <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs</p>
                <h2 className='fs-5'>Do better with money</h2>
                <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
            <div className='col-6 px-5 mb-5'>
                <img style={{width:'90%'}} src="media/images/ecosystem.png" alt="ecosystem image" />
                <div className='text-center'>
                    <a className='px-3' style={{textDecoration:'none'}} href="#">Explore Our Product <i class="fa-solid fa-arrow-right-long"></i> </a>
                    <a className='px-3' style={{textDecoration:'none'}} href="#">Try Kite Demo <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stats;
