import React from 'react';
const Path = (props) => (
    <path
      fill="#ffffff"
      strokeWidth="3"
      stroke="#000000"
      strokeLinecap="round"
      {...props}
    />
  );

  export const Toggle = ({ toggle }: any) => (
    <div onClick={toggle} >
      <svg width="50" height="25" viewBox="0 0 50 26">
        <Path
          d="M 0 2.5 L 40 2.5"
          className="top"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path d="M 0 13.423 L 40 13.423" opacity="1" className="middle" />
        <Path
          d="M 0 24.346 L 40 24.346"
          className="bottom"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </div>
  );
  