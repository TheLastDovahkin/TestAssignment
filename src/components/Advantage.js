import React from "react";

const Advantage = ({icon, title, message, iconStyle, conteinerOrder}) => {
    const classNames =`icon ${iconStyle}`
    const conteinerStyles = `conteiner ${conteinerOrder}`
    return(
    <div className={conteinerStyles}>
      <img src={icon} className={classNames} alt='clock'></img>
      <span className='title'>{title}</span>
      <span className='message'>{message}</span>
    </div>
)}

export default Advantage