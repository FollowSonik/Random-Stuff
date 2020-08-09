import React from 'react';

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: 'red',
  padding: '10px',
};

export default function App() {
  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button>Open Modal</button>
      </div>
      <div style={OTHER_CONTENT_STYLES}>Other Content</div>
    </>
  );
}