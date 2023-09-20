import "../styles/SectionTwo.css"

function SectionTwo() {
    return (
        <div className='container-fluid px-5 py-2'>
            <div className="row">
                <div className="col-md-6">
                    <div className='videoTag'>
                        <video className='girlVideo w-100 rounded-5' autoPlay muted loop>
                            <source src="https://cdn.shopify.com/videos/c/o/v/78813f958b6e46be9258895bac1e3dd5.mp4" type="video/mp4" />
                        </video>
                        <div className='videoBtn'>
                            <h1>FOREVER <br /> AMPLIFY</h1>
                            <button className="rounded-pill border-0 text-white">SHOP NOW</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="staticImages">
                        <img className="w-100 rounded-5" src="//alphaleteathletics.com/cdn/shop/files/AugWarm_76-port.jpg?crop=center&v=1691508060&width=1400" alt="staticImage" />
                        <img className="mt-4 w-100 rounded-5" src="//alphaleteathletics.com/cdn/shop/files/AugWarm_31.jpg?crop=center&v=1691508733&width=1400" alt="" />
                        <div className='text-end imgBtn'>
                            <h1>SUMMER <br /> SHORTS</h1>
                            <div className="buttons">
                            <button className="rounded-pill border-0 text-white float-end">SHOP WOMEN</button>
                            <br/>
                            <button className="mt-2 rounded-pill border-0 text-white float-end">SHOP MEN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default SectionTwo
