import React from 'react'

const greeting = ({params}) => {
  return (
    <div>greeting page{params.name}</div> /*name === [name]*/
  )
}

export default greeting