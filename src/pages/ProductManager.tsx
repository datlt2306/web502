import React from 'react'
import { Link } from 'react-router-dom';
import { ProductType } from '../types/product'

type ProductManagerProps = {
  products: ProductType[];
  onRemove: (id: number) => void
}

const ProductManager = (props: ProductManagerProps) => {
  return (
    <div>
      <table className="table table-bordered">
        <tbody>
          {props.products.map((item, index) => {
            return <tr>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <Link to={`/admin/product/${item.id}/edit`}>Edit</Link>
                <button onClick={() => props.onRemove(item.id)}>Remove</button></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProductManager