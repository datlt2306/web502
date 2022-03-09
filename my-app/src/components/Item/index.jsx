import React from 'react'

const Item = (props) => {
    console.log(props) // { data: {id: 1, name: "Product A"}}
  return (
    <div>{props.data.name}</div>
  )
}

export default Item