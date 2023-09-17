import { Container } from './Filter.styled';
import Select from '../Select';
const Filter = ({ collection, setCollection }) => {
  const brangArr = [
    'All brand',
    'Buick',
    'Volvo',
    'HUMMER',
    'Subaru',
    'Mitsubishi',
    'Nissan',
    'Lincoln',
    'GMC',
    'Hyundai',
    'MINI',
    'Bentley',
    'Mercedes-Benz',
    'Aston Martin',
    'Pontiac',
    'Lamborghini',
    'Audi',
    'BMW',
    'Chevrolet',
    'Mercedes-Benz',
    'Chrysler',
    'Kia',
    'Land',
  ];

  return (
    <Container>
      <Select
        option={brangArr}
        placeholder={'Car brand'}
        setOpt={setCollection}
      />
    </Container>
  );
};
export default Filter;
