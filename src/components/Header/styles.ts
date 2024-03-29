import styled from 'styled-components';
import { Title, appearUp } from '@/styles/utils';

type NavLinksProps = {
  $ismenuopen: boolean | number; // boolean or 0 | 1
};

export const Header = styled.header`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: ${({ theme }) => theme.borders.main};
  border-radius: 7px;
  animation: ${appearUp} 0.5s;

  h1 {
    ${Title}

    font-size: 2.5rem;
    transition: 0.3s filter;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const NavLinks = styled.nav<NavLinksProps>`
  ul {
    display: flex;
    gap: 2rem;

    list-style: none;
    font-size: 1.6rem;

    animation: ${appearUp} 0.2s;

    .active {
      color: ${({ theme }) => theme.colors.main};
      pointer-events: none;
    }

    .contact-link {
      display: none;
    }

    @media screen and (max-width: 768px) {
      padding: 2rem;
      display: ${({ $ismenuopen }) => ($ismenuopen ? 'flex' : 'none')};
      flex-direction: column;

      position: absolute;
      right: 7vw;
      top: 11vh;
      z-index: 100;

      border: ${({ theme }) => theme.borders.main};
      border-radius: 1rem;
      background-color: ${({ theme }) => theme.colors.lightBackground};

      .contact-link {
        display: inline-block;
      }
    }
  }

  li a {
    position: relative;
    color: ${({ theme }) => theme.colors.lightText};

    transition: 0.2s all;

    &::before {
      content: '';
      width: 90%;
      height: 1.5px;
      position: absolute;
      top: 100%;
      left: 5%;

      background-color: ${({ theme }) => theme.colors.lightText};
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

  @media screen and (max-width: 768px) {
    .contact-button {
      display: none;
    }
  }
`;

export const NavButton = styled.button`
  padding: 1.5rem;
  display: none;

  border: none;
  background: transparent;

  .list-icon {
    color: ${({ theme }) => theme.colors.lightText};
    transition: filter 0.4s;

    &:hover {
      filter: brightness(0.7);
    }
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
