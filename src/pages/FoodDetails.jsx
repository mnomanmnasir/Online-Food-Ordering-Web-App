import React, { useState, useEffect } from 'react'
import products from '../assets/fake-data/products';
import { useParams } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/ProductCardMaterial/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap'
import '../styles/product-details.css'
import productImg from '../assets/images/product_01.1.jpg'
import ProductCard from '../components/ProductCardMaterial/product-card/ProductCard';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/shopping-cart/cartSlice';

const FoodDetails = () => {

    const [tab, setTab] = useState('desc')
    const [enteredName, setEnteredName] = useState('')
    const [enteredEmail, setEnteredEmail] = useState('')
    const [ReviewMsg, setReviewImg] = useState('')
    const { id } = useParams();
    const product = products.find(product => product.id === id)
    const { title, price, category, desc, image01 } = product;

    const [previewImg, setPreviewImg] = useState(product.image01)
    const relatedProduct = products.filter(item => category === item.category)
    const dispatch = useDispatch();

    const addItem = () => {
        dispatch(cartActions.addItem({
            id,
            title,
            price,
            image01
        }))
    }

    const submitHandler = e => {
        e.preventDefault()
    }

    useEffect(() => {
        setPreviewImg(product.image01)
    }, [products])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [product])
    return (


        <Helmet title='Product Details'>

            <CommonSection title={title} />
            <section>
                <Container>
                    <Row>
                        <Col lg='2' md='2'>
                            <div className="product_images">
                                <div className="img_item mb-3" onClick={() => setPreviewImg(product.image01)}>
                                    <img src={product.image01} alt="" className='w-50' />
                                </div>
                                <div className="img_item mb-3" onClick={() => setPreviewImg(product.image02)}>
                                    <img src={product.image02} alt="" className='w-50' />
                                </div>
                                <div className="img_item" onClick={() => setPreviewImg(product.image03)}>
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
                                <h2 className="product_title mb-3">{title}</h2>
                                <p className="product_price">Price: <span>${price}</span></p>
                                <p className='category mb-5'>Category: <span>{category}</span></p>
                                <button onClick={addItem} className='addTOCART_btn'>Add to cart</button>
                            </div>
                        </Col>
                        <Col lg='12'>
                            <div className="tabs d-flex align-items-center gap-5 py-3">
                                <h6 className={` ${tab === 'desc' ? "tab_active" : ''}`} onClick={() => setTab('desc')}>Description</h6>
                                <h6 className={` ${tab === 'rev' ? "tab_active" : ''}`} onClick={() => setTab('rev')}>Reviews</h6>
                            </div>
                            {
                                tab === 'desc' ?
                                    <div className="tab_content">
                                        <p>
                                            {desc}
                                        </p>
                                    </div> :
                                    <div className="tab_form mb-3">
                                        <div className="review pt-5">
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
                                        <form className='form' onSubmit={submitHandler}>
                                            <div className="form_group">
                                                <input type="text" placeholder='Enter Your Name' required onChange={(e) => setEnteredName(e.target.value)} />
                                            </div>

                                            <div className="form_group">
                                                <input type="text" placeholder='Enter Your Email' required onChange={(e) => setEnteredEmail(e.target.value)} />
                                            </div>

                                            <div className="form_group">
                                                <textarea rows={5} type="text" required placeholder='Write your review' onChange={(e) => setReviewImg(e.target.value)} />
                                            </div>
                                            <button type='submit' className='addTOCART_btn'>Submit</button>
                                        </form>
                                    </div>
                            }
                        </Col>

                        <Col lg="12" className='mb-5 mt-4'>
                            <h2 className='related_Product-title'>
                                You Might also like
                            </h2>
                        </Col>
                        {
                            relatedProduct.map((item) => (
                                <Col lg='3' md='4' sm="6" xs='6' className='mb-4' key={item.id}>
                                    <ProductCard item={item} />
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>

        </Helmet>
    )
}

export default FoodDetails;