import React from 'react';
import Menubar from './Menubar';

const AudioLayout = ({ children }: any) => {
  return (
    <div>
      <Menubar />
      {children}
    </div>
  );
};

export default AudioLayout;
