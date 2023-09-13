import { useEffect } from 'react';
import Card from '../../components/Card';
import { getAllCars } from '../../services/api-cars';
const Catalog = () => {
  useEffect(() => {
    getAllCars().then(data => console.log(data));
  }, []);
  return (
    <div>
      <Card />
    </div>
  );
};
export default Catalog;
