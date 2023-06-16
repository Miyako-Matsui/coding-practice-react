import React, { useState } from 'react'

function ShowAndHide() {
  const [show, setShow] = useState(true)

  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show === true ? 'Hide' : 'Show'} Element Below
      </button>

      <div>{show === true ? 'Toggle Challenge' : null}</div>
    </>
  )
}

export default ShowAndHide
