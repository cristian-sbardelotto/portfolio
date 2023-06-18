import styled from 'styled-components';

export const ListItem = styled.li`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  &:hover {
    img {
      scale: 1.2;
    }

    span {
      opacity: 1;
    }
  }

  img {
    height: 7rem;
    width: 7rem;

    transition: 0.3s scale;

    @media screen and (max-width: 768px) {
      height: 6rem;
      width: 6rem;
    }
  }

  span {
    width: 12rem;
    opacity: 0;

    text-align: center;
    font-size: 1.2rem;

    transition: 0.3s opacity;
  }
`;
