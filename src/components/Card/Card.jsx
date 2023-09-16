import {
  CardWrap,
  FavoritBtn,
  StyledButton,
  StyledImg,
  SuportingList,
  SuportingItem,
  StyledTitle,
  StyledPrice,
  TitleWrap,
} from './Card.styled';
import { ReactComponent as Icon } from '../../img/svg/normal.svg';
import defaultImage from '../../img/image-not-found.jpg';

const Card = ({ data, setFavorites, isLoading }) => {
  const adress = data.address.split(',');
  const sity = adress[1];
  const country = adress[2];
  const {
    id,
    rentalCompany,
    type,
    model,
    mileage,
    make,
    img,
    year,
    rentalPrice,
    isFavorites,
  } = data;
  const suporting = [sity, country, rentalCompany, type, model, mileage];

  return (
    <CardWrap>
      <FavoritBtn
        onClick={() => setFavorites(id)}
        isFavorites={isFavorites}
        isDisabled={isLoading}
      >
        <Icon width={18} height={18} />
      </FavoritBtn>
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
