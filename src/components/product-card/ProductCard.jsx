import React from 'react'

// import productImg from "../../../assets/images/product_ 2.1.jpg";
import { Link } from 'react-router-dom'
import '../../styles/product-card.css'


const ProductCard = (props) => {

    const { id, title, image01, price } = props.item;

    return (
        <div className="product_item">
            <div className="product_img">
                <img src={image01} alt="product-img" className='w-50' />
            </div>

            <div className="product_content">
                <h5><Link to={`/foods/${id}`}>{title}</Link></h5>
                <div className="d-flex align-items-center justify-content-between">
                    <span className="product_price">
                        ${price}
                    </span>
                    <button className="addTOCART_btn">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;