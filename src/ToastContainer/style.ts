import styled, { css } from 'styled-components';
import { ToastPosition } from '../types/enums';

export const Container = styled.div<{ position: ToastPosition }>`
  position: fixed;
  overflow: hidden;
  z-index: 999999;
  display: flex;
  flex-direction: column;

  ${props => props.position === ToastPosition.TOP_RIGHT && css`
    align-items: flex-end;
    justify-content: flex-start;
    top: 32px;
    left: 0;
  `}

  ${props => props.position === ToastPosition.TOP_RIGHT && css`
    align-items: flex-end;
    justify-content: flex-start;
    top: 32px;
    right: 0;
  `}

  ${props => props.position === ToastPosition.TOP_CENTER && css`
    align-items: flex-start;
    justify-content: center;
    top: 32px;
    left: 50%;
    transform: translateX(-50%);
  `}
`;
