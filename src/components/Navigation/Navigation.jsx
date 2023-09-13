import { List, StyledNavLink } from './Navigation.styled';

const Navigaion = () => {
  return (
    <nav>
      <List>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="catalog">Catalog</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="favorites">Favorites</StyledNavLink>
        </li>
      </List>
    </nav>
  );
};
export default Navigaion;
