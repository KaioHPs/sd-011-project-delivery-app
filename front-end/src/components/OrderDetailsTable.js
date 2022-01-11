import React from 'react';
import PropTypes from 'prop-types';
import OrderDetailsItem from './OrderDetailsItem';

const OrderDetailsTable = ({ products }) => (
  <table className="cart-table">
    <thead>
      <tr className="flex">
        <th className="table-column wd-10">Item</th>
        <th className="table-column wd-45">Descrição</th>
        <th className="table-column wd-15">Quantidade</th>
        <th className="table-column wd-15">Valor Unitário</th>
        <th className="table-column wd-15">Sub-Total</th>
      </tr>
    </thead>
    <tbody>
      {products.map((p, i) => (
        <OrderDetailsItem
          key={ `${i} - ${p.name}` }
          product={ p }
          index={ i }
        />
      ))}
    </tbody>
  </table>
);

OrderDetailsTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
};

export default OrderDetailsTable;
