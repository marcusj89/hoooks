
/*
------------------------------------------------------ useHover.js 
*/

import { useRef, useState, useEffect } from 'react';

export default function useHover() {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);

        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );

  return [ref, value];
}


/*
----------------------------------------------- index.js
*/


import React from 'react';
import ReactDOM from 'react-dom';
import useHover from './use-hover';

function App() {
  const [hoverRef, isHovered] = useHover();

  return (
    <div
      ref={hoverRef}
      style={{
        color: 'white',
        padding: '8rem',
        width: '12rem',
        textAlign: 'center',
        fontSize: '5rem',
        backgroundColor: isHovered ? '#00e3e3' : '#ccc'
      }}
    >
      {isHovered ? '😁' : '☹️'}
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);


