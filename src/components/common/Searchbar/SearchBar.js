import React, { useState, useContext } from 'react';
import { Input } from 'antd';
import locationOnSubmit from '../../../utils/locationSubmit';
import { LocationContext } from '../../../state/contexts';

const SearchBar = () => {
  const [searchVal, setSearchVal] = useState('');
  const { setLocation } = useContext(LocationContext);

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
      onSearch={() => locationOnSubmit(setLocation, searchVal)}
    />
  );
};

export default SearchBar;
