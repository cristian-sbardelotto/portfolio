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
      display: flex;
      gap: 8px;
      align-items: center;

      svg {
        display: none;
      }
    }

    &:hover {
      svg {
        display: inline-block;
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
  img {
    height: 220px;
    width: 100%;
    border-radius: 5px;

    transition: all 0.3s;

    &:hover {
      box-shadow: #7e74f171 -5px 5px, #7e74f12f -10px 10px;
      cursor: pointer;
      filter: brightness(0.9);
      transform: translate(0.5rem, -0.5rem);
    }
  }
`;
