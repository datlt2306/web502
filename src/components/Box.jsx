import React from 'react'

const Box = ({ color }) => {
    console.log(color);
  return (
    <div style={{background: color, width: 100, height: 100}}>Content</div>
  )
}

export default Box