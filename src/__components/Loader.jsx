import React, { Fragment } from 'react'
import { Spinner } from '../AbstractElements'

function Loader() {

  const loaderBoxStyle = {
    backgroundColor: "white",
    width: '100%',
    height: '100%',
    position: "fixed",
    top: "0",
    right: "0",
    zIndex: 999
  }

  const loaderStyle = {
    width: "100px",
    height: "100px",
    fontSize: "100px",
    borderWidth: "20px"
  }

  return (
    <Fragment>
      <div>
        <div style={ loaderBoxStyle } className="loader-box">
          <Spinner attrSpinner={{ className: "loader-1", style: loaderStyle }} />
        </div>
      </div>
    </Fragment>
  )
}

export default Loader
