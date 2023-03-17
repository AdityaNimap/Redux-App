import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux'
import './Product.css'
import { Link } from 'react-router-dom';

const Product = () => {
    const products = useSelector((state) => state.allProducts.products)
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (

            <div key={id} className='card-main'>
                <Link to={`/product/${id}`}>
                    <Card style={{ width: '18rem', height: '30rem' , textDecoration:'none' }}>
                        <Card.Img variant="top" src={image} style={{ width: '16rem', height: '20rem' }} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Title>$ {price}</Card.Title>
                            <Card.Text>{category}</Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </div>

        )
    })

    return <>{renderList}</>

}

export default Product
