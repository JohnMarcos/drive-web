import React from 'react';

const SVG = ({
    width = 18,
    height = 18,
}) => {
    return (    
        <svg xmlns="http://www.w3.org/2000/svg" 
            width={width} 
            height={height} 
            viewBox="0 0 18 18">
        <g fill="none" fillRule="evenodd">
          <path fill="#CCC" d="M9,0 C4.02975,0 0,4.02975 0,9 C0,13.971375 4.02975,18 9,18 C13.971375,18 18,13.971375 18,9 C18,4.02975 13.971375,0 9,0 Z"/>
          <path fill="#FFF" d="M12.675375,11.503125 C13.00275,11.83275 13.0005,12.367125 12.670875,12.6945 C12.50775,12.8565 12.292875,12.9375 12.078,12.9375 C11.862,12.9375 11.644875,12.85425 11.480625,12.69 L8.996625,10.191375 L6.498,12.6765 C6.33375,12.8385 6.12,12.920625 5.904,12.920625 C5.689125,12.920625 5.472,12.837375 5.30775,12.672 C4.980375,12.3435 4.982625,11.809125 5.31225,11.48175 L7.810875,8.99775 L5.32575,6.498 C4.99725,6.1695 4.9995,5.635125 5.33025,5.30775 C5.657625,4.97925 6.192,4.9815 6.519375,5.31225 L9.003375,7.810875 L11.50425,5.326875 C11.831625,4.998375 12.366,5.000625 12.6945,5.331375 C13.021875,5.659875 13.019625,6.193125 12.69,6.5205 L10.19025,9.0045 L12.675375,11.503125 Z"/>
        </g>
        </svg>      
    )
};

export default SVG;