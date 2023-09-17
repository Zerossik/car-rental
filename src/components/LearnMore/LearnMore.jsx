import {
  Container,
  StyledImg,
  StyledTitle,
  List,
  Item,
  StyledDescription,
  ListTitle,
  StyledValue,
  ConditionalItem,
  PhoneBtn,
} from './LearnMore.styled';
import defaultImg from '../../img/image-not-found.jpg';
const LearnMore = ({ card }) => {
  const {
    id,
    type,
    model,
    mileage,
    make,
    img,
    year,
    rentalPrice,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
  } = card;
  const adress = card.address.split(',');
  const sity = adress[1];
  const country = adress[2];
  const suporting = [
    sity,
    country,
    `id: ${id}`,
    `Year: ${year}`,
    `Type: ${type}`,
    `Fuel Consumption: ${fuelConsumption}`,
    `Engine Size: ${engineSize}`,
  ];

  const accsAndFunc = [...accessories, ...functionalities];
  const newMileage = mileage.toString().split('');
  newMileage.splice(1, 0, ',');

  const newRentalConditions = [...rentalConditions.split(`\n`)];
  const [age] = newRentalConditions.splice(0, 1);
  const conditionAge = age.split(': ')[1];

  const condition = [
    `Minimum age:`,
    ...newRentalConditions,
    `mileage:`,
    `Price:`,
  ];

  return (
    <Container>
      <StyledImg src={img ? img : defaultImg} alt={model} />
      <StyledTitle>
        {make} <span style={{ color: '#3470FF' }}>{model}</span>, {year}
      </StyledTitle>
      <List>
        {suporting.map((el, index) => (
          <Item key={index}>{el}</Item>
        ))}
      </List>
      <StyledDescription>{description}</StyledDescription>
      <ListTitle>Accessories and functionalities:</ListTitle>
      <List>
        {accsAndFunc.map((el, index) => (
          <Item key={index}>{el}</Item>
        ))}
      </List>
      <ListTitle>Rental Conditions:</ListTitle>

      <List>
        {condition.map((el, index) => {
          return (
            <ConditionalItem key={index}>
              {index === 0 ? (
                <>
                  {el} <StyledValue>{conditionAge}</StyledValue>
                </>
              ) : index === 3 ? (
                <>
                  {el} <StyledValue>{newMileage.join('')}</StyledValue>
                </>
              ) : index === 4 ? (
                <>
                  {el} <StyledValue>{rentalPrice}</StyledValue>
                </>
              ) : (
                el
              )}
            </ConditionalItem>
          );
        })}
      </List>

      <PhoneBtn href="tel:+380730000000">Rental car</PhoneBtn>
    </Container>
  );
};
export default LearnMore;
