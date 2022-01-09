import React from 'react';
import PropTypes from 'prop-types';
import CheckoutCartItem from './CheckoutCartItem';

const CheckoutCartTable = ({ products, setValFunc, totalProds }) => {
  const deleteFromCart = (id) => {
    const newVals = { ...totalProds };
    delete newVals[id];
    setValFunc(newVals);
  };

  return (
    <table className="cart-table">
      <thead>
        <tr className="flex">
          <th className="table-column wd-10">Item</th>
          <th className="table-column wd-30">Descrição</th>
          <th className="table-column wd-15">Quantidade</th>
          <th className="table-column wd-15">Valor Unitário</th>
          <th className="table-column wd-15">Sub-Total</th>
          <th className="table-column wd-15">Remover Item</th>
        </tr>
      </thead>
      <tbody>
        { Object.values(products).map((p, i) => (
          <CheckoutCartItem
            key={ `${i} - ${p.name}` }
            product={ p }
            index={ i }
            deleteFunc={ deleteFromCart }
          />
        )) }
      </tbody>
    </table>
  );
};

CheckoutCartTable.propTypes = {
  products: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
    id: PropTypes.number,
  })).isRequired,
  setValFunc: PropTypes.func.isRequired,
  totalProds: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default CheckoutCartTable;
