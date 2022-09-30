import React from 'react'

const Box = ({ component, children }) => {
  return React.createElement(component, children={ children })
}

export default Box