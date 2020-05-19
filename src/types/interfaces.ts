import { ToastType } from 'src/types/enums';
import React from 'react';

export interface ToastOptions {
  timer?: number;
  useCloseButton?: boolean;
}

export interface ToastItem {
  id: number;
  type: ToastType;
  message: string | React.ReactNode;
  timer: number;
  options?: ToastOptions
}
