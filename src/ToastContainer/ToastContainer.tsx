import React from 'react';
import ReactDOM from 'react-dom';

import Toast from '../Toast';
import { useToastContext } from '../context/ToastContext';
import { ToastPosition } from '../types/enums';

import * as Styled from './style';

type ToastContainerProps = {
  position: ToastPosition;
}

function Toasts (props: ToastContainerProps) {
  const { toasts } = useToastContext();

  return (
    <Styled.Container position={props.position}>
      {toasts.map((toast) => <Toast key={`toast-${toast.id}`} toast={toast}/>)}
    </Styled.Container>
  );
}

function ToastContainer (props: ToastContainerProps) {
  return ReactDOM.createPortal(<Toasts {...props}/>, document.body);
}

ToastContainer.defaultProps = {
  position: ToastPosition.TOP_RIGHT
};

export default ToastContainer;
