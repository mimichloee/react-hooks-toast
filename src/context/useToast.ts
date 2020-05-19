import React, { useCallback } from 'react';
import { useToastContext } from './ToastContext';
import { ToastType } from '../types/enums';
import { ToastOptions } from '../types/interfaces';

type AddToastType = (message: string | React.ReactNode, options?: ToastOptions) => void;
type UseToastType = {
  infoToast: AddToastType,
  successToast: AddToastType,
  errorToast: AddToastType,
  warnToast: AddToastType
};

function useToast (): UseToastType {
  const { appendToast } = useToastContext();

  const infoToast = useCallback((message: string | React.ReactNode, options?: ToastOptions) => appendToast(ToastType.INFO, message, options), []);
  const successToast = useCallback((message: string | React.ReactNode, options?: ToastOptions) => appendToast(ToastType.SUCCESS, message, options), []);
  const errorToast = useCallback((message: string | React.ReactNode, options?: ToastOptions) => appendToast(ToastType.ERROR, message, options), []);
  const warnToast = useCallback((message: string | React.ReactNode, options?: ToastOptions) => appendToast(ToastType.WARN, message, options), []);

  return { infoToast, successToast, errorToast, warnToast };
}

export default useToast;
