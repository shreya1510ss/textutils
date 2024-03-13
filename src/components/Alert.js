import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height:'60px'}}>
       {props.alert && <div className={`alert alert-${props.alert.tp}`} role="alert">
    <strong>{props.alert.msg}</strong>
    </div>}


    </div>
     
  )
}
