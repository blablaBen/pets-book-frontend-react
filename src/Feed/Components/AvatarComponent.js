import React from 'react';

const AvatarImgStyle = {
    borderRadius: '50%',
    width: '50px'
}

const AvatarComponent = ({ url }) => {
    return (
        <div className="col">
            <img src={url} style={AvatarImgStyle}></img>
        </div>
    );
}

export default AvatarComponent;