import React from 'react';
import PropTypes from 'prop-types';

const CheckoutCartItem = ({ product, index, deleteFunc }) => {
  const { name, quantity, price, id } = product;
  const dataNumber = `customer_checkout__element-order-table-item-number--${index}`;
  const dataName = `customer_checkout__element-order-table-name--${index}`;
  const dataQtt = `customer_checkout__element-order-table-quantity--${index}`;
  const dataPrice = `customer_checkout__element-order-table-unit-price--${index}`;
  const dataTotal = `customer_checkout__element-order-table-sub-total--${index}`;
  const dataRemove = `customer_checkout__element-order-table-remove--${index}`;

  return (
    <tr className="table-row flex default-td">
      <td className="bg-green-2 wd-10 text-center default-td" data-testid={ dataNumber }>
        { index + 1 }
      </td>
      <td className="bg-gray_1 wd-30 default-td" data-testid={ dataName }>
        { name }
      </td>
      <td
        className="bg-green-1 tc-white wd-15 text-center default-td"
        data-testid={ dataQtt }
      >
        { quantity }
      </td>
      <td
        className="bg-purple-1 tc-white wd-15 text-center default-td"
        data-testid={ dataPrice }
      >
        { `R$ ${price.replace(/\./, ',')}` }
      </td>
      <td
        className="bg-blue-1 tc-white wd-15 text-center default-td"
        data-testid={ dataTotal }
      >
        { `R$ ${(parseFloat(price) * quantity).toFixed(2).replace(/\./, ',')}` }
      </td>
      <td className="wd-15 bg-green-2 text-center button-td">
        <button
          type="button"
          className="delete-btn bg-green-2 tc-white"
          onClick={ () => deleteFunc(id) }
          data-testid={ dataRemove }
        >
          Remover
        </button>
      </td>
    </tr>
  );
};

CheckoutCartItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
  index: PropTypes.number.isRequired,
  deleteFunc: PropTypes.func.isRequired,
};

export default CheckoutCartItem;
