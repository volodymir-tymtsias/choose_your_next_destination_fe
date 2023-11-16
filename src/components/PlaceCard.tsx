import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Place } from '../types/Place';

type Props = {
  place: Place,
};

export const PlaceCard: React.FC<Props> = ({ place }) => {
  const getTrimmedText = (text: string, numb: number) => {
    return text.length > numb ? text.slice(0,numb) + '...' : text;
  }
  // const { cartItems, addCartItems } = useContext(CartContext);
  // const { favorites, addRemoveToFavorites } = useContext(FavoritesContext);
  // const priceWithDiscount = product.price
  //   - (product.price * product.discount) / 100;
  // const inCart = cartItems.find(item => item.id === product.id);
  // const inFavorites = favorites.find(item => item.id === product.id);

  // const addToCart = () => {
  //   if (!inCart) {
  //     addCartItems(product);
  //   }
  // };

  // const onClickFavoritesHandler = (currentProduct: Product) => () => {
  //   addRemoveToFavorites(currentProduct);
  // };

  return (
    <article className="place-card">
      <Link
        to={`/${place.id}`}
        className="place-card__link"
      >
        <div className="place-card__img-container">
          <img
            src={`./images/PlacesFoto/img2.png`}
            alt={place.name}
            className="place-card__image"
          />
        </div>
        <div className="place-card__title">
          <h4 className="place-card__name">
            {getTrimmedText(place.name, 14)}
          </h4>
          <span className="icon icon--favorites"></span>
        </div>
        <p className="place-card__location">
          {getTrimmedText(place.location, 22)}
        </p>
        <div className="place-card__bottom">
          <div className="place-card__bottom-item">
            <span className="icon icon--rating"></span>
            {place.raiting}
          </div>
          <div className="place-card__bottom-item">
            <span className="icon icon--price-small"></span>
            {`$${place.price}`}
          </div>
        </div>
      </Link>
    </article>
  );
};
