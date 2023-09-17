import styled from 'styled-components';

export const Container = styled.div``;
export const StyledImg = styled.img`
  border-radius: 14px;
  margin-bottom: 14px;

  width: 460px;
  height: 248px;
  object-fit: cover;
  object-position: center;
`;
export const StyledTitle = styled.p`
  max-height: 50px;
  color: #121417;
  text-align: left;
  font-size: 18px;
  font-weight: 500;
  line-height: calc(24 / 18);

  margin-bottom: 8px;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  margin-bottom: 14px;
`;

export const Item = styled.li`
  padding-right: 6px;

  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: calc(18 / 12);

  &:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.5);
  }
`;

export const StyledDescription = styled.p`
  color: #121417;
  font-size: 14px;
  line-height: calc(20 / 14);
  margin-bottom: 24px;
`;

export const ListTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: calc(20 / 14);

  margin-bottom: 8px;
`;

export const StyledValue = styled.span`
  color: #3470ff;
  font-size: 12px;
  font-weight: 600;
  line-height: calc(18 / 12);
  letter-spacing: -0.24px;
`;

export const ConditionalItem = styled.li`
  color: #363535;
  background-color: #f9f9f9;

  font-size: 12px;
  line-height: calc(18 / 12);
  letter-spacing: -0.24px;

  padding: 7px 14px;
  border-radius: 35px;
`;

export const PhoneBtn = styled.a`
  display: inline-block;
  padding: 12px 50px;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);
`;
