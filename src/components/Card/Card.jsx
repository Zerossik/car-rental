import List from '../List';
import { CardWrap, StyledButton, StyledImg } from './Card.styled';

const data = {
  id: 9629,
  year: 2009,
  make: 'Lamborghini',
  model: 'Murcielago',
  type: 'Convertible',
  img: 'https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/lamborghini_murcielago.webp',
  description:
    'The Lamborghini Murcielago is an exotic and high-performance convertible that represents the epitome of Italian automotive engineering, combining breathtaking design, blistering speed, and a spine-tingling exhaust note.',
  fuelConsumption: '25.0',
  engineSize: '6.5L V12',
  accessories: [
    'Carbon-fiber body panels',
    'Alcantara upholstery',
    'Lamborghini Infotainment System',
  ],
  functionalities: [
    'All-Wheel Drive',
    'Electronic Stability Control',
    'Retractable soft-top roof',
  ],
  rentalPrice: '$500',
  rentalCompany: 'Supercar Rentals',
  address: '321 Example Road, Kharkiv, Ukraine',
  rentalConditions:
    "Minimum age: 30\nValid driver's license\nSecurity deposit and insurance required",
  mileage: 5832,
};
const Card = () => {
  // const adress = data.address.split(',');
  // const sity = adress[1];
  // const country = adress[2];

  return (
    <CardWrap>
      <StyledImg src={data.img} alt={data.model} />
      <div>
        <h3>
          {data.model}, <span>{data.year}</span>
        </h3>
        <p>{data.rentalPrice}</p>
      </div>
      <List></List>
      <StyledButton>Learn more</StyledButton>
    </CardWrap>
  );
};

export default Card;
