import React from 'react'
import spinner from "../../assets/Spinner.gif"
import "../../css/loading.css"

const Loading = () => {
  return (
    <div className='loading'>
        <img src={spinner} alt="" />
    </div>
  )
}

export default Loading