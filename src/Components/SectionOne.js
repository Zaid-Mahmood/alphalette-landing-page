import "../styles/SectionOne.css";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Data1 } from "./DataCarousel";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

function SectionOne() {

  let [switchState, setSwitchState] = useState(false)
  let [changeImage, setChangeImage] = useState(-1);


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
    initialSlide: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    autoplay: true,

    autoplaySpeed: 3000,
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
      <div className='col-md-12 container-fluid sectionOneMain py-4 overflow-hidden'>
        <div className='row'>
          <div className='col-md-11 mx-auto p-0'>
            <h5 className='d-inline-block sectionOne fw-bolder float-start'>ARRAY COLLECTION</h5>
            <button className='sectionOne btnShopAll d-inline-block text-white bg-black border px-3 rounded-pill float-end'>SHOP ALL</button>
          </div>

          <div className="btnMainDiv2  border border-2 rounded-pill py-1 ms-5">
            <div className='fw-bolder d-flex justify-content-between align-items-center'>
              <button className='womenBtn border rounded-pill'> <b>Women's</b></button>
              <button className='menBtn border-0 bg-light'> <b>Men's</b></button>
            </div>
          </div>

          {/* Cards Section */}
          <div className='col-md-12 mt-4 ms-3 p-0'>
            <div className='row'>
              <Slider {...settings}>

                {Data1.map((item, id) => (

                  <div key={id} className='card ms-4  overflow-visible border position-relative'>
                    <div>
                      {switchState === item.id ?
                        <div className="m-0 p-5">
                          <Slider {...settings}>
                            <img className='modelImages2' src={item.hoverImage} alt={item.title} />
                          </Slider>
                        </div>
                        :
                        <img className='modelImages' src={item.img} alt={item.title} />
                      }
                    </div>
                    <div className='cardBottom text-start'>
                      <p className="mb-0"> <small className="fw-bold"> {item.title}

                      </small></p>
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

export default SectionOne
