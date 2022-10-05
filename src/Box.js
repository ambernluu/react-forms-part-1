import React from 'react';


const Box = ({id, width, height, backgroundColor, handleRemove}) => {
    
    const removeBox = () => handleRemove(id);
    return (
        <div>
            <div style={{
                backgroundColor: backgroundColor,
                width: `${width}px`,
                height: `${ height }px`
            }}
            />
            <button onClick={removeBox}>Remove Box</button>
        </div>
    );

}

export default Box;