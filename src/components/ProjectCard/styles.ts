import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  height: 450px;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media screen and (max-width: 1024px) {
    max-width: 90vw;
  }

  h4 {
    font-size: 2.5rem;

    a {
      transition: 0.3s;

      &:hover {
        cursor: pointer;
        filter: brightness(0.7);
      }
    }
  }

  p {
    font-size: 1.6rem;
    line-height: 150%;
    overflow-y: auto;
  }
`;

export const TechnologiesGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  cursor: default;

  span {
    font-size: 1.3rem;
    color: #737271;
  }
`;

export const ImageGroup = styled.div`
  &:hover {
    img {
      filter: brightness(0.5);
      cursor: pointer;
    }
  }

  img {
    transition: filter 0.3s;

    height: 220px;
    width: 100%;
  }
`;
