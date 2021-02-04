import React, { useState, useContext } from 'react';
import { Input } from 'antd';
import cityOnSubmit from '../../../utils/citySubmit';
import { CityContext } from '../../../state/contexts';

const SearchBar = () => {
  const [searchVal, setSearchVal] = useState('');
  const [setCity] = useContext(CityContext);

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
      onSearch={() => cityOnSubmit(setCity)}
    />
  );
};

export default SearchBar;
