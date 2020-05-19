import React from 'react';
import { ToastProvider, ToastContainer, ToastPosition } from '../../src';
import Container from './Container';

function App () {
  return (
    <ToastProvider>
      Toast App
      <Container/>
      <ToastContainer position={ToastPosition.TOP_CENTER}/>
    </ToastProvider>
  );
}

export default App;
