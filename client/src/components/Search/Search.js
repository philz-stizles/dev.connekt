import React from 'react';
import { MdSearch } from 'react-icons/md';
import { SearchWrapper } from './Search.styles';

const Search = () => {
  const [search, setSearch] = React.useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <SearchWrapper onSubmit={handleSearchSubmit}>
      <MdSearch />
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
    </SearchWrapper>
  );
};

export default Search;
