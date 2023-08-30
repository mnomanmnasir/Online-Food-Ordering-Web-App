// import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";
import { Link } from 'react-router-dom'

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <Container>
//         <Row>
//           <Col lg='3' md='4' sm='6'>
//             <div className="footer_logo text-start" >
//               <img src={logo} alt="logo" />
//               <h5>Food Restuarant</h5>
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corporis molestias pariatur aperiam.</p>
//             </div>
//           </Col>
//           <Col lg='3' md='4' sm='6'>
//             <h4 className="footer_title">Delivery Time</h4>
//             <ListGroup className="deliver_time-list text-start">
//               <ListGroupItem classsName='delivery_time-item' style={{ border: '0', background: 'transparent'}}>
//                 <span> Sunday - Thursday </span>
//                 <p>10:00am - 11:00pm</p>
//               </ListGroupItem>

//               <ListGroupItem classsName='delivery_time-item text-start' style={{ border: '0', background: 'transparent' }}>
//                 <span> Friday - Saturday </span>
//                 <p>off day</p>
//               </ListGroupItem>
//             </ListGroup>
//           </Col>
//           <Col lg='3' md='4' sm='6'>
//             {/* <h5 className="">
//               Contact
//             </h5>
//             <ListGroup>
//               <ListGroupItem>

//               </ListGroupItem>
//             </ListGroup> */}

//           </Col>
//           <Col lg='3' md='4' sm='6'>
//           </Col>

//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react'
// import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg='3' md='4' sm='6'>
              <div className="footer_logo text-start">

                <img src={logo} alt="logo" />
                <h5>Food Restuarant</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi similique accusantium </p>
              </div>
            </Col>
            <Col lg='3' md='4' sm='6'>
              <h5 className="footer_title">Delivery Item</h5>
              <ListGroup className="deliver_time-list">
                <ListGroupItem className=" delivery_time-item border-0 ps-0">
                  <span> Sunday - Thursday </span>
                  <p>10:00am - 11:00pm</p>
                </ListGroupItem>


                <ListGroupItem className="delivery_time-item border-0 ps-0">
                  <span> Friday - Saturday </span>
                  <p>off day</p>
                </ListGroupItem>

              </ListGroup>
            </Col>
            <Col lg='3' md='4' sm='6'>
              <h5 className="footer_title">Contact</h5>
              <ListGroup className="deliver_time-list">
                <ListGroupItem className=" delivery_time-item border-0 ps-0">
                  <p>Location: Gulshan Main University Road Karachi</p>
                </ListGroupItem>

                <ListGroupItem className=" delivery_time-item border-0 ps-0">
                  <span> Phone: +92333XXXXXXX </span>
                </ListGroupItem>


                <ListGroupItem className="delivery_time-item border-0 ps-0">
                  <span>Email: abc@gmail.com </span>

                </ListGroupItem>

              </ListGroup>
            </Col>
            <Col lg='3' md='4' sm='6'>
              <h5>NewsLetter</h5>
              <p>Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Enter your email" />
                <span><i className="ri-send-plane-line"></i></span>
              </div>
            </Col>

          </Row>

          <Row className="mt-5">
            <Col lg='6' md='6'>

              <p className="copyright_text">Copyright - 2023, Website made by Noman Nasir. All rights reserved</p>
            </Col>
            <Col lg='6' md='6'>
              <div className="social_links d-flex align-items-center gap-4 text-decoration-none justify-content-end">
                <p className="m-0">Folow:</p>
                <span><Link to='https://www.facebook.com/' target="_blank"><i class="ri-facebook-fill"></i></Link></span>
                <span><Link to='https://github.com/' target="_blank"><i class="ri-github-fill"></i></Link></span>
                <span><Link to='https://www.youtube.com/' target="_blank"><i class="ri-youtube-fill"></i></Link></span>
                <span><Link to='https://www.linkedin.com/' target="_blank"><i class="ri-linkedin-fill"></i></Link></span>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>

  )
}

export default Footer;