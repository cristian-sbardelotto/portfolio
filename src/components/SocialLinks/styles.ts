import styled from 'styled-components';

export const SocialLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;

  list-style: none;

  li a svg {
    color: ${({ theme }) => theme.colors.lightText};
    transition: 0.2s color;

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.main};
    }
  }

  @media screen and (max-width: 768px) {
    gap: 1rem;

    svg {
      height: 18px;
      width: 18px;
    }
  }
`;
