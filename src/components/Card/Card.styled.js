import styled from 'styled-components';
import Button from '../Button';

export const CardWrap = styled.div`
  width: 274px;
  text-align: center;

  background-color: grey;
`;

export const StyledImg = styled.img`
  display: block;
  object-fit: cover;
  height: 268px;
  border-radius: 14px;
`;

export const StyledButton = styled(Button)`
  padding: 12px 99px;

  color: #ffffff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: calc(20 / 14);

  background-color: #3470ff;
  border-radius: 12px;
`;
