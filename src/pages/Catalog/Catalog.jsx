import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import {
  getAdvertById,
  getAllCars,
  updateAdvert,
} from '../../services/api-cars';
import { CatalogList, PagBtn } from './Catalog.styled';

const Catalog = ({ addFavorit, dellFavorit }) => {
  const [allCars, setAllCars] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllCars(page)
      .then(data => {
        if (data) {
          setAllCars(prev => [...prev, ...data]);
        }
      })
      .catch(error => console.log(error.message));
  }, [page]);
  const updateCard = (cardId, newCard) => {
    const result = allCars.map(el => {
      if (el.id === cardId) {
        return { ...newCard };
      }
      return el;
    });
    setAllCars(result);
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
        updateCard(data.id, data);
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

  return (
    <>
      <CatalogList>
        {allCars.length > 0 &&
          allCars.map((el, index) => (
            <li key={index}>
              <Card
                data={el}
                setFavorites={handlerSetFavorites}
                isLoading={isLoading}
              />
            </li>
          ))}
      </CatalogList>
      {allCars.length > 0 && (
        <PagBtn onClick={() => setPage(page + 1)}>Load more</PagBtn>
      )}
    </>
  );
};
export default Catalog;
