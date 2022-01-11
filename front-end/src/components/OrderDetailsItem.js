import React from 'react';
import PropTypes from 'prop-types';

const OrderDetailsItem = ({ product, index }) => {
  const { name, price, salesProduct: { quantity } } = product;
  const dataNumber = `customer_order_details__element-order-table-item-number--${index}`;
  const dataName = `customer_order_details__element-order-table-name--${index}`;
  const dataQtt = `customer_order_details__element-order-table-quantity--${index}`;
  const dataPrice = `customer_order_details__element-order-table-sub-total--${index}`;
  const dataTotal = `customer_order_details__element-order-total-price--${index}`;

  return (
    <tr className="table-row flex default-td">
      <td className="bg-green-2 wd-10 text-center default-td" data-testid={ dataNumber }>
        { index + 1 }
      </td>
      <td className="bg-gray_1 wd-45 default-td" data-testid={ dataName }>
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
    </tr>
  );
};

OrderDetailsItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.number,
    salesProduct: PropTypes.shape({
      quantity: PropTypes.number,
    }),
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default OrderDetailsItem;
