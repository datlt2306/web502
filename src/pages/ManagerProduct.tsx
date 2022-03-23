import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../types/product'

type ManagerProductProps = {
    data: ProductType[],
    onRemove: (id: number) => void
}

const ManagerProduct = (props: ManagerProductProps) => {
  return (
    <div className='container'>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {props.data && props.data.map((item, index) => {
                return <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>
                        <Link to={`/admin/product/${item.id}/edit`}>Edit</Link>
                        <button onClick={() => props.onRemove(item.id)}>Remove</button>
                        </td>
                    </tr>
            })}
            
            </tbody>
      </table>
    </div>
  )
}

export default ManagerProduct