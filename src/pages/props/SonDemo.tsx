import React from 'react';

function SonDemo({ userData, onFollow}:any) {
    return (
    <div style={{ border: '1px solid #ccc', padding: 16 }}>
        <img src={userData.avatar} width={80} />
        <h2>{userData.name}</h2>
        <p>{userData.age}</p>
        <button onClick={onFollow}>关注</button>
    </div>);
}

export default SonDemo;
 