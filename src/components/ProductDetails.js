import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectedproduct } from '../redux/actions/productActions'
const ProductDetails = () => {
    const product = useSelector((state)=> state.product)
    const {productId} = useParams()
    const dispatch = useDispatch()
    const fetchProductDetails = async () =>{
         const resp = await axios 
         .get(`https://fakestoreapi.com/products/${productId}`)
         .catch((err)=>{
            console.log("Err", err)
         })
         dispatch(selectedproduct(resp.data))
    }
    useEffect(()=>{
        if(productId && productId !== "") fetchProductDetails()
    },[productId])
  return (
    <div>
      <div className='ui grid container'>
           
      </div>
    </div>
  )
}

export default ProductDetails
