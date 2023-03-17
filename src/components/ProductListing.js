import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Product from './Product'
import { useEffect } from 'react'
// import Container from 'react-bootstrap/Container';
import { setproducts } from '../redux/actions/productActions'
import './Product.css'

const ProductListing = () => {
    const products = useSelector((state)=>state)
    const dispatch = useDispatch()
    const fetchProducts= async ()=>{
        const resp = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err)=>{
                console.log("Error",err)
        })
        dispatch(setproducts(resp.data))
    }

    useEffect(()=>{
        fetchProducts();
    },[])

    console.log(products)
  return (
    <div className='main'>
      <Product/>
      </div>
  )
}

export default ProductListing
