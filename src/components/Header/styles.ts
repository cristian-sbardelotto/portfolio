import styled from 'styled-components';

export const Header = styled.header`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 2.5rem;
  }

  nav ul {
    margin-right: 4rem;
    display: flex;
    gap: 2rem;

    list-style: none;
    font-size: 1.6rem;

    * {
      text-decoration: none;
    }
  }

  > div {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }
`;
