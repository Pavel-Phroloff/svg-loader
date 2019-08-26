import React from 'react';

import { LoaderProps } from './Loader.h';

const Loader: React.FC<LoaderProps> = ({
    size,
    backBarWidth,
    backBarColor,
    progressBarWidth,
    progressBarColor,
    percent,
  }) => {
    console.log('render');
    const center = size / 2;

    const hexRegExp = /#[0-9a-fA-F]{6}$/;
    
    const backBarRadius = size  / 2 - backBarWidth;
    const backBarLength = 2 * Math.PI * backBarRadius;

    const progressBarRadius = (size - progressBarWidth) / 2;
    const progressBarLength = 2 * Math.PI * progressBarRadius;
    const progress = (1 - percent) * progressBarLength;

    return <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
    >
      <circle
        r={backBarRadius}
        cx={center}
        cy={center}
        fill="transparent"
        strokeDasharray={backBarLength}
        strokeDashoffset={0}
        stroke={hexRegExp.test(backBarColor) ? backBarColor : 'gray'}
        strokeWidth={backBarWidth}
      />
      <circle
        r={progressBarRadius}
        cx={center}
        cy={center}
        fill="transparent"
        transform={`rotate(-90 ${center} ${center})`}
        strokeDasharray={progressBarLength}
        strokeDashoffset={progress}
        stroke={hexRegExp.test(progressBarColor) ? progressBarColor : 'red'}
        strokeWidth={progressBarWidth}
        style={{ transition: 'stroke-dashoffset 1s linear' }}
      />
    </svg>;
}

export default Loader;