import React from "react";

const Text = ({title, message}) => {
    return (
        <div>
            <span className="textTitle">{title}</span>
            <span className="textMessage">{message}</span>
        </div>
    )
}

export default Text