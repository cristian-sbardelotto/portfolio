import styled from 'styled-components';

export const Container = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  li,
  a,
  button {
    width: 100%;
  }

  button {
    padding-block: 2rem;
    font-size: 1.5rem;
  }
`;
