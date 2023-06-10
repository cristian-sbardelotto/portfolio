import styled from 'styled-components';
import { Title } from '@/styles/utils/title';

type NavLinksProps = {
  ismenuopen: string;
};

export const Header = styled.header`
  @keyframes appear {
    0% {
      transform: translateX(2rem);
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  animation: appear 0.5s;

  h1 {
    ${Title}
  }
`;

export const NavLinks = styled.nav<NavLinksProps>`
  ul {
    display: flex;
    gap: 2rem;

    list-style: none;
    font-size: 1.6rem;

    animation: appear 0.2s;

    @media screen and (max-width: 768px) {
      padding: 2rem;
      display: ${({ ismenuopen }) => (ismenuopen === 'true' ? 'flex' : 'none')};
      flex-direction: column;

      position: absolute;
      right: 7vw;
      top: 11vh;

      border-radius: 1rem;
      background-color: ${({ theme }) => theme.colors.altBackground};
    }
  }

  li a {
    position: relative;

    transition: 0.2s all;

    &::before {
      content: '';
      width: 90%;
      height: 1.5px;
      position: absolute;
      top: 100%;
      left: 5%;

      background-color: ${({ theme }) => theme.colors.text};
      visibility: hidden;

      transform: scaleX(0);
      transition: all 0.3s ease-in-out 0s;
    }

    &:hover::before {
      visibility: visible;

      transform: scaleX(1);
    }
  }
`;

export const NavMenuGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  svg {
    cursor: pointer;
  }
`;

export const NavButton = styled.button`
  padding: 1.5rem;
  display: none;

  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const ContactButton = styled.button`
  padding: 1rem 1.5rem;

  border: 2px solid ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  background: transparent;
  font-family: '__Plus_Jakarta_Sans_fd0c7c',
    '__Plus_Jakarta_Sans_Fallback_fd0c7c';
  font-weight: 600;

  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.text};
    cursor: pointer;

    a {
      color: ${({ theme }) => theme.colors.background};
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
