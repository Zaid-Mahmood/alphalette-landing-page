import React from 'react'
import "../styles/Banner.css"
function Banner() {

    return (
        <div className='container-fluid bannerMainDiv'>
            <div className='col-md-12 overflow-hidden'>
                <div className='row'>
                    <div className='col-md-11 mx-auto bannerImage  position-relative'>

                        <picture>
                            <source media="(min-width: 768px)" srcset="../assets/AugWarm_28-land.webp" />
                            <source className='bannerImg2' media="(min-width: 0px)" srcset="//alphaleteathletics.com/cdn/shop/files/AugWarm_27-port_800x.jpg?v=1691504694" />
                            <img className='rounded-5 w-100' src="../assets/AugWarm_28-land.webp" alt="banner-img" />
                        </picture>

                        <div className="overlayText position-absolute">
                            <h1 className='bannerHeadingText text-start text-white ms-5 fw-bolder'>ARRAY <br /> COLLECTION</h1>
                            <small className='text-white fw-medium ms-5'>Pick a color ,pick a mood</small>
                            <button className='ladyBtn text-white d-block ms-5 mt-2 rounded-pill'>SHOP WOMEN</button>
                            <button className='manBtn text-white d-block ms-5 mt-2 rounded-pill'>SHOP MEN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Banner
