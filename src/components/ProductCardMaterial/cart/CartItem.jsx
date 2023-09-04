import React from 'react'
import { ListGroupItem } from 'reactstrap'
import productImg from '../../../assets/images/product_01.1.jpg'
import "../../../styles/cart-item.css";
// import { useDispatch } from "react-redux";
// import { cartActions } from "../../../store/shopping-cart/cartSlice";



const CartItem = ({item}) => {
  
    const {id, price, title, image01, quantity, totalPrice } = item;
  
    return (
        <ListGroupItem className='border-0 cart_item'>
            <div className="cart_item-info d-flex gap-2">
                <img src={image01} alt="" />

                <div className="card_product-info w-100 d-flex align-items-center gap-4 justify-cotent-between">
                    <div>
                        <h6 className='cart_product-title'>{title}</h6>
                        <p className='d-flex align-items-center gap-5 cart_product-price'>{quantity}x <span>${totalPrice}</span></p>

                        <div className='d-flex align-items-center justify-content-between increase_decrease-btn'>
                            <span className='increase_btn'><i className="ri-add-line"></i></span>
                            <span className='quantity'>{quantity}</span>
                            <span className='decrease_btn'><i className="ri-subtract-line"></i></span>
                        </div>
                    </div>
                    <span className='delete_btn'><i className="ri-close-line"></i></span>
                </div>
            </div>
        </ListGroupItem>
    )
}

export default CartItem;