import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase">
      <Link to="/" className="tracking-[0.5rem]">
        Fast React Pizza CO.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
