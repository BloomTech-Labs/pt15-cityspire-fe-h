import React from 'react';
import StyledLanding from './StyledContainer';
import SearchBar from '../../common/Searchbar/SearchBar';
import cityscape from '../../../images/cityscape.png';
import mapPic from '../../../images/mapPic.png';

function LandingContainer() {
  return (
    <StyledLanding>
      <div className="banner">
        <img className="bImg" src={cityscape} />
        <div className="searchBox">
          <div className="search">
            <SearchBar />
          </div>
        </div>
      </div>
      <figure>
        <figcaption>
          Enim reprehenderit amet sit consequat aliquip culpa reprehenderit
          dolor mollit labore enim id elit magna. Consequat excepteur laborum
          culpa fugiat. Ullamco consequat dolor aute nisi non elit pariatur.
          Consequat pariatur dolore quis nulla dolor nulla ullamco consectetur
          magna.
        </figcaption>
        <img src={mapPic} />
      </figure>
    </StyledLanding>
  );
}

export default LandingContainer;
