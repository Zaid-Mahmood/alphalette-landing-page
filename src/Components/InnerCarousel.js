import "../styles/SectionOne.css";
import { useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Data1 } from "./DataCarousel";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

function InnerCarousel() {

  let [switchState, setSwitchState] = useState(false)



  const onEnter = (id) => {
    setSwitchState(id)
  }

  

  const onLeave = (id) => {
    setSwitchState(id = null)
  }

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
  const settings2 = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };


  return (


       <div> 
              <Slider {...settings}>

                {Data1.map((item, id) => (

                  <div key={id} className='card ms-4 overflow-visible border position-relative' onMouseEnter={() => { onEnter(item.id) }} onMouseOut={() => { onLeave(item.id) }}  >
                    <div>
                      {switchState === item.id ?
                        <div className="m-0 p-5">
                          <Slider {...settings2} >
                          {item.hoverImage.map((item)=>(
                            <img className='modelImages2' src={item}
                            alt={item.title} />
                            ))}
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
  )
}

export default InnerCarousel
