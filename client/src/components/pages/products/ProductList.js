import React from 'react'
import PropTypes from 'prop-types'
import ProductCard from './ProductCard'

const ProductList = ({ products, deleteProduct, addItemToCart }) => {
  return (
    <div>
      {
        products.map((product, index) => {
          return <ProductCard
            {...product}
            key={index}
            deleteProduct={deleteProduct}
            addItemToCart={addItemToCart}
          />
        })
      }
    </div>
  )
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  addItemToCart: PropTypes.func.isRequired
}

export default ProductList
