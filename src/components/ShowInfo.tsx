import React from 'react'

type ShowInfoProps = {
    children: JSX.Element
}
const ShowInfo = (props: ShowInfoProps) => {
    console.log(props); 
  return (
    <div>{props.children}</div>
  )
}

export default ShowInfo