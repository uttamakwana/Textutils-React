import React from 'react'

const capatalize = (word) => {
    return (word.charAt(0).toUpperCase() + word.slice(1));
}
function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capatalize(props.alert.type)}</strong> : {props.alert.msg}
    </div>
  )
}

export default Alert