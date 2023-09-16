import Card from '../../components/Card';
import { FavoritesList } from './Favorites.styled';
const Favorites = ({ collection = [], setCollection, dellFavorit }) => {
  return (
    <FavoritesList>
      {collection.length > 0 &&
        collection.map(el => (
          <li key={el.id}>
            <Card
              data={el}
              collection={collection}
              setCollection={setCollection}
              dellFavorit={dellFavorit}
            />
          </li>
        ))}
    </FavoritesList>
  );
};
export default Favorites;
