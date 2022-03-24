import React from 'react'
import { ProductType } from './types/product'
import { Table,Space } from 'antd';

type ProductManagerProps = {
   products: ProductType[],
   onRemove: (id: number) => void
}


const ProductManager = ({ products, onRemove }: ProductManagerProps) => {
  const headings = [
    { title: "Name", dataIndex: "name", key: "name"},
    { title: "Price", dataIndex: "price", key: "price"},
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size="middle">
            <a href="">Edit</a>
            <a href="">Delete</a>
        </Space>
      ),
    },
  ]
  const dataSource = products.map((product, index) => { 
    return { 
      key: index + 1, 
      name: product.name,
      price: product.price
    }
  })
  return (
    <div>
        <Table columns={headings} dataSource={dataSource} />
    </div>
  )
}

export default ProductManager