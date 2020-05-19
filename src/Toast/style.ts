import styled, { css, keyframes } from 'styled-components';
import { ToastType } from '../types/enums';

export const SlideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SlideUp = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

export const Toast = styled.div<{ type: ToastType, isDisplay: boolean }>`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 12px;
  animation: ${SlideDown} 0.3s ease-in-out;
  opacity: 1;

  ${props => !props.isDisplay && css`
    animation: ${SlideUp} 0.3s ease-in-out;
    opacity: 0;
  `}

  ${props => props.type === ToastType.INFO && css`
    background-color: blue;
    color: #fff;
  `};

  ${props => props.type === ToastType.SUCCESS && css`
    background-color: green;
    color: #fff;
  `}
`;

export const CloseButton = styled.a`
  cursor: pointer;
`;

export const IconClose = styled.img`
  width: 20px;
  height: 20px;
  fill: #ffffff;
`;
