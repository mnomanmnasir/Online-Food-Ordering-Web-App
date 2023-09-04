import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";
// import '../../styles/header.css'
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

import "../../styles/header.css";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];


const Header = () => {
  const menuRef = useRef(null);
  // const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");
  // let navigate = useNavigate();

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  // console.log(menuRef?.current?.classList.value);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (
  //       document.body.scrollTop > 80 ||
  //       document.documentElement.scrollTop > 80
  //     ) {
  //       headerRef.current.classList.add("header__shrink");
  //     } else {
  //       headerRef.current.classList.remove("header__shrink");
  //     }
  //   });

  //   return () => window.removeEventListener("scroll");
  // }, []);

  return (
    <header className="header">
      <Container>
        <div className="nav_wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="" />
            <h5>Food Restuarant</h5>
          </div>
          {/*/////////////////      menu      //////////////////////// */}
          <div className="navigation" ref={menuRef}>
            <div className="menu d-flex align-items-center gap-5">
              {
                nav__links.map((item, index) => (
                  <NavLink onClick={toggleMenu} to={item.path} key={index} className={navClass => navClass.isActive ? 'active_menu' : ''}>{item.display} </NavLink>
                ))
              }
            </div>
          </div>


          {/*/////////////////      nav right icon      //////////////////////// */}

          <div className="nav_right d-flex align-items-center gap-4">
            <span className="cart_icon" onClick={toggleCart}>
              <i className="ri-shopping-basket-line"></i>
              <span><i className="cart_badge">{totalQuantity}</i></span>
            </span>
            <span className="user">
              <Link to='/login'> <i className="ri-user-line"></i> </Link>
            </span>
            <span className="mobile_menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
