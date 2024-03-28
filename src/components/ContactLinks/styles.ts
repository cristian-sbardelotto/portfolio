import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-evenly;

  font-size: 2rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 7rem;

    li a {
      width: fit-content;

      display: flex;
      align-items: center;
      gap: 4rem;

      span:hover {
        color: ${({ theme }) => theme.colors.main};
        text-decoration: underline;
      }
    }
  }

  @media screen and (max-width: 968px) {
    flex-direction: column;
    align-items: center;
    font-size: 1.5rem;
    gap: 5rem;

    div {
      gap: 5rem;
      align-items: center;
    }

    li a {
      gap: 1rem;
    }
  }

  @media screen and (max-width: 524px) {
    font-size: 1rem;
  }
`;
