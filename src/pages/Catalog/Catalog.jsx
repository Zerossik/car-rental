import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { getAllCars } from '../../services/api-cars';
import { CatalogList } from './Catalog.styled';
const Catalog = () => {
  const [allCars, setAllCars] = useState([]);
  useEffect(() => {
    getAllCars()
      .then(data => setAllCars(data))
      .catch(error => console.log(error.message));
  }, []);
  return (
    <CatalogList>
      {allCars.map((el, index) => (
        <li key={index}>
          <Card data={el} />
        </li>
      ))}
    </CatalogList>
  );
};
export default Catalog;
