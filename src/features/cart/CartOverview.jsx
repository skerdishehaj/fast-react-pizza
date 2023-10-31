import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className="p-4sm:px-6 flex items-center justify-between bg-stone-800 px-4 py-4 uppercase text-stone-200 ">
      <p className="space-x-6 text-sm font-semibold text-stone-300 sm:space-x-6 md:text-base">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
