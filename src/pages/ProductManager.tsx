import React from 'react'
import { ProductType } from './types/product'

type ProductManagerProps = {
   products: ProductType[],
   onAdd: (id: number) => void
}


const ProductManager = ({ products, onAdd }: ProductManagerProps) => {

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item, index) => {
            return <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => onAdd(item.id)}>Remove</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
      </div>
  )
}

export default ProductManager