import React from 'react';

const HeartIcon = ({ fillColor,  strokeColor}) => (
    <svg
        id="Layer_1_1_"
        style={{ enableBackground: 'new 0 0 16 16' }}
        version="1.1"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
    <path
         fill={fillColor} // Dynamically fill the color inside the heart
         stroke={strokeColor} // Set the outer stroke color
        d="M8.612,2.347L8,2.997l-0.612-0.65c-1.69-1.795-4.43-1.795-6.12,0c-1.69,1.795-1.69,4.706,0,6.502l0.612,0.65L8,16  l6.12-6.502l0.612-0.65c1.69-1.795,1.69-4.706,0-6.502C13.042,0.551,10.302,0.551,8.612,2.347z"/>
    </svg>
);

export default HeartIcon;