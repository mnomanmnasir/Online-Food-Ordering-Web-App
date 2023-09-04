import React from 'react'
import Slider from "react-slick";

import ava1 from '../../../assets/images/ava-1.jpg'
import ava2 from '../../../assets/images/ava-2.jpg'
import ava3 from '../../../assets/images/ava-3.jpg'
import ava5 from '../../../assets/images/ava-5.jpg'

import '../../../styles/slide.css'

const TestimonialSlider = () => {

    const setting = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <Slider {...setting}>
            <div>
                <p className="review_text">
                    Generally, customers take the time to share negative feedback for one of two reasons; they saw a problem and would like it solved, so other customers don’t experience it, or they were frustrated and let down by the experience, and would like it rectified. In your reply, you have a chance to do this.
                </p>
                <div className=' slide_content d-flex align-items-center gap-3'>
                    <img src={ava1} alt="" className='rounded' />
                    <h6>
                        Noman Nasir
                    </h6>
                </div>
            </div>
            <div>
                <p className="review_text">
                    We’re glad that you loved (product, service, experience, person etc.). We are always trying our best to make your experience memorable, and we’re glad that we’ve achieved it!
                </p>
                <div className='slide_content d-flex align-items-center gap-3'>
                    <img src={ava2} alt="" className='rounded' />
                    <h6>
                        Syed Fashat
                    </h6>
                </div>
            </div>
            <div>
                <p className="review_text">
                On-page surveys and website feedback widgets are great because they help you get visual, contextual, and in-the-moment feedback without requiring too much extra effort on your end. But the following can be helpful 
                some websites include feedback pages, which users usually access from the contact page.
                </p>
                <div className='slide_content d-flex align-items-center gap-3'>
                    <img src={ava3} alt="" className='rounded' />
                    <h6>
                        Usman Sher
                    </h6>
                </div>
            </div>
            <div>
                <p className="review_text">
                A positive review expresses overall satisfaction with a product, service, or experience, highlighting specific aspects the reviewer enjoyed or found beneficial. It often includes personal experiences, constructive feedback, and recommendations for others.
                </p>
                <div className='slide_content d-flex align-items-center gap-3'>
                    <img src={ava5} alt="" className='rounded' />
                    <h6>
                        Aleena Faisal
                    </h6>
                </div>
            </div>
        </Slider>
    )
}

export default TestimonialSlider;