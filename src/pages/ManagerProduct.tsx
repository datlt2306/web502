import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../types/product';
import { Table, Space } from 'antd';

type ManagerProductProps = {
    data: ProductType[],
    onRemove: (id: number) => void
}
interface DataType {
  key: React.Key;
  name: string;
  price: number
}
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <a>{text}</a>
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <a>Invite</a>
        <a>Delete</a>
      </Space>
  )}
];
const ManagerProduct = (props: ManagerProductProps) => {
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');

  const dataSource: DataType[] = props.data.map((item, index) => {
    return {
      key: index + 1,
      name: item.name,
      price: item.price
    }
  });
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
  return (
    <div className='container'>
      
      <Table   rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}dataSource={dataSource} columns={columns} />

        {/* <table className='table table-bordered'>
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
      </table> */}
    </div>
  )
}

export default ManagerProduct