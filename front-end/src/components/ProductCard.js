import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ product, setValFunc, totalProds }) => {
  const { id, name, price, url_image: urlImage } = product;
  const [quantity, setQtt] = useState(0);
  const dataTitle = `customer_products__element-card-title--${id}`;
  const dataPrice = `customer_products__element-card-price--${id}`;
  const dataImg = `customer_products__img-card-bg-image--${id}`;
  const dataAdd = `customer_products__button-card-add-item--${id}`;
  const dataSub = `customer_products__button-card-rm-item--${id}`;
  const dataQtt = `customer_products__input-card-quantity--${id}`;

  useEffect(() => {
    const cart = JSON.parse(window.localStorage.getItem('deliveryAppCart'));
    if (cart && cart[id]) {
      setQtt(cart[id].quantity);
    }
  }, []);

  useEffect(() => {
    const newVals = { ...totalProds };
    if (quantity === '' || quantity === 0) {
      delete newVals[id];
    } else {
      newVals[id] = { price, quantity, name, id };
    }
    setValFunc(newVals);
  }, [quantity]);

  const changeQtt = (e) => {
    if (e.target.value !== '') {
      setQtt(parseInt(e.target.value, 10));
    } else setQtt(e.target.value);
  };

  const sumQtt = () => {
    setQtt(parseInt(quantity + 1, 10));
  };
  const subQtt = () => {
    if (quantity > 0) {
      setQtt(parseInt(quantity - 1, 10));
    }
  };

  return (
    <div className="prod-card">
      <div className="prod-info-cont">
        <span>
          {'R$ '}
          <span data-testid={ dataPrice }>
            { price.replace(/\./, ',') }
          </span>
        </span>
        <img data-testid={ dataImg } src={ urlImage } alt={ name } className="prod-img" />
      </div>
      <span data-testid={ dataTitle }>{ name }</span>
      <div>
        <button type="button" data-testid={ dataSub } onClick={ subQtt }>-</button>
        <input
          type="number"
          placeholder="0"
          min="0"
          value={ quantity }
          data-testid={ dataQtt }
          onChange={ changeQtt }
        />
        <button type="button" data-testid={ dataAdd } onClick={ sumQtt }>+</button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    url_image: PropTypes.string,
  }).isRequired,
  setValFunc: PropTypes.func.isRequired,
  totalProds: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ProductCard;
