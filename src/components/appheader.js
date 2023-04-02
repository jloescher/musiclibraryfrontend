import React from 'react'
import './appheader.css'

const AppHeader = (props) => {
  return (
    <header className="appheader">
      {props.title}
    </header>
  )
}

export default AppHeader
