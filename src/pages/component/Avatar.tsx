
import React from 'react';

export default function Avatar(props: any) {
  return (
    <img 
    src={props.src} 
    width={props.width}
    height={props.height}
    style={{ borderRadius: '50%' }} />
  );
}
