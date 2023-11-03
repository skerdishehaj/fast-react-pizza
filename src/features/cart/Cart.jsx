import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';
import { getUser } from '../user/userSlice';
import { useDispatch } from 'react-redux';

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const username = useSelector(getUser);

  const handleClearCart = () => {
    console.log('Clear cart');
    dispatch(clearCart());
  };
  // const cart = fakeCart;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">
        {username ? `Your cart, ${username}` : `Cart`}
      </h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      {
        <div className="mt-6 space-x-4">
          {cart.length > 0 ? (
            <>
              <Button type="primary" to="/order/new">
                Order pizzas
              </Button>
              <Button onClick={handleClearCart} type="secondary">
                Clear Cart
              </Button>
            </>
          ) : (
            <p className="text-stone-500">
              Your cart is empty. <LinkButton to="/menu">Go to menu</LinkButton>{' '}
              to add pizzas.
            </p>
          )}
        </div>
      }
    </div>
  );
}

export default Cart;
