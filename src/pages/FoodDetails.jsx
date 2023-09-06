import React, { useState , useEffect } from 'react'
import products from '../assets/fake-data/products';
import { useParams } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/ProductCardMaterial/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap'
import '../styles/product-details.css'
import productImg from '../assets/images/product_01.1.jpg'


const FoodDetails = () => {

    const [tab, setTab] = useState('desc')
    const {id} = useParams(); 
    const product = products.find(product=> product.id === id)

    const [previewImg, setPreviewImg] = useState(product.image01)
    return (

        <Helmet title='Product Details'>

            <CommonSection title='product 01' />
            <section>
                <Container>
                    <Row>
                        <Col lg='2' md='2'>
                            <div className="product_images">
                                <div className="img_item mb-3" onClick={()=> setPreviewImg(product.image01)}>
                                    <img src={product.image01} alt="" className='w-50' />
                                </div>
                                <div className="img_item mb-3" onClick={()=> setPreviewImg(product.image02)}>
                                    <img src={product.image02} alt="" className='w-50' />
                                </div>
                                <div className="img_item" onClick={()=> setPreviewImg(product.image03)}>
                                    <img src={product.image03} alt="" className='w-50' />
                                </div>
                            </div>
                        </Col>

                        <Col lg='4' md='4'>
                            <div className="product_main-img">
                                <img src={previewImg} alt="" className='w-100' />
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className="single_product-content">
                                <h2 className="product_title mb-3">Pizza with Mashroom</h2>
                                <p className="product_price">Price: <span>$34</span></p>
                                <p className='category mb-5'>Category: <span>Burger</span></p>
                                <button className='addTOCART_btn'>Add to cart</button>
                            </div>
                        </Col>
                        <Col lg='12'>
                            <div className="tabs d-flex align-items-center gap-5 py-3">
                                <h6 className='tab_active'>Description</h6>
                                <h6>Reviews</h6>
                            </div>
                            <div className="tab_content">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, cupiditate distinctio dolor veniam architecto commodi temporibus magnam. A in sequi tempore ratione magni provident perferendis eveniet molestias sapiente facilis animi harum nobis at pariatur beatae, veritatis eum excepturi quos ipsum.</p>
                            </div>
                            <div className="tab_form mb-3">
                                <div className="review">
                                    <p className="user_name mb-0">
                                        Noman Nasir
                                    </p>
                                    <p className="user_email">m.noman.m.nasir@gmail.com</p>
                                    <p className="feedback_text">Great Product</p>
                                </div>
                                <div className="review">
                                    <p className="user_name mb-0">
                                        Noman Nasir
                                    </p>
                                    <p className="user_email">m.noman.m.nasir@gmail.com</p>
                                    <p className="feedback_text">Great Product</p>
                                </div>   <div className="review">
                                    <p className="user_name mb-0">
                                        Noman Nasir
                                    </p>
                                    <p className="user_email">m.noman.m.nasir@gmail.com</p>
                                    <p className="feedback_text">Great Product</p>
                                </div>
                                <form className='form'>
                                    <div className="form_group">
                                        <input type="text" placeholder='Enter Your Name' />
                                    </div>

                                    <div className="form_group">
                                        <input type="text" placeholder='Enter Your Name' />
                                    </div>

                                    <div className="form_group">
                                        <textarea rows={5} type="text" placeholder='Enter Your Name' />
                                    </div>
                                    <button type='submit' className='addTOCART_btn'>Submit</button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </Helmet>
    )
}

export default FoodDetails;