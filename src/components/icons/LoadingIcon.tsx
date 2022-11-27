import * as React from 'react'

const LoadingIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        background: 'transparent',
        display: 'block',
        shapeRendering: 'auto',
      }}
      // width="40px"
      height="20px"
      viewBox="0 0 40 20"
      preserveAspectRatio="xMidYMid"
    >
      <circle cx="8" cy="10" fill="#72aeff" r="8">
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;0.5;1"
          values="8;29;8"
          begin="-0.5s"
        />
      </circle>
      <circle cx="29" cy="10" fill="#e5e5e5" r="8">
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;0.5;1"
          values="8;29;8"
          begin="0s"
        />
      </circle>
      <circle cx="8" cy="10" fill="#72aeff" r="8">
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;0.5;1"
          values="8;29;8"
          begin="-0.5s"
        />
        <animate
          attributeName="fill-opacity"
          values="0;0;1;1"
          calcMode="discrete"
          keyTimes="0;0.499;0.5;1"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  )
}

export default LoadingIcon
