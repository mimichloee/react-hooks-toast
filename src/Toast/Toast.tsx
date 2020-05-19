import React, { useCallback, useEffect, useState } from 'react';
import { useToastContext } from '../context/ToastContext';
import { ToastItem } from '../types/interfaces';

import IconClose from './images/icon-close.svg';

import * as Styled from './style';

type ToastProps = {
  toast: ToastItem;
};

function Toast ({ toast }: ToastProps) {
  const { removeToast } = useToastContext();
  const [display, setDisplay] = useState<boolean>(true);
  let removeTimer = 0;

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDisplay(false);
      removeTimer = window.setTimeout(() => {
        removeToast(toast.id);
      }, 300);
    }, toast.timer);

    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  const handleClick = useCallback(() => {
    setDisplay(false);
    removeTimer = window.setTimeout(() => {
      removeToast(toast.id);
    }, 300);
  }, [toast, removeTimer]);

  return (
    <Styled.Toast type={toast.type} isDisplay={display}>
      {toast.message}
      {toast.options?.useCloseButton && (
        <Styled.CloseButton onClick={handleClick}>
          <Styled.IconClose src={IconClose} alt="icon-close"/>
        </Styled.CloseButton>
      )}
    </Styled.Toast>
  );
}

export default Toast;
