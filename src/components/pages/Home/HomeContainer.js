import React, { useState, useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';

import RenderHomePage from './RenderHomePage';
import StyledHome from './StyledContainer';
import SearchBar from '../../common/Searchbar/SearchBar';
import HomeCarousel from './HomeCarousel';
import cityscape from '../../../images/cityscape.png';

function HomeContainer() {
  return (
    <StyledHome>
      <div className="banner">
        <img className="bImg" src={cityscape} />
        <div className="searchBox">
          <SearchBar />
        </div>
      </div>
      <HomeCarousel />
    </StyledHome>
  );
}

export default HomeContainer;
