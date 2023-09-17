import styled from 'styled-components';
import Button from '../Button';

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(18, 20, 23, 0.5);
`;

export const StyledModal = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 541px;
  width: 100%;
  border-radius: 24px;
  background-color: #ffffff;
  padding: 40px;
`;

export const ModalBtn = styled(Button)`
  position: absolute;
  top: 16px;
  right: 16px;
  stroke: black;
`;
