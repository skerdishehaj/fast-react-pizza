import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    console.log(query);
    setQuery('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='Search order #'
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
    </form>
  );
}

export default SearchOrder;
