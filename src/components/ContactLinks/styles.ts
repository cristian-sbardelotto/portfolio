import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5rem;

  font-size: 1.5rem;

  li a {
    width: fit-content;

    display: flex;
    align-items: center;
    gap: 4rem;

    span:hover {
      color: ${({ theme }) => theme.colors.alt};
      text-decoration: underline;
    }
  }
`;
