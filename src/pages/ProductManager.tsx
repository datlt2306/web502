import React from 'react'
import { ProductType } from '../types/product'

type ProductManagerProps = {
  products: ProductType[];
}

const ProductManager = (props: ProductManagerProps) => {
  return (
    <div>
      <table>
        <tbody>
          {props.products.map((item, index) => {
            return <tr>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td><button>Remove</button></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProductManager