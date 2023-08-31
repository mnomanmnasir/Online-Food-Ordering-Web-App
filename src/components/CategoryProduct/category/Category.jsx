import React from 'react'

import { Container, Row, Col } from 'reactstrap'
import categoryImg1 from '../../../assets/images/category-01.png'
import categoryImg2 from '../../../assets/images/category-02.png'

import categoryImg3 from '../../../assets/images/category-03.png'

import categoryImg4 from '../../../assets/images/category-04.png'
import '../../../styles/category.css'


const categoryData = [
    {
        display: 'Fast Food',
        imgUrl: categoryImg1
    },
    {
        display: 'Pizza',
        imgUrl: categoryImg2
    },
    {
        display: 'Asian Food',
        imgUrl: categoryImg3
    },
    {
        display: 'Row Meat',
        imgUrl: categoryImg4
    }
]
const Category = () => {
    return (
    
            <Container>
                <Row>
                    {
                        categoryData.map((item, index) => (

                            <Col lg="3" md="4">
                                <div className="category_item d-flex align-items-center gap-3">
                                    <div className="category_img">
                                        <img src={item.imgUrl} alt="category_item" />
                                    </div>
                                    <h6>{item.display}</h6>
                                </div>
                            </Col>
                        ))

                    }
                </Row>
            </Container>
    )
}

export default Category;