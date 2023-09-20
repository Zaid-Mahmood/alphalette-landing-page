import React from 'react'
import "../styles/SectionOne.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Data2 } from "./TimelessData";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

function SectionThree() {
    const CustomPrevArrow = (props) => {
        const { onClick, currentSlide } = props;
        return (
            <>
                {currentSlide !== 0 && (
                    <div className="slick-arrow slick-prev" onClick={onClick}>
                        <KeyboardArrowLeftIcon className="leftArrow" />
                    </div>
                )}
            </>
        )
    };

    const CustomNextArrow = (props) => {
        const { onClick, currentSlide, slideCount } = props;
        return (
            <>
                {currentSlide !== slideCount - settings.slidesToShow && (
                    <div className="slick-arrow slick-next" onClick={onClick}>
                        <ArrowForwardIosIcon className="rightArrow" />
                    </div>
                )}
            </>
        )
    };



    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <section>
            <div className='container-fluid col-md-12 py-2 overflow-hidden'>
                <div className='row'>
                    <div className='col-md-11 mx-auto p-0'>
                        <h5 className='d-inline-block sectionOne fw-bolder float-start'>TIMELESS TONES</h5>
                    </div>



                    {/* Cards Section */}
                    <div className='col-md-12 mt-4 ms-3 px-4 position-relative'>
                        <div className='row'>
                            <Slider {...settings}>
                                {Data2.map((item) => (
                                    <div className='card ms-4  position-relative overflow-visible border-0'>

                                        <img className='modelImages' src={item.img} alt={item.title} />

                                        <div className='cardBottom text-start'>
                                            <p className="mb-0"> <small className="fw-bold"> {item.title} </small></p>
                                            <div className="items">
                                                <span className="itemColor">{item.color} &nbsp;</span>
                                                <span className="colorNumbers rounded-1">{item.colors}</span>
                                            </div>
                                            <p className="itemPrice">{item.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </Slider>

                        </div>
                    </div>



                </div>
            </div>

        </section>
    )
}

export default SectionThree
