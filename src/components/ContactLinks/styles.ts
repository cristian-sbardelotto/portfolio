import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5rem;

  li a {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;
