import Card from '../../components/Card';
import { FavoritesList } from './Favorites.styled';
const Favorites = ({ collection = [], setCollection, dellFavorit }) => {
  return (
    <>
      {collection.length > 0 ? (
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
      ) : (
        <div>your list favorites is empty</div>
      )}
    </>
  );
};
export default Favorites;
