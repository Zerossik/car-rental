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
import icon from '../../img/svg/icon.svg';
import defaultImage from '../../img/image-not-found.jpg';
import { getAdvertById, updateAdvert } from '../../services/api-cars';
import { useState } from 'react';
import Modal from '../Modal';

const Card = ({ data, addFavorit, dellFavorit, collection, setCollection }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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

  const updateCard = (collection, cardId, newCard) => {
    const result = collection.map(el => {
      if (el.id === cardId) {
        return { ...newCard };
      }
      return el;
    });
    return result;
  };

  const handlerSetFavorites = async id => {
    setIsLoading(true);
    const { data } = await getAdvertById(id);

    const newAdvert = {
      ...data,
      isFavorites: !data.isFavorites,
    };

    updateAdvert(id, newAdvert)
      .then(({ data }) => {
        setCollection(updateCard(collection, data.id, data));
        if (data.isFavorites) {
          addFavorit(data);
          return;
        } else {
          dellFavorit(data.id);
          return;
        }
      })
      .catch(error => console.log(error.message))
      .finally(() => setIsLoading(false));
  };
  const handlerLearnMore = () => {
    setIsOpen(!isOpen);
  };
  return (
    <CardWrap>
      <FavoritBtn
        onClick={() => handlerSetFavorites(id)}
        isFavorites={isFavorites}
        isDisabled={isLoading}
      >
        <svg width={18} height={18}>
          <use href={`${icon}#normal`}></use>
        </svg>
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
      <StyledButton onClick={handlerLearnMore}>Learn more</StyledButton>
      {isOpen && <Modal openModal={handlerLearnMore}></Modal>}
    </CardWrap>
  );
};

export default Card;
