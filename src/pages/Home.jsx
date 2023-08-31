import React from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

import homeImg from "../assets/images/hero.png";
import "../styles/hero-section.css";
import Category from "../components/CategoryProduct/category/Category.jsx";
import '../styles/home.css'

import featureImg1 from '../assets/images/service-01.png'
import featureImg2 from '../assets/images/service-02.png'
import featureImg3 from '../assets/images/service-03.png'


import products from '../assets/fake-data/products.js'
import foodCategoryImg1 from '../assets/images/hamburger.png'
import foodCategoryImg2 from '../assets/images/pizza.png'
import foodCategoryImg3 from '../assets/images/bread.png'

import ProductCard from "../components/product-card/ProductCard.jsx";

const featureData = [
  {
    title: 'Quick Delivery',
    imgUrl: featureImg1,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, expedita."
  },
  {
    title: 'Super Dine In',
    imgUrl: featureImg2,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, expedita."
  }, {
    title: 'Easy pick up',
    imgUrl: featureImg3,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, expedita."
  },
]


const Home = () => {

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <h5 className="mb-3">Easy order & fast delivery</h5>
                <h1 className="mb-4 hero_title">
                  <span>HUNGRY?</span> Just wait <br /> food at<span> your door</span>
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero exercitationem dolorum quisquam molestiae cupiditate possimus odit autem blanditiis unde optio vel earum quam accusamus itaque, corrupti tempore illo facilis minima.</p>

                <div className="hero_btn d-flex align-items-center gap-5 mt-4">

                  <button className="order_btn d-flex align-items-center justify-content-between">
                    Order Now <i className="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all_foods-btn"><Link to='/foods'>See all foods</Link></button>
                </div>
                <div className="hero_service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2"><span className="shipping_icon"> <i className="ri-car-line"></i> No shipping charges</span></p>
                  <p className="d-flex align-items-center gap-2"><span className="shipping_icon"> <i className="ri-shield-check-line"></i> 100% secure checkout </span></p>

                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={homeImg} alt="homeImg" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section className="m-5">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature_subtitle mb-4">What are serve</h5>
              <h2 className="feature_title">Just sit back at home</h2>
              <h2 className="feature_title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, iusto!</p>
              <p className="feature_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, quia?</p>

            </Col>

            {
              featureData.map((item, index) => (
                <Col lg='4' md='4' key={index} className="mt-5">
                  <div className="feature_item text-center px-5 py-4">
                    <img src={item.imgUrl} alt="feature-img" className="w-25 mb-3" />

                    <h5 className="fw-bold mb-3">{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>

                </Col>

              ))
            }
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className="text-center">
              <h2>Fantastic foods</h2>
            </Col>
            <Col lg='12'>
              <div className="food_category d-flex align-items-center justify-content-center gap-4">

                <button className="all_btn foodBtnActive">
                  All
                </button>
                <button className="d-flex align-items-center gap-2"><img src={foodCategoryImg1} alt="" />Burger</button>
                <button className="d-flex align-items-center gap-2"><img src={foodCategoryImg2} alt="" />Pizza</button>
                <button className="d-flex align-items-center gap-2"><img src={foodCategoryImg3} alt="" />Bread</button>
              </div>
            </Col>
            {
              products.map((item, index) => (
                <Col lg='3' md='4' key={item.id} className="mt-5">
                  <ProductCard item={item} />
                </Col>

              ))
            }

          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
