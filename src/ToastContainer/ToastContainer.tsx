import React from 'react';
import ReactDOM from 'react-dom';

import * as Styled from './style';

function Toasts () {
  return (
    <Styled.Container>
      Toasts
    </Styled.Container>
  );
}

function ToastContainer () {
  return ReactDOM.createPortal(<Toasts/>, document.body);
}

export default ToastContainer;
