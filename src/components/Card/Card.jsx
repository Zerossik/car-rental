import {
  CardWrap,
  StyledButton,
  StyledImg,
  SuportingList,
  SuportingItem,
  StyledTitle,
  StyledPrice,
  TitleWrap,
} from './Card.styled';

import defaultImage from '../../img/image-not-found.jpg';

const Card = ({ data }) => {
  const adress = data.address.split(',');
  const sity = adress[1];
  const country = adress[2];
  const { rentalCompany, type, model, id, make, img, year, rentalPrice } = data;
  const suporting = [sity, country, rentalCompany, type, model, id];
  return (
    <CardWrap>
      <StyledImg src={img ? img : defaultImage} alt={model} />
      <TitleWrap>
        <StyledTitle>
          {make} <span style={{ color: '#3470FF' }}>{model}</span>, {year}
        </StyledTitle>
        <StyledPrice>{rentalPrice}</StyledPrice>
      </TitleWrap>
      <SuportingList>
        {suporting.map((el, index) => (
          <SuportingItem key={index}>{el}</SuportingItem>
        ))}
      </SuportingList>
      <StyledButton>Learn more</StyledButton>
    </CardWrap>
  );
};

export default Card;
