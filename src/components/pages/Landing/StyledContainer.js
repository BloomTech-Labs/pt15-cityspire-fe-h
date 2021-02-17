import styled from 'styled-components';

const StyledLanding = styled.div`
  width: 100%;
  padding: 0 0 1% 0;

  .banner {
    width: 100%;
    position: relative;

    .bImg {
      width: 100%;
    }

    .searchBox {
      position: absolute;
      height: 20%;
      width: 40%;
      background: rgba(0, 0, 0, 0.8);
      border-radius: 5px;
      top: 40%;
      left: 30%;
      display: flex;
      align-items: center;

      .search {
        width: 84%;
        margin: 0 13%;
      }
    }
  }

  figure {
    display: flex;
    align-items: center;
    width: 90%;
    height: 10%;
    margin: 2% 5% 2% 5%;
    border-radius: 2px;
    overflow: hidden;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    figcaption {
      width: 40%;
      font-size: 1.2rem;
      line-height: 2;
      text-align: center;
    }

    img {
      width: 60%;
    }
  }
`;

export default StyledLanding;
