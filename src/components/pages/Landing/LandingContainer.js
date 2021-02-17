import React from 'react';
import StyledLanding from './StyledContainer';
import SearchBar from '../../common/Searchbar/SearchBar';
import LandingCarousel from './LandingCarousel';
import cityscape from '../../../images/cityscape.png';

function LandingContainer() {
  return (
    <StyledLanding>
      <div className="banner">
        <img className="bImg" src={cityscape} />
        <div className="searchBox">
          <SearchBar />
        </div>
      </div>
      <LandingCarousel />
    </StyledLanding>
  );
}

export default LandingContainer;
