import { Link } from 'react-router-dom';

function Button({ children, disabled, to }) {
  const className =
    'inline-block rounded-full bg-yellow-500 px-4 py-3 font-bold uppercase tracking-wide text-stone-700 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4 ';

  if (to)
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
