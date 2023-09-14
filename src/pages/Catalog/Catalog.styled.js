import styled from 'styled-components';
import Button from '../../components/Button';

export const CatalogList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-bottom: 40px;
`;

export const PagBtn = styled(Button)`
  color: #3470ff;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16)
  text-decoration-line: underline;
`;
