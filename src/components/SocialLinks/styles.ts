import styled from 'styled-components';

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const Item = styled.a`
  width: 50px;
  height: 50px;

  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.lightBackground};
  border: ${({ theme }) => theme.borders.main};
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.3s all ease;

  &:hover {
    background: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.background};
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.main};
  }
`;
