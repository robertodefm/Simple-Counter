import React from 'react'
import PropTypes from 'prop-types'

export const SecondsCounter = (props) => {
  return (
    <div className='card'>
      <div className="number ">
        <h1>{props.unidad}</h1>
        {props.img}

      </div>
        
    </div>
  )
}

SecondsCounter.propTypes={
  unidad: PropTypes.number,
  img: PropTypes.img,
}
