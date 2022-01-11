import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomerNavbar from '../components/CustomerNavbar';
import CheckoutCartTable from '../components/CheckoutCartTable';

const successfulStatus = 201;

const CustomerCheckout = () => {
  const [selectedProds, setSelectedProds] = useState({});
  const [allSellers, setAllSellers] = useState([]);
  const [user, setUser] = useState({ name: '', role: '' });
  const [totalValue, settotalValue] = useState(0);
  const [isSaleFailed, setIsSaleFailed] = useState(false);

  useEffect(() => {
    const validateToken = async (token) => {
      const isValid = await axios.post('http://localhost:3001/token', { token })
        .then((r) => r.data.tokenIsValid);
      return isValid;
    };

    const getUser = async () => {
      const loggedUser = JSON.parse(window.localStorage.getItem('user'));
      if (loggedUser && loggedUser.token && await validateToken(loggedUser.token)) {
        setUser(loggedUser);
      } else {
        window.location.href = '/login';
      }
    };
    getUser();

    const cart = JSON.parse(window.localStorage.getItem('deliveryAppCart'));
    if (cart) {
      setSelectedProds(cart);
    }

    const getSellers = async () => {
      const sellers = await axios.get('http://localhost:3001/users/sellers')
        .then((r) => r.data);
      setAllSellers(sellers);
    };
    getSellers();
  }, []);

  useEffect(() => {
    console.log(allSellers);
  }, [allSellers]);

  useEffect(() => {
    console.log(selectedProds);
    const finalVal = Object.values(selectedProds).reduce((t, prod) => {
      const prodPrice = parseFloat(prod.price);
      return t + (parseFloat((prodPrice * prod.quantity).toFixed(2)));
    }, 0);
    settotalValue(finalVal);
    window.localStorage.setItem('deliveryAppCart', JSON.stringify(selectedProds));
  }, [selectedProds]);

  const finishSale = async (e) => {
    e.preventDefault();
    console.log({
      uId: user.id,
      sId: parseInt(e.target.seller.value, 10),
      price: parseFloat(totalValue.toFixed(2)),
      address: e.target.address.value,
      addressNum: e.target.addressNum.value,
      prods: Object.values(selectedProds),
    });
    const result = await axios.post('http://localhost:3001/sales/new', {
      uId: user.id,
      sId: parseInt(e.target.seller.value, 10),
      price: parseFloat(totalValue.toFixed(2)),
      address: e.target.address.value,
      addressNum: e.target.addressNum.value,
      prods: Object.values(selectedProds),
    }, {
      headers: {
        authorization: user.token,
      },
    })
      .then((r) => r);
    if (result.status === successfulStatus) {
      await window.localStorage.removeItem('deliveryAppCart');
      window.location.href = `/customer/orders/${result.data.id}`;
    } else {
      setIsSaleFailed(true);
    }
  };

  return (
    <div>
      <CustomerNavbar name={ user.name } role={ user.role } focusedPage="products" />
      {isSaleFailed ? <div>Falha na compra.</div> : ''}
      {Object.values(selectedProds).length ? (
        <div className="cart-container flex-column">
          Finalizar Pedido
          <CheckoutCartTable
            products={ selectedProds }
            setValFunc={ setSelectedProds }
            totalProds={ selectedProds }
          />
          <p className="bg-green-1 tc-white cart-total text-center">
            {'Total: R$ '}
            <span data-testid="customer_checkout__element-order-total-price">
              {totalValue.toFixed(2).replace(/\./, ',')}
            </span>
          </p>
        </div>
      ) : <div>Carrinho Vazio.</div> }
      {Object.values(selectedProds).length ? (
        <div className="cart-container flex-column">
          Detalhes e Endereço para Entrega
          <form onSubmit={ finishSale }>
            <label htmlFor="slct-sellers">
              P. Vendedora Responsável:
              <select
                id="slct-sellers"
                data-testid="customer_checkout__select-seller"
                name="seller"
              >
                {allSellers.map((s) => (
                  <option key={ `seller-${s.id}` } value={ s.id }>{ s.name }</option>
                ))}
              </select>
            </label>
            <label htmlFor="inpt-adress">
              Endereço
              <input
                id="inpt-adress"
                data-testid="customer_checkout__input-address"
                name="address"
                type="text"
                maxLength="100"
              />
            </label>
            <label htmlFor="inpt-adress-num">
              Número
              <input
                id="inpt-adress-num"
                data-testid="customer_checkout__input-addressNumber"
                name="addressNum"
                type="number"
                maxLength="50"
              />
            </label>
            <button
              data-testid="customer_checkout__button-submit-order"
              type="submit"
              className="bg-green-1 tc-white cart-btn"
            >
              Finalizar Pedido
            </button>
          </form>
        </div>
      ) : ''}
    </div>
  );
};

export default CustomerCheckout;
