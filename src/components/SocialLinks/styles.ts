import styled from 'styled-components';

export const SocialLinks = styled.ul`
  display: flex;
  gap: 2rem;

  list-style: none;

  li a svg {
    transition: 0.2s color;

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.alt};
    }
  }
`;
