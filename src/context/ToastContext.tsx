import React, { createContext, useContext, useState } from 'react';
import { ToastType } from '../types/enums';
import { ToastOptions, ToastItem } from '../types/interfaces';

interface ToastContextInterface {
  toasts: ToastItem[];
  appendToast: (type: ToastType, message: string | React.ReactNode, options?: ToastOptions) => ToastItem;
  removeToast: (toastId: number) => void;
}

const ToastContext = createContext<ToastContextInterface>({} as ToastContextInterface);

const DEFAULT_TIMER = 4000;
let toastId = 0;

function ToastProvider (props: any) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const appendToast = (type: ToastType, message: string | React.ReactNode, options?: ToastOptions) => {
    const toast: ToastItem = {
      id: ++toastId,
      type,
      message,
      timer: options?.timer || DEFAULT_TIMER,
      options
    };
    setToasts(prevState => [...prevState, toast]);
    return toast;
  };

  const removeToast = (toastId: number) => {
    setToasts(prevState => [...prevState].filter(toast => toast.id !== toastId));
  };

  const toastContext: ToastContextInterface = {
    toasts,
    appendToast,
    removeToast
  };

  return <ToastContext.Provider value={toastContext} {...props}/>;
}

const useToastContext = () => useContext(ToastContext);

export { ToastProvider, useToastContext };
