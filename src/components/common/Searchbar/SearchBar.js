import React, { useState } from 'react';
import { Input } from 'antd';

const SearchBar = () => {
  const [searchVal, setSearchVal] = useState('');

  const handleChanges = event => {
    setSearchVal(event.target.value);
  };

  const { Search } = Input;
  return (
    <Search
      placeholder="Search for a location"
      value={searchVal}
      onChange={handleChanges}
      enterButton
    />
  );
};

export default SearchBar;
