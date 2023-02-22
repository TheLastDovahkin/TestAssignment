import React from "react";

const Header = ({headerButton}) => {
    return(
     <div className="headerButtons">
        <span className='headerButton'>{headerButton}</span>
     </div>   
    )
}

export default Header