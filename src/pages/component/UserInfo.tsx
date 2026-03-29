import React from 'react';

export default function UserInfo(props: any) {

    
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age:{props.age}</p>
    </div>
  );
}
