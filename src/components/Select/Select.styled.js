import styled from 'styled-components';

export const StyledSelect = styled.div`
  max-width: 224px;
  width: 100%;
  height: 48px;
  position: relative;

  padding: 14px 18px;

  border-radius: 14px;
  background-color: #f7f7fb;
`;

export const StyledBtn = styled.button`
  width: 100%;
  color: #121417;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  border-radius: 2px;

  background-color: transparent;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;

  cursor: pointer;
`;

export const StyledContent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  top: 52px;
  left: 0;
  max-width: 224px;
  width: 100%;
  height: 272px;
  padding: 14px 18px;

  background-color: inherit;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(18, 20, 23, 0.05);
  border-radius: 14px;
  margin-top: 1px;
  overflow: auto;

  z-index: 100;
`;

export const StyledItem = styled.button`
  color: rgba(18, 20, 23, 0.5);
  transition: all 200ms linear;

  font-weight: 400;

  &:hover,
  &focus {
    transform: scale(1.1);
    color: orange;
  }
`;
