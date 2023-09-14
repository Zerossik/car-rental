import styled from 'styled-components';
import Button from '../Button';

export const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 274px;
  min-height: 450px;
  text-align: center;

  background-color: transparent;
`;

export const StyledImg = styled.img`
  display: block;
  object-fit: cover;
  height: 268px;
  border-radius: 14px;
`;
export const StyledTitle = styled.p`
  width: 200px;
  max-height: 50px;

  color: #121417;
  text-align: left;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(24 / 16);
`;

export const StyledPrice = styled.p`
  color: #121417;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(24 / 16);
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const SuportingList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
  margin-bottom: 28px;
`;

export const SuportingItem = styled.li`
  padding-right: 6px;

  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: calc(18 / 12);

  &:not(:last-child) {
    border-right: 1px solid red;
  }
`;
