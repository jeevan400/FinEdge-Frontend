import React from 'react'

function Awards() {
  return (
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-6 px-5 mb-5'>
                <img style={{width:'90%', height:'90%'}} src="/media/images/largestBroker.svg" alt="Awards image" />
            </div>
            <div className='col-6 mb-5'>
                <h1 className='mb-3'>Largest stock broker in India</h1>
                <p className=''>2+ million FinEdge clients contribute to over 15% of all retail order volumes in india daily by trading and investing in :</p>
                <div className='row mb-3'>
                    <div className='col-6'>
                        <ul>
                            <li className='mb-3'>Futures and Options</li>
                            <li className='mb-3'>Commodity derivatives</li>
                            <li className='mb-3'>Currency derivatives</li>
                        </ul>
                    </div>
                    <div className='col-6'>
                        <ul>
                            <li className='mb-3'>Stocks & IPOs</li>
                            <li className='mb-3'>Direct mutual funds</li>
                            <li className='mb-3'>Bonds and Govt. Securities</li>
                        </ul>
                    </div>
                </div>
                <img src="media/images/pressLogos.png" alt="Press logos" style={{width:"90%"}}/>
            </div>
        </div>
    </div>
  )
}

export default Awards;
