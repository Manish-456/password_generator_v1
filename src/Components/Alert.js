import React from 'react'
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const Alert = (props) => {
 
 return (
    <div style={{height:"50px"}}>
     {props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong >{props.alert.type === "danger"? <WarningIcon/>:<CheckCircleOutlineIcon/>}</strong> <span className='mx-3' >{props.alert.msg}</span> 
 
</div>}
    </div>
  )
}

export default Alert
