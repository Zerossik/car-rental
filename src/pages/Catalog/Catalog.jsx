import { useEffect, useRef, useState } from 'react';
import Card from '../../components/Card';
import { getAllCars } from '../../services/api-cars';
import { CatalogList, PagBtn } from './Catalog.styled';

const Catalog = () => {
  const [allCars, setAllCars] = useState([]);
  const [page, setPage] = useState(1);
  const isRenderRef = useRef(true);

  useEffect(() => {
    if (isRenderRef.current) {
      isRenderRef.current = false;
      return;
    }
    getAllCars(page)
      .then(data => {
        if (data) {
          setAllCars(prev => [...prev, ...data]);
        }
      })
      .catch(error => console.log(error.message));
  }, [page]);

  return (
    <>
      <CatalogList>
        {allCars.map((el, index) => (
          <li key={index}>
            <Card data={el} />
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
