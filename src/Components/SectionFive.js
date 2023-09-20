import React from 'react'
import "../styles/SectionFive.css"
function SectionFive() {
    return (
        <div className='container-fluid px-5 py-5'>
            <div className="row">
                <div className="col-md-12">
                    <div className='videoTags position-relative'>
                        <video className='alphaVideo w-100 rounded-5' autoPlay muted loop>
                            <source src="https://cdn.shopify.com/s/files/1/0667/0133/files/alphaland-drone-loop-land.mp4?v=1654931634" type="video/mp4" />
                        </video>
                        <div className='videoBtns position-absolute'>
                            <h3 className='visitAlphaLand text-center text-white'>VISIT <br /> ALPHALAND</h3>
                            <div className='d-grid gap-2'>
                                <p className='text-white text-center'>An oasis where individuals come to  <br /> Learn More Dream More Be More</p>
                                <button className="rounded-pill border-0 text-white">LEARN MORE</button>
                                <button className="rounded-pill border-0 text-white">WATCH VIDEO</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SectionFive
