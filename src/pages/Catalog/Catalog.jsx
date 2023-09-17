import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { getAllCars } from '../../services/api-cars';
import { CatalogList, PagBtn } from './Catalog.styled';
import Filter from '../../components/Filter';

const Catalog = ({ addFavorit, dellFavorit }) => {
  const [allCars, setAllCars] = useState([]);
  const [filterdCard, setFilteredCard] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getAllCars(page)
      .then(data => {
        if (data) {
          setAllCars(prev => [...prev, ...data]);
        }
      })
      .catch(error => console.log(error.message));
  }, [page]);
  const handlerSearchByModel = query => {
    const result = allCars.filter(el => el.make === query);
    setFilteredCard(result);
  };

  return (
    <>
      <Filter collection={allCars} setCollection={handlerSearchByModel} />
      <CatalogList>
        {(filterdCard.length > 0 ? filterdCard : allCars).map((el, index) => (
          <li key={index}>
            <Card
              data={el}
              addFavorit={addFavorit}
              dellFavorit={dellFavorit}
              collection={allCars}
              setCollection={setAllCars}
            />
          </li>
        ))}
      </CatalogList>
      {allCars.length >= 8 && filterdCard.length === 0 && (
        <PagBtn onClick={() => setPage(page + 1)}>Load more</PagBtn>
      )}
    </>
  );
};
export default Catalog;
