import { useEffect, useState } from 'react';
import React from 'react'
import "../styles/Header.css"
import { FaSearch } from 'react-icons/fa';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
// import {TfiShoppingCartFull} from "react-icons/tfi"
function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className='pb-5'>
            <div className='col-md-12 overflow-hidden'>
                <div className='row'>
                    <div className='col-md-1'> </div>
                    <div className={`col-md-10 mx-auto topBar ${isScrolled ? 'scrolled' : 'unscrolled'}`}>


                        <div className='headerWrapper px-4'>
                            <div className='upperContent d-flex justify-content-between align-items-center'>
                                <div>
                                    <small><p className='leftText text-secondary mb-0'>Shop Women's Top Picks</p></small>
                                </div>
                                <div>
                                    <small><p className='rightText d-inline-block mb-0'>Info</p></small>
                                    <small><p className='rightText d-inline-block mb-0'> &nbsp; &nbsp;Login</p></small>
                                </div>
                            </div>
                            <hr className="horizontalLine mt-0 my-1" />
                            <div className='d-flex justify-content-between align-items-center py-2'>
                                <div>
                                    <h2 className='lowerLeftText mb-0'>ALPHALETE</h2>
                                </div>
                                <div>
                                    <h2 className='lowerMiddleText mb-0'>WOMEN &nbsp; MEN</h2>
                                </div>
                                <div className='position-relative'>
                                    <FaSearch className='fs-5' />
                                    &nbsp; &nbsp;
                                    <WorkOutlineIcon className='fs-4' />
                                    <span className='iconCircle smallZero'>
                                       0
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-1'> </div>

                </div>


            </div>
        </header>


    )
}

export default Header
