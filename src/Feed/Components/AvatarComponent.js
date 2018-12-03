import React, { Component } from 'react';

const AvatarImgStyle = {
    borderRadius: '50%',
    width: '70%'
}

const AvatarComponent = ({ url }) => {
    return (
        <div className="col">
            <img src={url} style={AvatarImgStyle}></img>
        </div>
    );
}

export default AvatarComponent;