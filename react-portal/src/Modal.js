import React from 'react'

export default function ({ open, children }) {
  if (!open) return null;

  return (
    <div>
      {children}
    </div>
  );
}
