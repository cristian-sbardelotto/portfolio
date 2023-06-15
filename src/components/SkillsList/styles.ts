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
    height: 8rem;
    width: 8rem;

    transition: 0.3s scale;
  }

  span {
    width: 14rem;
    opacity: 0;

    text-align: center;
    font-size: 1.5rem;

    transition: 0.3s opacity;
  }
`;
