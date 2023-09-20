import "../styles/SectionFour.css"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
function SectionFour() {
    return (
        <div className='container-fluid'>
            <div className='text-center px-4 py-2'>
                <h4>SHOP THE LOOK</h4>
            </div>

            <div id="carouselExample" className="carousel slide border rounded-4  mx-5">
                <div className="carousel-inner">
                    <div className="carousel-item active position-relative">
                        <div className='leftImg d-flex'>
                            <img className='border rounded-4 w-50' src="//alphaleteathletics.com/cdn/shop/files/AugWarm_01_800x.jpg?v=1691505538" alt="img-1" />
                            <div className='rightImg d-flex align-items-center justify-content-center'>
                                <img className='w-50 border rounded-4' src="https://cdn.shopify.com/s/files/1/0667/0133/files/StratusBraLinen5_e726dfa5-bc2c-4a17-8201-c7bca62495a3_1000x.jpg" alt="img-2" />

                            </div>
                        </div>
                        <div className='smallText'>
                            <p className="mb-0"> <small className="fw-bold float-start">Status Bra</small></p>
                            <div className="items">
                                <span className="itemColor">Linen &nbsp;</span>
                                <span className="colorNumber rounded-1">18 Colors</span>
                            </div>
                            <p className="itemPrice float-start">$54.00</p>
                        </div>

                    </div>



                    <div className="carousel-item position-relative">
                        <div className='leftImg d-flex'>
                            <img className='border rounded-4 w-50' src="https://alphaleteathletics.com/cdn/shop/files/AugWarm_35-port_800x.jpg?v=1691506243"
                                alt="img-1" />
                            <div className='rightImg d-flex align-items-center justify-content-center'>
                                <img className='w-50 border rounded-4' src="https://cdn.shopify.com/s/files/1/0667/0133/products/AARawCutTankSeaShell1_1000x.jpg" alt="img-2" />
                            </div>
                        </div>
                        <div className='smallText'>
                            <p className="mb-0"> <small className="fw-bold float-start">Status Bra</small></p>
                            <div className="items">
                                <span className="itemColor">Linen &nbsp;</span>
                                <span className="colorNumber rounded-1">18 Colors</span>
                            </div>
                            <p className="itemPrice float-start">$54.00</p>
                        </div>
                    </div>

                    <div className="carousel-item position-relative">
                        <div className='leftImg3 d-flex'>
                            <img className='border rounded-4 w-50' src="https://alphaleteathletics.com/cdn/shop/files/AugWarm_10-port_800x.jpg?v=1691506808"
                                alt="img-1" />

                            <div className='rightImg d-flex align-items-center justify-content-center'>
                                <img className='w-50 border rounded-4' src="https://cdn.shopify.com/s/files/1/0667/0133/products/WolfHeadMuscleTankSeaShell1_1000x.jpg" alt="img-2" />
                            </div>
                        </div>
                        <div className='smallText'>
                            <p className="mb-0"> <small className="fw-bold float-start">Status Bra</small></p>
                            <div className="items">
                                <span className="itemColor">Linen &nbsp;</span>
                                <span className="colorNumber rounded-1">18 Colors</span>
                            </div>
                            <p className="itemPrice float-start">$54.00</p>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span> */}
                    <KeyboardArrowLeftIcon className="carousel-control-prev-icon leftArrow" />
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    {/* <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span> */}
                    <ArrowForwardIosIcon className="carousel-control-next-icon rightArrow" />
                </button>
            </div>


        </div>
    )
}

export default SectionFour
