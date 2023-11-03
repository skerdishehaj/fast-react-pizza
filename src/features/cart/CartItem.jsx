import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();
  const handleOnClick = () => {
    console.log(`Delete pizza ${pizzaId}`);
    dispatch(deleteItem(pizzaId));
  };

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        <span className="font-bold">{quantity}&times;</span> {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button onClick={handleOnClick} type="small">
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
